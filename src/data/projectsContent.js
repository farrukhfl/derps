export const projectsContent = {
  name: 'Projects',
  eyebrow: 'PROJECT TRACKING & QA PIPELINE',
  title: 'Execute Projects with an Enforced QA & Deployment Lifecycle',
  subhead: 'Plan company initiatives, assign tasks, track subtasks through a rigorous multi-stage QA and release pipeline, and monitor individual and team productivity with automated performance reports.',
  secondaryCta: 'Explore Projects',
  image: '/DERPS Website images/Modules/projects.webp',
  bannerImage: '/DERPS Website images/Modules/project banner.webp',
  trustBullets: ['Enforced 6-stage QA verification lifecycle', 'Milestone & velocity tracking', 'Automated performance & bottleneck reports'],
  stripTitle: 'Keep complex technical and operational initiatives on time, on budget, and bug-free',
  areas: [
    { label: 'Project Portfolio', description: 'Centralized project roadmap & milestones', icon: 'FolderGit2' },
    { label: 'My Task Queue', description: 'Personalized task queue & priority sorting', icon: 'ClipboardCheck' },
    { label: 'QA Lifecycle Pipeline', description: 'Testing, verification & bug remediation', icon: 'CheckCircle2' },
    { label: 'Deployment Sign-Off', description: 'Release readiness & deployment confirmation', icon: 'Rocket' },
    { label: 'Performance Velocity', description: 'Individual & team QA pass ratios', icon: 'Gauge' },
    { label: 'Tracker Setup', description: 'Custom task stages, audit history & templates', icon: 'Settings2' },
  ],
  features: [
    {
      title: 'Centralized project management with timeline and milestone tracking',
      description: 'Oversee every company initiative from inception to delivery. Group work into structured projects, set milestones, track estimated versus actual completion dates, and keep engineering, product, and operational stakeholders aligned.',
      bullets: [
        'Organize tasks by client account, internal software release, merchant rollout, or operational goal',
        'Visual milestone tracking with completion percentages, active blockers, and deadline monitoring',
        'Role-scoped project assignment ensuring clear accountability across departments',
      ],
      icon: 'FolderGit2',
    },
    {
      title: 'Enterprise QA & Subtask pipeline with built-in quality controls',
      description: 'Move beyond simplistic to-do lists. DERPS enforces a rigorous quality assurance lifecycle for every subtask: In Progress $\\to$ Ready for QA $\\to$ QA In Progress $\\to$ QA Passed / Failed QA $\\to$ Ready for Deployment $\\to$ Deployment Completed.',
      bullets: [
        'Dedicated QA gating stages preventing unverified code or procedures from reaching production deployment',
        'Immediate notification and task return with reviewer feedback if a subtask fails quality assurance',
        'Granular tracking of UI completion, API verification, regression testing, and deployment confirmations',
      ],
      icon: 'CheckCircle2',
    },
    {
      title: 'Personalized "My Task" dashboard for every team member',
      description: 'Empower individual contributors with a focused workspace. Team members can view assigned tasks, update work statuses, log notes, attach deliverables, and submit items for review with zero distractions.',
      bullets: [
        'Individual task queue prioritizing urgent deadlines, active subtasks, and assigned review items',
        'Rich task descriptions supporting rich text, attachments, and direct comments',
        'One-click status transitions keeping managers and teammates updated in real time',
      ],
      icon: 'ClipboardCheck',
    },
    {
      title: 'Automated performance velocity and QA pass ratio reports',
      description: 'Understand how your teams work without micromanagement. DERPS automatically generates individual and department performance reports, tracking velocity, completion rates, QA pass ratios, and turnaround times.',
      bullets: [
        'Team productivity metrics: Total completed tasks, on-time delivery rate, and first-time QA pass ratios',
        'Individual contributor work logs, task throughput history, and deployment contributions',
        'Actionable data for performance reviews, sprint planning, and accurate project estimations',
      ],
      icon: 'Gauge',
    },
    {
      title: 'Cross-project tracking reports and proactive bottleneck detection',
      description: 'Spot roadblocks before they derail your timeline. Tracking reports provide bird-eye visibility across all open tasks, identifying tasks on hold, overdue deliverables, and QA bottlenecks.',
      bullets: [
        'Real-time aggregation of active, pending, QA in-progress, on-hold, and cancelled tasks across all projects',
        'Filterable by project, assignee, department, priority level, and date range',
        'Exportable project status summaries for leadership briefings and client progress presentations',
      ],
      icon: 'ChartSpline',
    },
    {
      title: 'Customizable tracker workflows, templates & setup history',
      description: 'Configure the project environment to fit your company methodology. Set custom task categories, default milestone structures, and approval hierarchies that fit your team perfectly.',
      bullets: [
        'Tailor task statuses and verification requirements for technical engineering or operational workflows',
        'Reusable project templates for recurring merchant implementations or scheduled product releases',
        'Tracker Setup history ensuring full configuration auditability and change governance',
      ],
      icon: 'Settings2',
    },
  ],
  benefitsTitle: 'Why teams deliver faster and better with DERPS Projects',
  benefits: [
    'Higher quality output backed by an enforced QA and deployment release lifecycle',
    'Clear accountability with explicit subtask ownership, reviewer logs, and status histories',
    'Elimination of missed deadlines through proactive milestone and bottleneck monitoring',
    'Zero guesswork on developer and operational team capacity, velocity, and pass ratios',
    'Direct connection between projects, merchant onboarding requests, and technical installations',
    'Replaces third-party tools like Jira, Asana, and Linear within your unified ERP',
  ],
  faqs: [
    {
      question: 'How does the QA lifecycle work in DERPS task management?',
      answer: 'When a team member finishes working on a task, they submit it to "Ready for QA". A QA specialist or project manager then moves it to "QA In Progress". If issues are found, the task is marked "Failed QA" with review notes and returned to the assignee. Once verified, it progresses to "QA Passed", then "Ready for Deployment", and finally "Deployment Completed".',
    },
    {
      question: 'Can individual employees track their daily assignments easily?',
      answer: 'Yes. The "My Task" view gives each user a clean, distraction-free dashboard showing all assigned tasks, due dates, current status, and attached project context.',
    },
    {
      question: 'What kind of performance metrics are tracked?',
      answer: 'DERPS tracks total tasks completed, tasks in progress, QA approval rates, on-time completion percentages, and historical turnaround time per employee and department, making performance reviews data-driven and objective.',
    },
    {
      question: 'Can we connect tasks to client tickets or merchant applications?',
      answer: 'Yes. Tasks can be created directly from support tickets, merchant onboarding requests, or technical installations, keeping cross-departmental work seamlessly connected in one platform.',
    },
    {
      question: 'Does DERPS support multi-department workflows?',
      answer: 'Yes. You can manage engineering, design, marketing, operational setup, and merchant onboarding tasks within the same system with department-specific permissions and filters.',
    },
  ],
}
