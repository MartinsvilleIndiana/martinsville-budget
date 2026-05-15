'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody, Pill } from '@/components/ui';
import type { SummaryData } from '@/app/lib/data';

export default function DocumentsClient({ data }: { data: SummaryData }) {
  const [q, setQ] = useState('');
  const docs = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return data.documents;
    return data.documents.filter(d =>
      d.title.toLowerCase().includes(query) || d.type.toLowerCase().includes(query) || String(d.year).includes(query)
    );
  }, [q, data.documents]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold mb-2">About documents</h2>
        <p className="text-sm text-gray-700">These are commonly requested public financial documents. Links can be updated as files are published.</p>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700">Search</label>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Title, type, year…" className="w-full md:w-96 rounded-xl border bg-white px-4 py-2 text-sm" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {docs.map(d => (
          <Card key={d.title}>
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{d.title}</div>
                  <div className="text-sm text-gray-600">Year: <b>{d.year}</b></div>
                </div>
                <Pill>{d.type}</Pill>
              </div>
              <div className="mt-4">
                <a className="font-semibold text-civic-navy hover:underline" href={d.url} target="_blank" rel="noreferrer">Open / Download</a>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
