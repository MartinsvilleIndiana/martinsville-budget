import { loadSummary } from '@/app/lib/data';
import BudgetClient from '@/components/BudgetClient';

export default async function BudgetPage() {
  const data = await loadSummary();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-civic-navy">Budget & Spending</h1>
      <p className="text-gray-700 max-w-3xl">
        This page shows totals by fund and department. It’s designed to be easy to understand and is updated monthly.
      </p>
      <BudgetClient data={data} />
    </div>
  );
}
