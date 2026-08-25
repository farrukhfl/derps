export const supportContent = {
  name: 'Support',
  eyebrow: 'HELPDESK & SERVICE TICKETING',
  title: 'Deliver World-Class Customer Care, SLAs & Technical Diagnostics',
  subhead: 'Manage internal and merchant support tickets, configure custom ticket categories and types, monitor resolution SLAs, archive inactive tickets, and deliver consistent, high-quality customer service.',
  secondaryCta: 'Explore Helpdesk',
  trustBullets: ['Custom ticket types & categories', 'SLA monitoring & priority routing', 'Real-time ticket category charts & hardware context'],
  stripTitle: 'Turn merchant technical challenges into rapid, structured resolutions',
  areas: [
    { label: 'Ticket Inbox', description: 'Centralized ticket queue & priority triage', icon: 'LifeBuoy' },
    { label: 'Custom Categories', description: 'Departmental routing & classification', icon: 'Tags' },
    { label: 'Ticket Types', description: 'Tailored resolution templates & workflows', icon: 'SlidersHorizontal' },
    { label: 'SLA & Priorities', description: 'Urgency tags & response targets', icon: 'Clock' },
    { label: 'Service Analytics', description: 'Live category donut charts & volume trends', icon: 'ChartPie' },
    { label: 'Merchant Context', description: 'Direct links to merchant & hardware data', icon: 'ContactRound' },
  ],
  features: [
    {
      title: 'Unified support ticket inbox with priority triage and routing',
      description: 'Never let a customer inquiry fall through the cracks. Aggregate support requests, assign tickets to the right service agents, set priority levels (Urgent, High, Medium, Low), and track resolution progress in real time.',
      bullets: [
        'Centralized queue managing Pending, In Progress, Completed, and Inactive/Archived tickets',
        'Automated ticket assignment based on category, urgency, or specialized agent skillset',
        'Full communication thread capturing customer emails, agent replies, internal notes, and attachments',
      ],
      icon: 'LifeBuoy',
    },
    {
      title: 'Configurable ticket types and multi-level categorization',
      description: 'Structure your service operations to match your business model. Define custom ticket categories (Terminal Hardware, Billing Discrepancy, Gateway Setup, Software Issue) and specific sub-types for precise reporting.',
      bullets: [
        'Unlimited custom ticket categories tailored to your merchant services and operational workflows',
        'Configurable ticket types with custom resolution templates and required diagnostic fields',
        'Automatic routing ensuring technical tickets reach engineers and billing inquiries reach finance',
      ],
      icon: 'SlidersHorizontal',
    },
    {
      title: 'Full client context: Hardware serial numbers and billing history',
      description: 'Empower support agents with immediate answers. When opening a ticket, agents can view the customer profile, active software versions, deployed terminal serial numbers, and past invoice statuses.',
      bullets: [
        'Instant access to customer 360 profile directly from the ticket interface without switching tabs',
        'Linked serial number records for rapid hardware diagnostic, replacement dispatch, and warranty lookup',
        'Historical ticket archive showing past resolutions and recurring issues for that account',
      ],
      icon: 'ContactRound',
    },
    {
      title: 'Real-time ticket dashboards, volume trends, and category charts',
      description: 'Make informed staffing and operational decisions. DERPS visualizes ticket volumes, category distributions, average resolution times, and agent throughput with interactive charts.',
      bullets: [
        'Interactive donut charts and category breakdown graphs showing top customer pain points',
        'Live status counters highlighting pending, active, completed, and inactive ticket counts',
        'Historical resolution velocity metrics to ensure SLA targets are consistently met',
      ],
      icon: 'ChartPie',
    },
    {
      title: 'Internal service desk for cross-team collaboration',
      description: 'Support is not just for external customers. Use the ticketing system internally for IT support requests, facilities maintenance, underwriting escalations, or inter-departmental task handoffs.',
      bullets: [
        'Private internal ticketing queue for employee IT, access requests, and operational support',
        'Confidential agent-only notes, attachments, and escalation workflows',
        'Complete separation between customer-facing tickets and internal maintenance requests',
      ],
      icon: 'Headset',
    },
    {
      title: 'Proactive maintenance tickets and technical follow-ups',
      description: 'Stay ahead of merchant churn. Schedule proactive maintenance tickets, post-installation follow-ups, and hardware health checkups to deliver proactive, delight-driven customer care.',
      bullets: [
        'Scheduled maintenance tickets linked to hardware warranties and terminal lease agreements',
        'Post-installation follow-up triggers ensuring merchants are successfully processing transactions',
        'Detailed resolution logs recording exact root causes and preventative steps taken',
      ],
      icon: 'CheckCircle2',
    },
  ],
  benefitsTitle: 'The business impact of DERPS Helpdesk',
  benefits: [
    'Faster first-response and resolution times across all customer channels',
    'Elimination of lost support emails and unassigned customer inquiries',
    'Actionable product insights by tracking recurring ticket categories and root causes',
    'Empowered support agents with immediate access to merchant hardware serials and billing data',
    'High customer retention through proactive maintenance and follow-up care',
    'Replaces expensive standalone helpdesk tools like Zendesk and Freshdesk',
  ],
  faqs: [
    {
      question: 'How do support tickets connect with merchant profiles and hardware?',
      answer: 'Every ticket is linked to the client profile in the CRM. Support agents can view which terminals and serial numbers the client is using, check their active agreement, review previous service tickets, and even initiate a replacement shipment directly from the ticket.',
    },
    {
      question: 'Can we create custom ticket categories and types?',
      answer: 'Yes. Administrators can configure custom Ticket Categories (e.g., Billing, Terminal Maintenance, Software Support, Gateway Setup) and Ticket Types to standardize data collection and route requests to specialized teams.',
    },
    {
      question: 'Can DERPS be used for internal IT and employee support?',
      answer: 'Yes. The system supports internal ticketing where staff can submit requests for IT hardware, system permissions, or administrative help, keeping internal operations as streamlined as customer support.',
    },
    {
      question: 'What analytics and reports are available for support teams?',
      answer: 'DERPS provides a dedicated Ticket Dashboard featuring category breakdown charts, volume trends, pending vs. completed ratios, and agent resolution throughput metrics to help managers monitor SLA compliance and team efficiency.',
    },
    {
      question: 'Can files, error screenshots, and diagnostic logs be attached to tickets?',
      answer: 'Yes. Agents and users can upload photos, diagnostic logs, screenshots, and receipts directly to the ticket thread, where they are securely stored in the Cloud Storage Bucket.',
    },
  ],
}
