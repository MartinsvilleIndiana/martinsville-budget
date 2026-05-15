import Link from 'next/link';
import { BarChart3, FileText, Building2, BookOpen } from 'lucide-react';
import { Card, CardBody } from '@/components/ui';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-civic-navy">City Financial Transparency</h1>
        <p className="text-gray-700 max-w-3xl">
          Welcome! This site shows the City’s budget and spending totals in plain English. Everything is presented as
          rollups (totals) by fund and department and is updated monthly after the City closes the books.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardBody>
            <BarChart3 className="h-8 w-8 text-blue-700 mb-4" />
            <h2 className="text-lg font-semibold mb-2">Budget & Spending</h2>
            <p className="text-sm text-gray-600 mb-4">See the adopted budget and how much has been spent so far.</p>
            <Link className="inline-flex font-semibold text-civic-navy hover:underline" href="/budget">View Budget</Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Building2 className="h-8 w-8 text-green-700 mb-4" />
            <h2 className="text-lg font-semibold mb-2">Capital Projects</h2>
            <p className="text-sm text-gray-600 mb-4">Track major projects and progress over time.</p>
            <Link className="inline-flex font-semibold text-civic-navy hover:underline" href="/capital">View Projects</Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <FileText className="h-8 w-8 text-purple-700 mb-4" />
            <h2 className="text-lg font-semibold mb-2">Financial Documents</h2>
            <p className="text-sm text-gray-600 mb-4">Download budgets, annual reports, and other public records.</p>
            <Link className="inline-flex font-semibold text-civic-navy hover:underline" href="/documents">View Documents</Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <BookOpen className="h-8 w-8 text-amber-700 mb-4" />
            <h2 className="text-lg font-semibold mb-2">Glossary</h2>
            <p className="text-sm text-gray-600 mb-4">Quick definitions for common budget and finance terms.</p>
            <Link className="inline-flex font-semibold text-civic-navy hover:underline" href="/glossary">Open Glossary</Link>
          </CardBody>
        </Card>
      </div>

      <div className="rounded-2xl border bg-white p-6">
        <h3 className="text-lg font-semibold mb-2">A quick note about what you’re seeing</h3>
        <p className="text-sm text-gray-700">
          Spending rises and falls during the year. Some costs are seasonal, and some happen on set schedules.
          This portal is meant to help you understand the big picture.
        </p>
      </div>
    </div>
  );
}
