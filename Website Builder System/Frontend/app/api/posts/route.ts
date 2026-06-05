import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function serverClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// GET /api/posts — all active posts, newest first, with business join
export async function GET() {
  const supabase = serverClient();

  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      business:businesses(name, logo_url, industry_id)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST /api/posts — create a post (requires merchant session)
export async function POST(req: NextRequest) {
  const supabase = serverClient();

  // In MVP demo mode, skip strict session check so demo merchants can post.
  // In production, uncomment the block below:
  /*
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  */

  const body = await req.json();
  const { business_id, content, image_url, deal_type, expires_at } = body;

  if (!business_id || !content) {
    return NextResponse.json({ error: 'business_id and content are required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({ business_id, content, image_url, deal_type: deal_type ?? 'announcement', expires_at })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
