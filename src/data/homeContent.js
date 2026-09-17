export const hero = {
  eyebrow: 'ENTERPRISE OPERATING SYSTEM',
  title: 'Run Your Entire Business On One Powerful Connected ERP',
  subhead: 'Eliminate Slack, Zoom, Google Drive, QuickBooks, and disjointed CRM tools. DERPS unifies your entire enterprise in one secure platform.',
  body: 'Modern growing companies routinely juggle a dozen disconnected SaaS subscriptions. DERPS brings finance, inventory, sales pipelines, merchant onboarding, QA project tracking, HR attendance, HD video meetings, and customer support into a single, cohesive operating system.',
  cta: 'Request a Demo',
}

export const industries = [
  'Retail & E-Commerce',
  'Merchant Services & ISO Payments',
  'Field Services & Logistics',
  'IT & Software Engineering',
  'Corporate & Multi-Entity Enterprises',
  'Wholesale & Distribution',
  'Hardware Staging & Manufacturing',
  'Consulting & Professional Services',
  'Healthcare & Medical Supplies',
  'Education & Training Academies',
]

export const modules = [
  { name: 'Operations & Logistics', path: '/operations', icon: 'Boxes', desc: 'Multi-location stock, SN lifecycle, FedEx shipping & payouts', image: '/DERPS Website images/Modules/operations.webp', banner: '/DERPS Website images/Modules/operation banner.webp' },
  { name: 'Sales Flow', path: '/sales', icon: 'ChartNoAxesCombined', desc: 'Dynamic stage forms, Opportunity Kanban & digital quotes', image: '/DERPS Website images/Modules/sales.webp', banner: '/DERPS Website images/Modules/Sales banner.webp' },
  { name: 'Accounting & Finance', path: '/accounting', icon: 'Calculator', desc: 'Chart of accounts, general ledger, multi-state tax & payroll', image: '/DERPS Website images/Modules/Accounts.webp', banner: '/DERPS Website images/Modules/accounts (2).webp' },
  { name: 'Merchant CRM', path: '/crm', icon: 'UsersRound', desc: '5-stage onboarding board, underwriting & technician dispatch', image: '/DERPS Website images/Modules/CRM.webp', banner: '/DERPS Website images/Modules/CRM banner.webp' },
  { name: 'Projects & QA Tasks', path: '/projects', icon: 'ClipboardCheck', desc: '6-stage QA verification lifecycle & performance velocity', image: '/DERPS Website images/Modules/projects.webp', banner: '/DERPS Website images/Modules/project banner.webp' },
  { name: 'HR & Staff Directory', path: '/hr', icon: 'UserRoundCog', desc: 'Granular RBAC permissions, attendance logs & training portal', image: '/DERPS Website images/Modules/HR.webp', banner: '/DERPS Website images/Modules/HR banner.webp' },
  { name: 'Unified Communication', path: '/communication', icon: 'MessagesSquare', desc: 'WebRTC video with guest links, chat, memos & cloud drive', image: '/DERPS Website images/Modules/communication.webp', banner: '/DERPS Website images/Modules/communication banner.webp' },
  { name: 'Helpdesk & Support', path: '/support', icon: 'LifeBuoy', desc: 'Service tickets, SLA tracking, diagnostics & hardware context', image: '/DERPS Website images/Modules/tickets.webp', banner: '/DERPS Website images/Modules/tickets banner.webp' },
]

export const whyChoose = {
  eyebrow: 'WHY CHOOSE DERPS',
  title: 'One Unified Platform Instead of Ten Separate Subscriptions',
  subtitle: 'Every department works from the same live source of truth',
  body: 'No complex third-party API connectors, brittle integrations, or sync errors. Every module in DERPS is architected to share live data seamlessly across operations, sales, finance, support, and leadership.',
  image: '/DERPS Website images/Homepage images/Why choose derps (3).png',
  bullets: [
    'Save thousands annually on standalone SaaS licensing fees',
    'Intuitive, role-tailored dashboards with customizable widget layouts and YoY analytics',
    'Real-time data flow from sales quotes directly to inventory dispatch and general ledgers',
    'Enterprise-grade security with granular Role-Based Access Control and multi-tenancy',
  ],
  cta: 'Schedule a Consultation',
}

export const features = [
  {
    name: 'Operations',
    title: 'Precision Inventory, SN Lifecycle, Carrier Shipping & Partner Payouts',
    image: '/DERPS Website images/Modules/operations.webp',
    body: 'Manage multi-warehouse stock levels, trace every serialized asset from vendor PO to customer installation, generate FedEx shipping labels with thermal printer support, manage RMA returns, and automate partner commission approvals.',
    capabilities: [
      'Multi-location inventory valuation, reorder levels & low-stock indicators',
      'End-to-end Serial Number (SN Report) timeline tracking & warranty audits',
      'Integrated carrier shipping (FedEx) with Brother b-PAC thermal label printing',
      'Automated sales agent commission calculation & multi-tier payout approvals',
    ],
  },
  {
    name: 'Sales Flow',
    title: 'Accelerate Deals with Dynamic Stage Forms & Digital Quotations',
    image: '/DERPS Website images/Modules/sales.webp',
    body: 'Empower sales teams with custom intake form builders, centralized lead qualification, visual Kanban opportunity stages with enforced milestone criteria, and interactive digital quotes with online customer approval links.',
    capabilities: [
      'Drag-and-drop Dynamic Sales Form Builder for tailored data intake',
      'Opportunity Kanban with dynamic stage-progression verification forms',
      'Digital quotation engine with public web review & one-click client approval',
      'Instant conversion of won opportunities into structured fulfillment sales orders',
    ],
  },
  {
    name: 'Accounting',
    title: 'Full Double-Entry Bookkeeping, Multi-State Tax & Financial Intelligence',
    image: '/DERPS Website images/Modules/Accounts.webp',
    body: 'Gain total financial control with a hierarchical Chart of Accounts, balanced general ledger journal entries, automated invoicing with partial payments, purchase orders, integrated payroll, and real-time Balance Sheets and multi-state tax reports.',
    capabilities: [
      'Comprehensive Chart of Accounts & drill-down ledger transaction audits',
      'Automated invoicing with partial payments (ACH, Card, Check, Wire) & aging',
      'City, County & State tax liability reports with merchant tax exemption flags',
      'Live Profit & Loss, Balance Sheet, Trial Balance & YoY financial trends',
    ],
  },
  {
    name: 'Merchant CRM',
    title: '5-Stage Underwriting Board, Terminal Staging & Field Technician Dispatch',
    image: '/DERPS Website images/Modules/CRM.webp',
    body: 'Guide merchants through multi-step digital applications, navigate underwriting on a visual 5-stage Support Board (New $\\to$ Maintenance $\\to$ Programming $\\to$ Deployment $\\to$ Follow-Up), manage field technician dispatch, and maintain 360-degree merchant histories.',
    capabilities: [
      'Multi-step digital merchant applications with secure document verification',
      'Visual 5-stage Underwriting & Support Kanban from intake to live processing',
      'Terminal programming & hardware serial number assignment from inventory',
      'Field technician installation scheduling, dispatch logs & completion sign-offs',
    ],
  },
  {
    name: 'Projects & QA',
    title: 'Structured Task Management with an Enforced 6-Stage QA Pipeline',
    image: '/DERPS Website images/Modules/projects.webp',
    body: 'Plan company initiatives with milestone tracking, assign tasks to team members, and enforce strict quality assurance protocols where tasks pass through QA verification before deployment.',
    capabilities: [
      'Enforced 6-stage QA subtask lifecycle (In Progress $\\to$ Ready for QA $\\to$ QA In Progress $\\to$ QA Passed/Failed $\\to$ Deployment)',
      'Personalized "My Task" queue with priority sorting & direct progress logging',
      'Automated individual & department velocity and QA pass ratio reports',
      'Cross-project bottleneck detection & comprehensive tracking reports',
    ],
  },
  {
    name: 'HR & Staff',
    title: 'Workforce Directory, Attendance Logging, Training & Role Security',
    image: '/DERPS Website images/Modules/HR.webp',
    body: 'Manage employee profiles, configure fine-grained Role-Based Access Control (RBAC) down to specific routes and feature codes, track daily clock-in/out timestamps, host internal multimedia training academies, and publish company policies.',
    capabilities: [
      'Fine-grained Role-Based Access Control (RBAC) security scoping by route code',
      'Real-time employee clock-in/out logs & monthly attendance reporting',
      'Centralized employee training portal with rich multimedia & SOP curriculum',
      'Digital company policy repository with mandatory login acknowledgement tracking',
    ],
  },
  {
    name: 'Communication',
    title: 'Direct/Group Chat, WebRTC Video Meetings & Mandatory Broadcast Memos',
    image: '/DERPS Website images/Modules/communication.webp',
    body: 'Collaborate in real time without leaving your business platform. Enjoy direct messaging, team channels, built-in WebRTC video meetings with shareable public guest links, mandatory broadcast memos with read confirmation, and secure cloud drive storage.',
    capabilities: [
      'Real-time direct & channel group messaging with file attachments & presence',
      'In-app WebRTC HD video calling with one-click public guest links (no login required)',
      'Mandatory company broadcast memos with unacknowledged login prompts',
      'Centralized team calendar & secure role-scoped Cloud Storage Bucket',
    ],
  },
  {
    name: 'Support',
    title: 'Helpdesk Ticketing, Custom SLA Categories & Linked Hardware Diagnostics',
    image: '/DERPS Website images/Modules/tickets.webp',
    body: 'Deliver prompt, structured customer care. Triage customer and internal tickets, configure custom service categories, monitor SLA resolution targets, and access customer terminal and billing history directly from the ticket view.',
    capabilities: [
      'Centralized ticket queue with status & priority triage (Urgent, High, Medium, Low)',
      'Custom ticket categories, types & resolution workflow templates',
      'Direct link to merchant hardware serial numbers, active agreements & invoice history',
      'Real-time ticket volume trends, SLA metrics & category breakdown donut charts',
    ],
  },
]

export const trustPillars = [
  {
    label: 'Enterprise Security & RBAC Scoping',
    body: 'Your operational and financial data is protected with granular Role-Based Access Control down to specific routes and buttons, encrypted cloud storage, and comprehensive transaction audit logs.',
  },
  {
    label: 'Multi-Tenant Architecture',
    body: 'Built for enterprise organizations, parent companies can manage isolated child tenant entities with custom branding, tenant logos, and configurable module provisioning.',
  },
  {
    label: 'Engineered for High Reliability & Speed',
    body: 'Built for high-volume transactions, DERPS delivers 99.9% uptime, real-time WebSocket syncing for chat/notifications, and low-latency performance across all departments.',
  },
  {
    label: 'White-Glove Implementation & Support',
    body: 'Our deployment experts guide your organization through setup, historical data migration, custom workflow configuration, and staff training so your team hits the ground running.',
  },
]

export const impact = {
  title: 'Stop Juggling Disconnected Apps. Unify Your Workflow.',
  body: 'When your sales pipeline, warehouse stock, customer applications, accounting ledgers, and team communications live in separate silos, your business loses time, money, and momentum. DERPS eliminates the friction of context switching by keeping every department in sync on one unified platform.',
  bullets: [
    'One live source of truth across sales, operations, finance, and support',
    'Zero manual data re-entry between quotes, orders, inventory, and invoices',
    'Massive cost savings by replacing 8+ standalone software subscriptions',
  ],
}

export const moving = {
  title: 'Seamless Migration & Guided Onboarding',
  body: "Switching your core business systems does not have to be painful. Our solutions team provides structured data migration, role setup, and comprehensive team training tailored to your exact business model.",
  cta: 'Request a Consultation',
}

export const closing = {
  title: 'Ready to Transform How Your Business Operates?',
  body: 'Discover how DERPS can streamline your workflows, eliminate redundant software costs, and give leadership total visibility across every department.',
  cta: 'Book a Live Demo',
}

export const faqs = [
  {
    question: 'How do I know if my business is ready for DERPS?',
    answer: 'If your organization uses multiple disconnected tools (such as separate apps for CRM, invoicing, project tracking, team chat, inventory spreadsheets, and helpdesk ticketing), you are experiencing data silos, manual errors, and high software costs. DERPS unifies all these functions into a single system, significantly increasing operational speed while lowering overhead.',
  },
  {
    question: 'Can DERPS replace our existing standalone business applications?',
    answer: 'Yes. DERPS is purpose-built to replace standalone tools including QuickBooks (Accounting), Salesforce/HubSpot (CRM & Sales), Slack (Team Chat), Zoom (Video Meetings), Jira/Asana (Project Tracking), Zendesk (Helpdesk), and Google Drive (Cloud Storage) with a tightly integrated ERP architecture.',
  },
  {
    question: 'How does DERPS handle carrier shipping and label printing?',
    answer: 'DERPS features integrated carrier shipping (including FedEx API integration) and direct thermal printer support via Brother b-PAC SDK. You can generate certified shipping labels, print them directly to label printers with custom templates, and automatically attach live tracking numbers to customer orders.',
  },
  {
    question: 'How do digital quotations and online approvals work?',
    answer: 'When a quotation is created in the Sales Flow module, DERPS generates a secure digital web review link (/crmQuotation/view). Clients can review line items, pricing, and terms directly in their browser and accept with one click—instantly advancing the Opportunity to Closed Won and generating a Sales Order.',
  },
  {
    question: 'Can we migrate our existing customer, accounting, and inventory data?',
    answer: 'Yes. Our technical onboarding team will help you export, map, and securely import your historical records (customers, vendor lists, items/services catalog, open invoices, and historical data) into DERPS with minimal disruption to your daily operations.',
  },
  {
    question: 'How long does implementation and team onboarding take?',
    answer: 'Implementation timelines vary depending on company size and data volume. Typical deployments range from a few days for core modules to a few weeks for full enterprise-wide rollout, supported by comprehensive training sessions.',
  },
  {
    question: 'Can we start with specific modules and expand over time?',
    answer: 'Yes. DERPS is modular by design. You can deploy the specific modules your business needs immediately (such as Merchant CRM, Operations, or Accounting) and activate additional capabilities as your operations scale.',
  },
  {
    question: 'How does DERPS ensure data security and role permissions?',
    answer: 'DERPS features granular Role-Based Access Control (RBAC). Administrators can define precise permissions per user role down to specific routes and feature codes, ensuring employees only access the specific modules, screens, and features required for their job responsibilities.',
  },
  {
    question: 'Does DERPS support multi-tenant or multi-entity businesses?',
    answer: 'Yes. DERPS supports multi-tenant organization management, multi-warehouse inventory, multi-department task routing, and comprehensive reporting across diverse operational units from a single administrative master dashboard.',
  },
]
