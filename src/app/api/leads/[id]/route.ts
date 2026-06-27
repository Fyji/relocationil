import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

type Ctx = { params: Promise<{ id: string }> };

// PATCH — update lead status/notes (admin)
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const password = req.headers.get("x-admin-password");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "relocation2024";
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await ctx.params;
  const body = await req.json();
  const sets: string[] = [];
  const vals: unknown[] = [];
  let idx = 1;

  if (body.status !== undefined) {
    sets.push(`status = $${idx++}`);
    vals.push(body.status);
  }
  if (body.adminNotes !== undefined) {
    sets.push(`admin_notes = $${idx++}`);
    vals.push(body.adminNotes);
  }

  if (sets.length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  vals.push(id);
  try {
    await pool.query(`UPDATE leads SET ${sets.join(", ")} WHERE id = $${idx}`, vals);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("PATCH /api/leads/[id] error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE — remove lead (admin)
export async function DELETE(req: NextRequest, ctx: Ctx) {
  const password = req.headers.get("x-admin-password");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "relocation2024";
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await ctx.params;
  try {
    await pool.query(`DELETE FROM leads WHERE id = $1`, [id]);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("DELETE /api/leads/[id] error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
