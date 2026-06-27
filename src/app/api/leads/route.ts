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
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2));
}

// POST — submit new lead
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, interest, notes } = body;

    if (!name || !phone || !email || !interest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const leads = await getLeads();
    const newLead: Lead = {
      id: crypto.randomUUID(),
      name,
      phone,
      email,
      interest,
      notes: notes || "",
      createdAt: new Date().toISOString(),
      status: "new",
      adminNotes: "",
    };

    leads.unshift(newLead);
    await saveLeads(leads);

    return NextResponse.json({ success: true, id: newLead.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET — retrieve leads (admin)
export async function GET(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "relocation2024";

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getLeads();
  return NextResponse.json(leads);
}
