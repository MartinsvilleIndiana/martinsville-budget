import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white shadow-sm">{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-gray-700 bg-gray-50">{children}</span>;
}

export function Progress({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
      <div className="h-3 bg-civic-navy" style={{ width: `${v}%` }} />
    </div>
  );
}
