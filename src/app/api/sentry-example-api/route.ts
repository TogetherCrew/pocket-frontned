import { NextRequest, NextResponse } from 'next/server';

// A faulty API route to test Sentry's error monitoring
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('error');

  if (query) throw new Error('Sentry Example API Route Error');

  return NextResponse.json({
    data: 'Testing Sentry Error, No Error Happened ...',
  });
}
