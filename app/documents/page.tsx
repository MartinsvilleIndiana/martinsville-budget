import { loadSummary } from '@/app/lib/data';
import DocumentsClient from '@/components/DocumentsClient';

export default async function DocumentsPage() {
  const data = await loadSummary();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-civic-navy">Financial Documents</h1>
      <p className="text-gray-700 max-w-3xl">Download adopted budgets, annual reports, and other public records.</p>
      <DocumentsClient data={data} />
    </div>
  );
}
