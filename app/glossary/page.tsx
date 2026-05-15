import GlossaryClient from '@/components/GlossaryClient';

export default function GlossaryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-civic-navy">Glossary</h1>
      <p className="text-gray-700 max-w-3xl">Plain-English definitions for financial terms used on this site.</p>
      <GlossaryClient />
    </div>
  );
}
