import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "leads.json");

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  notes: string;
  createdAt: string;
  status: "new" | "contacted" | "qualified" | "closed";
  adminNotes: string;
}

async function getLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveLeads(leads: Lead[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2));
}

// PATCH — update lead status/notes (admin)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const password = req.headers.get("x-admin-password");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "relocation2024";

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const leads = await getLeads();
  const index = leads.findIndex((l) => l.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  if (body.status) leads[index].status = body.status;
  if (body.adminNotes !== undefined) leads[index].adminNotes = body.adminNotes;

  await saveLeads(leads);
  return NextResponse.json(leads[index]);
}

// DELETE — delete lead (admin)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const password = req.headers.get("x-admin-password");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "relocation2024";

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const leads = await getLeads();
  const filtered = leads.filter((l) => l.id !== id);

  if (filtered.length === leads.length) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  await saveLeads(filtered);
  return NextResponse.json({ success: true });
}
