import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function serverClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// POST /api/posts/[id]/save — toggle bookmark for a post (email-identified)
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: post_id } = await params;
  const { voter_email, saved } = await req.json();

  if (!voter_email) {
    return NextResponse.json({ error: 'voter_email is required' }, { status: 400 });
  }

  const supabase = serverClient();

  if (saved) {
    // Upsert bookmark
    const { error } = await supabase
      .from('saved_posts')
      .upsert({ post_id, voter_email }, { onConflict: 'post_id,voter_email' });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ saved: true });
  } else {
    // Remove bookmark
    const { error } = await supabase
      .from('saved_posts')
      .delete()
      .eq('post_id', post_id)
      .eq('voter_email', voter_email);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ saved: false });
  }
}
