import { NextResponse } from 'next/server';
import { getBlogPost } from '@/lib/blog';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const { searchParams } = new URL(request.url);
    const language = (searchParams.get('lang') || 'en') as 'en' | 'tr';
    const post = await getBlogPost(slug, language);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 