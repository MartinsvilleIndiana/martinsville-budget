'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody, Pill } from '@/components/ui';
import { glossary, type GlossaryItem } from '@/components/glossaryData';

const categories = ['All', 'Budget', 'Accounting', 'Capital', 'Oversight', 'General'] as const;

export default function GlossaryClient() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<(typeof categories)[number]>('All');

  const items = useMemo(() => {
    const query = q.trim().toLowerCase();
    return glossary
      .filter(i => (cat === 'All' ? true : i.category === cat))
      .filter(i => !query ? true : (i.term.toLowerCase().includes(query) || i.definition.toLowerCase().includes(query)));
  }, [q, cat]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold mb-2">Glossary</h2>
        <p className="text-sm text-gray-700">Short definitions for common budget and finance terms.</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-gray-700">Search</label>
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Type a term…" className="w-full md:w-80 rounded-xl border bg-white px-4 py-2 text-sm" />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-gray-700">Category</label>
          <select value={cat} onChange={(e)=>setCat(e.target.value as any)} className="rounded-xl border bg-white px-4 py-2 text-sm">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {items.map((i: GlossaryItem) => (
          <Card key={i.term}>
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{i.term}</div>
                  <div className="text-sm text-gray-700 mt-2">{i.definition}</div>
                </div>
                <Pill>{i.category}</Pill>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
