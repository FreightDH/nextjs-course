import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { posts } from './mockData';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (query) {
    return NextResponse.json(posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())));
  }

  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const headersList = await headers();
  const cookiesList = await cookies();
  const contentType = headersList.get('Content-Type');
  const cookie = cookiesList.get('Cookie_1');

  return NextResponse.json({ body, contentType, cookie });
}
