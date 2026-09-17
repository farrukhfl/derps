export const accountingContent = {
  name: 'Accounting',
  eyebrow: 'ACCOUNTING & FINANCIAL INTELLIGENCE',
  title: 'Full Double-Entry Bookkeeping, Multi-State Tax & Financial Ledgers',
  subhead: 'Manage your Chart of Accounts, journal entries, customer invoices, partial payments, vendor purchase orders, multi-state tax liabilities, payroll, and real-time financial statements—seamlessly connected to your daily operations.',
  secondaryCta: 'Explore Accounting',
  image: '/DERPS Website images/Modules/Accounts.webp',
  bannerImage: '/DERPS Website images/Modules/accounts (2).webp',
  trustBullets: ['Full double-entry general ledger', 'Multi-state sales tax reporting', 'Automated invoicing & partial payments'],
  stripTitle: 'Complete financial clarity from every transaction to the balance sheet',
  areas: [
    { label: 'Chart of Accounts', description: 'Hierarchical asset, liability & equity accounts', icon: 'Landmark' },
    { label: 'Journal Entries', description: 'Double-entry debits & credits with audit logs', icon: 'BookOpenCheck' },
    { label: 'Invoices & Receivables', description: 'Billing, partial payments (ACH/Card/Wire)', icon: 'Receipt' },
    { label: 'Multi-State Tax Reports', description: 'City, County & State tax liabilities', icon: 'ChartColumnBig' },
    { label: 'Purchasing & Payables', description: 'Purchase orders, supplier bills & terms', icon: 'WalletCards' },
    { label: 'Payroll & Statements', description: 'Payroll taxes, P&L, Balance Sheet & Trial Balance', icon: 'BadgeDollarSign' },
  ],
  features: [
    {
      title: 'Hierarchical Chart of Accounts with real-time ledger drill-downs',
      description: 'Organize your company financials with an intuitive, multi-level Chart of Accounts. Track live balances across Assets, Liabilities, Equity, Revenue, and Expenses with drill-down ledger access for every individual account.',
      bullets: [
        'Standardized account categories with support for custom sub-accounts and cost centers',
        'Live account balances updated instantaneously with every sales order, purchase, and payment',
        'Account Ledger modal providing complete historical transaction audit trails and debit/credit journals',
      ],
      icon: 'Landmark',
    },
    {
      title: 'Automated Invoicing, Accounts Receivable & flexible partial payments',
      description: 'Generate itemized invoices directly from fulfilled sales orders or create custom invoices in seconds. Record partial payments across multiple channels, track aging receivables, apply tax exemptions, and minimize overdue balances.',
      bullets: [
        'One-click invoice creation linked directly to fulfilled sales orders and delivered items',
        'Support for partial payments across ACH, Credit Card, Check, and Wire with auto-calculated balances',
        'Built-in merchant tax-exempt compliance flags and automated invoice status updates (Paid, Partial, Unpaid)',
      ],
      icon: 'FileCheck2',
    },
    {
      title: 'Multi-state sales tax reporting & tax-exempt compliance tracking',
      description: 'Simplify complex sales tax filing and audits. DERPS automatically categorizes tax liabilities into dynamic summary boxes by City, County, State, and Federal levels, with instant drill-downs to state-by-state transaction ledgers.',
      bullets: [
        'Automated multi-jurisdiction tax calculations categorized by City, County, and State tax rates',
        'Interactive Tax Reports dashboard with date filtering and drill-down State Tax detail ledgers',
        'Merchant tax-exempt certificate tracking ensuring compliant, audit-ready billing',
      ],
      icon: 'ChartColumnBig',
    },
    {
      title: 'Precision journal entries with balanced double-entry validation',
      description: 'Maintain strict financial integrity with full double-entry bookkeeping. Record manual adjustments, accruals, depreciation, and transfers with real-time debit and credit balance verification.',
      bullets: [
        'Balanced double-entry input validation preventing unbalanced ledger postings',
        'Detailed line descriptions, account codes, reference tags, and supporting document attachments',
        'Complete chronological audit log of all financial modifications and adjusting entries',
      ],
      icon: 'NotebookTabs',
    },
    {
      title: 'Streamlined Purchasing and Accounts Payable workflow',
      description: 'Gain total visibility into cash outflows. Create supplier purchase orders, track received goods against vendor bills, manage payment terms, and prevent duplicate or unauthorized payments.',
      bullets: [
        'Purchase order creation with vendor catalogs, negotiated unit costs, and inventory replenishment',
        'Track order statuses in real time: Received, Not Received, and Partial Paid',
        'Centralized vendor profiles with historical payment records and outstanding transaction logs',
      ],
      icon: 'CircleDollarSign',
    },
    {
      title: 'Executive financial reporting: P&L, Balance Sheet, Trial Balance & YoY Trends',
      description: 'Generate accurate financial statements in real time. Eliminate end-of-month reporting bottlenecks with instant access to Profit & Loss statements, Balance Sheets, Trial Balances, Expense Reports, and Year-over-Year (YoY) revenue analytics.',
      bullets: [
        'Real-time Profit & Loss statement reflecting live revenues, cost of goods sold (COGS), and operational expenses',
        'Dynamic Balance Sheet and Trial Balance reports ready for CPA review and tax filing',
        'Exportable financial statements, Expense Reports, and Agent Payout summaries in Excel and PDF',
      ],
      icon: 'ChartSpline',
    },
  ],
  benefitsTitle: 'How DERPS Accounting transforms financial operations',
  benefits: [
    'Zero lag between sales fulfillment, warehouse inventory receipts, and general ledger entries',
    'Elimination of tedious manual data re-entry and reconciliation errors between CRM and accounting',
    'Faster month-end financial close with automated transaction flows and audit trails',
    'Clear cash flow visibility with live accounts receivable and accounts payable tracking',
    'Effortless multi-state sales tax filing with dynamic City, County, and State tax summaries',
    'Replaces expensive, disconnected accounting subscriptions with one unified ERP platform',
  ],
  faqs: [
    {
      question: 'Is DERPS Accounting a true double-entry system?',
      answer: 'Yes. DERPS enforces strict double-entry accounting principles across all transactions. Every journal entry, invoice payment, purchase order, and expense requires balancing debits and credits, ensuring compliance and accurate trial balances.',
    },
    {
      question: 'How does DERPS handle multi-state and local sales taxes?',
      answer: 'DERPS features a dedicated Tax Reports module that automatically aggregates collected taxes into City, County, and State categories. You can filter by date range, view total tax liability, drill down into specific state tax ledgers, and manage merchant tax-exempt certificates.',
    },
    {
      question: 'Can DERPS handle partial payments on customer invoices?',
      answer: 'Yes. When recording payments, you can log full or partial payments across various payment methods (ACH, Credit Card, Check, Wire). The system automatically tracks outstanding balances and updates invoice status (Paid, Partial Paid, Unpaid).',
    },
    {
      question: 'How does the Accounting module integrate with Sales and Operations?',
      answer: 'Integration is completely automatic. When a Sales Order is confirmed or shipped, an invoice can be generated with identical line items and pricing. When a Purchase Order is received, inventory quantities increase and accounts payable entries are created automatically.',
    },
    {
      question: 'What financial reports can be generated and exported in DERPS?',
      answer: 'DERPS provides real-time Profit and Loss (Income Statement), Balance Sheet, Trial Balance, Accounts Reports, Expense Reports, Multi-State Tax Reports, and Agent Payout Reports. All reports can be filtered by date range and exported to Excel or PDF.',
    },
  ],
}
