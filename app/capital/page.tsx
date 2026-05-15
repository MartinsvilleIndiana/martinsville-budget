import { loadSummary } from '@/app/lib/data';
import CapitalClient from '@/components/CapitalClient';

export default async function CapitalPage() {
  const data = await loadSummary();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-civic-navy">Capital Projects</h1>
      <p className="text-gray-700 max-w-3xl">See active and planned projects, funding sources, and progress summaries.</p>
      <CapitalClient data={data} />
    </div>
  );
}
