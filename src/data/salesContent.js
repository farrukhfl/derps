export const salesContent = {
  name: 'Sales',
  eyebrow: 'SALES FLOW & REVENUE PIPELINE',
  title: 'Accelerate Every Deal From Intake to Signed Digital Order',
  subhead: 'Build dynamic intake forms, qualify leads, navigate visual opportunity pipelines with stage progression forms, issue digital quotations with online client approval, and convert wins into structured sales orders.',
  secondaryCta: 'Explore Sales Flow',
  image: '/DERPS Website images/Modules/sales.webp',
  bannerImage: '/DERPS Website images/Modules/Sales banner.webp',
  trustBullets: ['Dynamic Stage-Progression Forms', 'Visual Opportunity Kanban', 'Digital quote acceptance links & audit logs'],
  stripTitle: 'A structured revenue engine connecting prospects directly to operations',
  areas: [
    { label: 'Form Builder', description: 'Dynamic intake & qualification forms', icon: 'PanelsTopLeft' },
    { label: 'Lead Capture', description: 'Centralized lead repository & routing', icon: 'Inbox' },
    { label: 'Opportunities', description: 'Kanban board & dynamic stage gates', icon: 'Goal' },
    { label: 'Quotations', description: 'Digital quotes with web client approval', icon: 'FileText' },
    { label: 'Sales Orders', description: 'Structured orders linked to fulfillment', icon: 'Handshake' },
    { label: 'Revenue Analytics', description: 'Quoted values, pipeline & conversion rates', icon: 'ChartNoAxesCombined' },
  ],
  features: [
    {
      title: 'Design custom sales intake forms without writing code',
      description: 'Capture the exact information your team needs. With the Dynamic Sales Form Builder, you can configure custom fields, required inputs, terminal preferences, and qualification criteria tailored to each product or market segment.',
      bullets: [
        'Drag-and-drop form builder for lead intake, deal qualification, and terminal hardware setups',
        'Custom field types supporting text, dropdowns, numerical inputs, file uploads, and conditional logic',
        'Standardize data collection across internal sales reps, external referral agents, and partner ISOs',
      ],
      icon: 'ListPlus',
    },
    {
      title: 'Capture, organize, and qualify leads with automated assignment',
      description: 'Prevent valuable inquiries from slipping through the cracks. Aggregate incoming leads from marketing forms, referral agents, and inbound calls with complete contact context, communication histories, and status flags.',
      bullets: [
        'Unified lead dashboard tracking statuses: Open, Working, Not Contacted, and Converted',
        'Clear ownership assignment and chronological activity timeline for every prospective account',
        'One-click conversion of qualified leads directly into active deal opportunities with prefilled details',
      ],
      icon: 'ContactRound',
    },
    {
      title: 'Visual Opportunity Kanban with enforced dynamic stage-gate forms',
      description: 'Gain full visibility over your revenue pipeline. Move deals smoothly across structured stages (Qualification, Proposal, Quotation, Negotiation, Closed Won, Closed Lost) with dynamic validation forms required at each milestone.',
      bullets: [
        'Interactive drag-and-drop Kanban board grouped by stage, potential revenue, and closing probability',
        'Opportunity Stage Forms ensuring critical terminal options, pricing plans, and terms are completed before progression',
        'Comprehensive Opportunity Audit Logs recording every stage transition, field edit, and stakeholder note',
      ],
      icon: 'Goal',
    },
    {
      title: 'Professional digital quotations with online client review & acceptance',
      description: 'Generate accurate, beautifully branded quotations directly from your catalog. Share secure digital review links (/crmQuotation/view) with customers, allowing them to review line items, tax calculations, and accept online.',
      bullets: [
        'Line-item quoting directly connected to the central Items & Services inventory catalog',
        'Secure public quotation web review links enabling clients to review terms and accept with one click',
        'Live tracking of quote statuses (Draft, Sent, Accepted, Rejected, Expired, Cancelled) and audit timestamps',
      ],
      icon: 'ReceiptText',
    },
    {
      title: 'Convert accepted quotes into actionable sales orders instantly',
      description: 'Closing the deal automatically triggers the execution phase. Turn accepted quotations into structured sales orders that immediately alert operations, reserve warehouse stock, and notify accounting for billing.',
      bullets: [
        'Automated sales order generation with exact line items, pricing tiers, hardware models, and customer data',
        'Real-time order fulfillment status tracking (Processing, Confirmed, Shipped, Delivered, Cancelled)',
        'Seamless connection to FedEx shipping label generation and automatic accounting invoice creation',
      ],
      icon: 'CircleCheckBig',
    },
    {
      title: 'Real-time sales velocity and revenue pipeline analytics',
      description: 'Stay ahead of your revenue targets with live sales metrics. Monitor total quoted pipeline value, confirmed order totals, average deal cycle times, and conversion rates across sales reps and referral partners.',
      bullets: [
        'Live dashboard metrics showing total active pipeline volume and confirmed closed revenue values',
        'Conversion analytics segmented by lead source, sales executive, referral agent, and product category',
        'Automated alerts when quotes are opened, accepted, or approaching expiration dates',
      ],
      icon: 'ChartSpline',
    },
  ],
  benefitsTitle: 'The business impact of DERPS Sales Flow',
  benefits: [
    'A repeatable, structured sales process with stage-gate validation that prevents deal slippage',
    'Faster response and closing turnaround times with instant digital quote acceptance links',
    'Instant alignment between sales reps, warehouse fulfillment, and accounting ledgers',
    'Full transparency over pipeline health, total quoted value, and rep conversion rates',
    'Elimination of duplicate data entry between CRM records, quotations, and ERP sales orders',
    'Complete chronological audit history for every price quotation and customer commitment',
  ],
  faqs: [
    {
      question: 'How do customers review and accept quotations in DERPS?',
      answer: 'When a quotation is created, DERPS generates a secure, web-based review link (/crmQuotation/view). Customers can view the complete line-item breakdown, terms, equipment selections, and pricing directly in their browser on desktop or mobile and accept online without needing to print, sign, or scan paper documents.',
    },
    {
      question: 'What happens when a quotation is marked as Accepted?',
      answer: 'Upon acceptance, DERPS automatically updates the Opportunity stage to Closed Won and can instantly generate a structured Sales Order. This alerts operations to prepare fulfillment and accounting to schedule billing, eliminating manual handoffs.',
    },
    {
      question: 'What are Opportunity Stage Forms and why are they important?',
      answer: 'Opportunity Stage Forms are dynamic milestone questionnaires configured for each pipeline stage. They ensure that sales representatives gather critical operational details (such as terminal model, communication preferences, processing plan tier, and pricing schedules) before advancing a deal to the next stage.',
    },
    {
      question: 'How does DERPS handle lead assignment and agent tracking?',
      answer: 'Leads can be assigned to internal sales executives or external referral agents. Full activity logs and permission controls ensure reps only see their assigned leads while management retains bird-eye visibility over the complete pipeline.',
    },
    {
      question: 'Does the Sales module connect with Inventory and Invoicing?',
      answer: 'Yes. All line items in quotations and sales orders pull directly from your central Items and Services catalog. Once an order is delivered, it can generate an invoice in the Accounting module with a single click.',
    },
  ],
}
