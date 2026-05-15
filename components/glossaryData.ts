export type GlossaryItem = {
  term: string;
  category: 'Budget' | 'Accounting' | 'Capital' | 'Oversight' | 'General';
  definition: string;
};

export const glossary: GlossaryItem[] = [
  { term: 'Adopted Budget', category: 'Budget', definition: 'The plan approved by the City Council that shows how much can be spent during the year.' },
  { term: 'Spent to Date', category: 'Budget', definition: 'What has been paid or recorded so far this year, after monthly financial updates.' },
  { term: 'Remaining Budget', category: 'Budget', definition: 'Adopted budget minus what has been spent so far. It shows how much of the plan is left.' },
  { term: 'Appropriation', category: 'Budget', definition: 'The legal approval to spend money for a specific purpose. Think of it as a spending limit.' },
  { term: 'Fund', category: 'General', definition: 'A separate bucket of money used for a specific purpose—like a separate checking account.' },
  { term: 'Department', category: 'General', definition: 'A part of City government responsible for a service (Police, Streets, Parks, etc.).' },
  { term: 'Actuals', category: 'Accounting', definition: 'The real amounts that have been spent or received, compared to what was planned.' },
  { term: 'Revenue', category: 'Accounting', definition: 'Money coming into the City (taxes, fees, grants, etc.).' },
  { term: 'Expenditures', category: 'Accounting', definition: 'Money the City pays out for services, salaries, equipment, and projects.' },
  { term: 'Accounts Payable', category: 'Accounting', definition: 'Money the City owes to vendors for goods or services already received.' },
  { term: 'Accounts Receivable', category: 'Accounting', definition: 'Money owed to the City from others (fees, billing, reimbursements).' },
  { term: 'Capital Project', category: 'Capital', definition: 'A larger, one-time investment—such as roads, buildings, or major equipment.' },
  { term: 'DLGF', category: 'Oversight', definition: 'Indiana agency that reviews and approves local government budgets and tax rates.' },
  { term: 'SBOA', category: 'Oversight', definition: 'Indiana agency that audits local governments and reviews how public money is spent.' },
];
