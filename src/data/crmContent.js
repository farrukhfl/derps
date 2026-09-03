export const crmContent = {
  name: 'CRM',
  eyebrow: 'MERCHANT CRM & UNDERWRITING',
  title: 'End-to-End Merchant Onboarding, Underwriting & Account Lifecycle',
  subhead: 'From multi-step digital applications and 5-stage underwriting boards to terminal programming, hardware deployment, field technician dispatch, and ongoing support—manage your entire client lifecycle in one place.',
  secondaryCta: 'Explore Merchant CRM',
  image: '/DERPS Website images/Modules/CRM.png',
  bannerImage: '/DERPS Website images/Modules/CRM banner.png',
  trustBullets: ['Multi-step digital onboarding', '5-stage Underwriting & Support Board', 'Field technician dispatch & terminal staging'],
  stripTitle: 'A complete operating system for merchant services, ISOs & client operations',
  areas: [
    { label: 'Digital Applications', description: 'Multi-step onboarding & document verification', icon: 'ClipboardPenLine' },
    { label: '5-Stage Support Board', description: 'Visual pipeline from review to completion', icon: 'Columns3' },
    { label: 'Tech Installation', description: 'Hardware setup, technician dispatch & staging', icon: 'Wrench' },
    { label: 'Merchant 360 Profiles', description: 'Centralized client data, hardware & tickets', icon: 'ContactRound' },
    { label: 'Agreement Setup', description: 'Custom pricing plans & processing terms', icon: 'Settings2' },
    { label: 'Agent Submissions', description: 'Partner requests, approvals & activations', icon: 'FileInput' },
  ],
  features: [
    {
      title: 'Frictionless multi-step digital onboarding for new merchants',
      description: 'Accelerate client sign-ups with structured digital applications. Capture business details, beneficial ownership, banking credentials, hardware preferences, and pricing plan selections in a compliant, user-friendly flow.',
      bullets: [
        'Structured multi-step intake covering business information, beneficial ownership, and financial credentials',
        'Built-in terminal and hardware selection with custom peripheral preferences (printers, pin pads, scanners)',
        'Automated document verification and live status tracking (Draft, Pending, Under Review, Approved, Declined)',
      ],
      icon: 'ClipboardPenLine',
    },
    {
      title: 'Visual 5-Stage Merchant Support Board: From Underwriting to Live Processing',
      description: 'Eliminate onboarding bottlenecks. Track every application through dedicated operational stages: New Application $\\to$ Maintenance Review $\\to$ Terminal Programming $\\to$ Deployment $\\to$ Follow-Up $\\to$ Completed.',
      bullets: [
        'Interactive board view organizing client requests by underwriting, staging, and deployment phase',
        'Immediate assignment of technical tasks to underwriting analysts and staging technicians',
        'Real-time status indicators highlighting urgent requests, revisions, verification holds, or approvals',
      ],
      icon: 'KanbanSquare',
    },
    {
      title: 'Coordinate field technical installations, staging & terminal programming',
      description: 'Ensure hardware is configured and installed flawlessly. Track terminal serial numbers, payment gateway parameters, staging profiles, communication parameters, and on-site technician dispatch in real time.',
      bullets: [
        'Dedicated Technical Installation tracking with technician assignment and scheduling',
        'Terminal programming records linking hardware serial numbers directly to merchant IDs from inventory',
        'On-site deployment verification, post-installation sign-offs, and automated follow-up triggers',
      ],
      icon: 'Wrench',
    },
    {
      title: 'Merchant 360: Complete account history in a single view',
      description: 'Empower your support and relationship teams with instant context. Access merchant business details, contact persons, active services, deployed hardware serial numbers, billing history, and support tickets in one unified record.',
      bullets: [
        'Comprehensive client profile showing active services, processing plans, terminal models, and contracts',
        'Direct link to all open and historical support tickets, maintenance logs, and RMA returns',
        'Audit trail of account modifications, ownership updates, and pricing preference changes',
      ],
      icon: 'ContactRound',
    },
    {
      title: 'Custom agreement configurations and support workflow setup',
      description: 'Adapt the CRM to match your unique service agreements and operating procedures. Configure standard pricing tiers, interchange-plus terms, equipment lease packages, and default service SLAs.',
      bullets: [
        'Configurable service agreement templates and pricing schedule options per merchant category',
        'Customizable support stages and automated routing rules per client tier',
        'Automated notifications to merchants and agents when account status updates occur',
      ],
      icon: 'Route',
    },
    {
      title: 'Partner and agent management with activation commission tracking',
      description: 'Give external sales agents and ISO partners a dedicated interface to submit new merchant applications. Monitor incoming agent requests, track approval rates, and connect activations to automated commissions.',
      bullets: [
        'Agent portal for rapid merchant application entry, document upload, and status tracking',
        'Real-time application status visibility for submitting agents with approval/rejection feedback',
        'Direct integration with the Operations module for automated commission payouts upon live activation',
      ],
      icon: 'FileInput',
    },
  ],
  benefitsTitle: 'What DERPS Merchant CRM delivers for your team',
  benefits: [
    'Significantly faster merchant onboarding times from days to hours',
    'Zero miscommunication between sales agents, underwriting, and field tech teams',
    'Full transparency over terminal programming, serial number assignment, and hardware dispatch',
    'Superior customer support with instant access to complete merchant 360 history',
    'Automated handoff from application approval to active billing, inventory staging, and payouts',
    'Scalable architecture capable of supporting thousands of active merchant accounts',
  ],
  faqs: [
    {
      question: 'How does DERPS manage the merchant onboarding process?',
      answer: 'DERPS breaks onboarding into an organized digital application capturing business info, ownership, banking, equipment selection, and pricing plans. Once submitted, the application flows through a visual 5-Stage Underwriting & Support Board (New → Maintenance → Programming → Deployment → Follow-Up) where teams review documentation, program terminals, dispatch hardware, and finalize activation.',
    },
    {
      question: 'Can field technicians and staging teams track terminal programming?',
      answer: 'Yes. The Tech Installation and Terminal Programming modules allow technical staff to log hardware configurations, assign specific serial numbers from inventory, record firmware/application versions, and verify successful on-site deployment.',
    },
    {
      question: 'How does the CRM connect with support tickets and customer service?',
      answer: 'Every merchant profile maintains a live tab of all maintenance requests, support tickets, and installation logs. When a client contacts your support team, the agent can instantly view equipment serial numbers, past ticket resolutions, and active service plans.',
    },
    {
      question: 'Can sales partners and ISO agents submit applications directly?',
      answer: 'Yes. DERPS includes dedicated Agent Management and application submission portals where external agents can enter lead information, upload merchant documents, and monitor approval milestones in real time.',
    },
    {
      question: 'Is client banking and ownership information securely protected?',
      answer: 'Yes. DERPS utilizes strict Role-Based Access Control (RBAC) and data encryption. Sensitive financial and ownership credentials are only accessible to authorized underwriting personnel.',
    },
  ],
}
