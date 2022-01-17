import { NextRequest, NextResponse } from 'next/server';

export default async function redirects(req: NextRequest) {
  console.log('middleware');
  if (!req.cookies.isLogged) return NextResponse.redirect('/401');
}
