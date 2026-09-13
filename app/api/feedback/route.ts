import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export const runtime = "nodejs";

type FeedbackPayload = {
  name?: string;
  email?: string;
  rating?: number;
  message?: string;
  page?: string;
  website?: string; // honeypot
};

export async function POST(req: NextRequest) {
  let body: FeedbackPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const message = body.message?.trim();
  const rating = Number(body.rating);

  if (!message || !Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "A rating (1–5) and a short message are required." },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("feedback").insert({
      name: body.name?.trim() || null,
      email: body.email?.trim() || null,
      rating,
      message,
      page: body.page?.trim() || null,
    });

    if (error) {
      console.error("Supabase insert error (feedback):", error.message);
      return NextResponse.json(
        { error: "We could not save your feedback right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Feedback route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
