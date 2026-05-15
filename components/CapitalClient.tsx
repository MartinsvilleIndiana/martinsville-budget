'use client';

import { useMemo, useState } from 'react';
import { money } from '@/components/format';
import { Card, CardBody, Pill, Progress } from '@/components/ui';
import type { SummaryData } from '@/app/lib/data';

export default function CapitalClient({ data }: { data: SummaryData }) {
  const [q, setQ] = useState('');
  const items = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return data.capitalProjects;
    return data.capitalProjects.filter(p =>
      p.projectName.toLowerCase().includes(query) || p.fund.toLowerCase().includes(query) || (p.status || '').toLowerCase().includes(query)
    );
  }, [q, data.capitalProjects]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold mb-2">What is a capital project?</h2>
        <p className="text-sm text-gray-700">Capital projects are larger, one‑time investments (roads, sidewalks, buildings, equipment) that improve City services over time.</p>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700">Search</label>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Project, fund, or status…" className="w-full md:w-96 rounded-xl border bg-white px-4 py-2 text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(p => {
          const prog = p.budgeted > 0 ? (p.spent / p.budgeted) : 0;
          return (
            <Card key={p.projectName}>
              <CardBody>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.projectName}</h3>
                    <div className="text-sm text-gray-600">Fund: <b>{p.fund}</b></div>
                  </div>
                  <Pill>{p.status}</Pill>
                </div>

                {p.description && <p className="text-sm text-gray-700 mt-3">{p.description}</p>}

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span>Budgeted</span><b>{money(p.budgeted)}</b></div>
                  <div className="flex justify-between"><span>Spent to Date</span><b>{money(p.spent)}</b></div>
                  <div className="flex justify-between"><span>Remaining</span><b>{money(p.budgeted - p.spent)}</b></div>
                </div>

                <div className="mt-4">
                  <Progress value={prog * 100} />
                  <div className="mt-2 text-xs text-gray-500">Progress: {Math.round(prog*100)}%</div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
