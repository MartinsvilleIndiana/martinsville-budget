'use client';

import { useMemo, useState } from 'react';
import { money, pct } from '@/components/format';
import { Card, CardBody, Progress, Pill } from '@/components/ui';
import type { SummaryData } from '@/app/lib/data';

export default function BudgetClient({ data }: { data: SummaryData }) {
  const [q, setQ] = useState('');

  const funds = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return data.funds;
    return data.funds
      .map(f => ({
        ...f,
        departments: f.departments?.filter(d =>
          d.department.toLowerCase().includes(query) || f.fund.toLowerCase().includes(query)
        )
      }))
      .filter(f => f.fund.toLowerCase().includes(query) || (f.departments && f.departments.length > 0));
  }, [q, data.funds]);

  const spentPct = data.totals.adopted > 0 ? (data.totals.spent / data.totals.adopted) : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-6 space-y-2">
        <h2 className="text-xl font-semibold">How to read this page</h2>
        <p className="text-sm text-gray-700">
          <b>Adopted Budget</b> is the plan approved for the year. <b>Spent to Date</b> is what has been paid or recorded
          so far this year. <b>Remaining</b> is the difference (Adopted minus Spent).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card><CardBody>
          <div className="text-sm text-gray-500">Adopted Budget</div>
          <div className="text-2xl font-bold text-civic-navy">{money(data.totals.adopted)}</div>
        </CardBody></Card>
        <Card><CardBody>
          <div className="text-sm text-gray-500">Spent to Date</div>
          <div className="text-2xl font-bold text-civic-navy">{money(data.totals.spent)}</div>
        </CardBody></Card>
        <Card><CardBody>
          <div className="text-sm text-gray-500">Remaining</div>
          <div className="text-2xl font-bold text-civic-navy">{money(data.totals.adopted - data.totals.spent)}</div>
        </CardBody></Card>
      </div>

      <div className="rounded-2xl border bg-white p-6 space-y-2">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Overall progress</div>
          <Pill>{pct(spentPct)} spent</Pill>
        </div>
        <Progress value={spentPct * 100} />
        <p className="text-xs text-gray-500">A simple check is comparing spending to the time of year. This is only a guide—some costs are seasonal.</p>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700">Search</label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Fund or department…"
          className="w-full md:w-96 rounded-xl border bg-white px-4 py-2 text-sm"
        />
      </div>

      <div className="space-y-6">
        {funds.map(f => {
          const fundSpentPct = f.adopted > 0 ? (f.spent / f.adopted) : 0;
          return (
            <Card key={f.fund}>
              <CardBody>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold">{f.fund}</h3>
                    <div className="text-sm text-gray-600 mt-1">
                      Adopted: <b>{money(f.adopted)}</b> • Spent: <b>{money(f.spent)}</b> • Remaining: <b>{money(f.adopted - f.spent)}</b>
                    </div>
                  </div>
                  <div className="min-w-40 text-right">
                    <div className="text-xs text-gray-500">Progress</div>
                    <div className="font-semibold">{pct(fundSpentPct)}</div>
                  </div>
                </div>

                <div className="mt-3"><Progress value={fundSpentPct * 100} /></div>

                {f.departments && f.departments.length > 0 && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b">
                          <th className="py-2 pr-4">Department</th>
                          <th className="py-2 pr-4">Adopted</th>
                          <th className="py-2 pr-4">Spent</th>
                          <th className="py-2 pr-4">Remaining</th>
                        </tr>
                      </thead>
                      <tbody>
                        {f.departments.map(d => (
                          <tr key={d.department} className="border-b last:border-0">
                            <td className="py-2 pr-4 font-medium">{d.department}</td>
                            <td className="py-2 pr-4">{money(d.adopted)}</td>
                            <td className="py-2 pr-4">{money(d.spent)}</td>
                            <td className="py-2 pr-4">{money(d.adopted - d.spent)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
