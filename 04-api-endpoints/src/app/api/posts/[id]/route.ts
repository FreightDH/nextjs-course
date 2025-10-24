import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  // Логика удаления поста, дальше можем сделать автоматический переход на главную страницу
  // redirect('/');

  return NextResponse.json({ id });
}
