import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      businessName,
      phone,
      email,
      category,
      address,
      links,
      tier,
      inPersonDemo,
      bestTime,
    } = body;

    if (!name || !businessName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SPREADSHEET_ID } = process.env;

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SPREADSHEET_ID) {
      console.warn('Google Sheets credentials missing — simulating success for dev.');
      console.log('Contact submission (dev mode):', { name, businessName, phone, email, category, address, links, tier, inPersonDemo, bestTime });
      return NextResponse.json({ success: true });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SPREADSHEET_ID,
      range: 'BUSINESS LEADS!A:K',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          timestamp,
          name,
          businessName,
          phone,
          email,
          category ?? '',
          address ?? '',
          links ?? '',
          tier ?? '',
          inPersonDemo ?? '',
          bestTime ?? '',
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
