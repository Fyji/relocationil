import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// POST — submit new lead
export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, interest, notes } = await req.json();

    if (!name || !phone || !email || !interest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await pool.query(
      `INSERT INTO leads (name, phone, email, interest, notes)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id`,
      [name, phone, email, interest, notes || ""]
    );

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (e) {
    console.error("POST /api/leads error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET — retrieve leads (admin, password-protected)
export async function GET(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "relocation2024";

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await pool.query(
      `SELECT id, name, phone, email, interest, notes, status, admin_notes AS "adminNotes", created_at AS "createdAt"
       FROM leads ORDER BY created_at DESC LIMIT 500`
    );
    return NextResponse.json(result.rows);
  } catch (e) {
    console.error("GET /api/leads error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
