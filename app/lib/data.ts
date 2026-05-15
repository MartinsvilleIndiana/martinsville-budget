import { readFile } from 'fs/promises';
import path from 'path';

export type FundDepartment = { department: string; adopted: number; spent: number };
export type FundRollup = { fund: string; adopted: number; spent: number; departments?: FundDepartment[] };
export type CapitalProject = {
  projectName: string;
  fund: string;
  budgeted: number;
  spent: number;
  status: 'Planned' | 'In Progress' | 'Complete' | 'On Hold' | string;
  description?: string;
  owner?: string;
};
export type PublicDoc = { title: string; type: string; year: number; url: string };

export type SummaryData = {
  fiscalYear: number;
  lastUpdated: string;
  totals: { adopted: number; spent: number };
  funds: FundRollup[];
  capitalProjects: CapitalProject[];
  documents: PublicDoc[];
};

export async function loadSummary(): Promise<SummaryData> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'summary.json');
  const raw = await readFile(filePath, 'utf-8');
  return JSON.parse(raw);
}
