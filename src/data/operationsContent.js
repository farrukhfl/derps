export const operationsContent = {
  name: 'Operations',
  eyebrow: 'OPERATIONS & SUPPLY CHAIN',
  title: 'One Connected Hub for Daily Operations, Logistics & Inventory',
  subhead: 'From receiving stock and tracking serialized items to carrier shipping with Brother b-PAC label printing, managing RMA returns, and calculating partner payouts, DERPS gives you complete operational control in real time.',
  secondaryCta: 'Explore Operations',
  image: '/DERPS Website images/Modules/operations.webp',
  bannerImage: '/DERPS Website images/Modules/operation banner.webp',
  trustBullets: ['Real-time multi-location stock', 'End-to-end serial number (SN) report', 'FedEx shipping & thermal label printing'],
  stripTitle: 'From warehouse arrival to final customer delivery & partner payouts',
  areas: [
    { label: 'Inventory Management', description: 'Multi-location stock tracking & alerts', icon: 'Boxes' },
    { label: 'Serial Number Tracking', description: 'Complete lifecycle & warranty history', icon: 'ScanBarcode' },
    { label: 'Carrier Shipping & Labels', description: 'FedEx dispatch & Brother b-PAC printing', icon: 'Truck' },
    { label: 'Returns & RMA', description: 'Restocking, refunds & defect logs', icon: 'Undo2' },
    { label: 'Items & Services', description: 'Unified product & service catalog', icon: 'PackageSearch' },
    { label: 'Agent Payouts', description: 'Multi-tier commission & payout approvals', icon: 'HandCoins' },
  ],
  features: [
    {
      title: 'Inventory counts you can trust across every warehouse & location',
      description: 'Track stock across multiple warehouses and staging locations in real time. Monitor quantity on hand, cost basis, retail pricing, and profit margins to make data-driven purchasing decisions.',
      bullets: [
        'Live cost, pricing, and profit margin analysis for every SKU across all locations',
        'Advanced multi-parameter search by product name, barcode, serial number, and vendor',
        'Automatic low-stock indicators and reorder alerts to prevent stockouts and over-ordering',
      ],
      icon: 'Warehouse',
    },
    {
      title: 'Track every serialized item through its complete lifecycle (SN Report)',
      description: 'Never lose track of high-value or regulated hardware. The built-in SN Report logs every serial number from vendor purchase and warehouse intake to technician staging, merchant deployment, and warranty service.',
      bullets: [
        'Full timeline of every serial number from PO intake to customer assignment and activation',
        'Instant SN lookup for quick warranty verification, repair history, and audit compliance',
        'Integrated device status tracking across in-stock, staged, deployed, and returned states',
      ],
      icon: 'ScanLine',
    },
    {
      title: 'Carrier shipping (FedEx) with direct Brother b-PAC thermal label printing',
      description: 'Streamline pick, pack, and dispatch operations. Generate carrier shipping labels, print directly to Brother thermal printers with customized label templates, and automatically attach live tracking numbers.',
      bullets: [
        'Native FedEx API integration with automated tracking number generation and status updates',
        'Direct Brother b-PAC SDK integration for one-click thermal label printing without extra drivers',
        'Pre-configured label templates for industry-standard POS hardware and custom merchant packaging',
      ],
      icon: 'PackageCheck',
    },
    {
      title: 'Frictionless returns and RMA management with automatic restock',
      description: 'Handle customer and merchant returns with speed and accuracy. Log return reasons, inspect item condition, choose between restocking or quarantine disposal, and keep your inventory balanced automatically.',
      bullets: [
        'Structured return categorization (defective, exchange, merchant remorse, lease termination)',
        'One-click restocking that immediately updates live inventory counts and general ledger records',
        'Complete audit trails linking returns back to original sales orders and merchant accounts',
      ],
      icon: 'RefreshCcw',
    },
    {
      title: 'Unified catalog for physical goods, POS hardware & billable services',
      description: 'Manage everything you sell in one central catalog. Keep product specifications, hardware configurations, service rates, pricing tiers, and tax codes standardized across sales, operations, and accounting.',
      bullets: [
        'Standardized catalog for physical inventory items, POS terminals, and billable service tiers',
        'Custom pricing tiers, tax-exempt rules, and unit-of-measure settings across departments',
        'Consistent product data shared instantly across quotes, orders, inventory, and invoices',
      ],
      icon: 'Tags',
    },
    {
      title: 'Automated partner commissions and multi-tier agent payouts',
      description: 'Reward the sales agents, referral partners, and field representatives who drive your growth. Calculate commissions transparently, manage multi-tier approval workflows, and export audit-ready payout records.',
      bullets: [
        'Flexible commission calculation rules based on closed business and merchant activations',
        'Structured payout workflow with multi-tier status approvals (Pending, Approved, Rejected)',
        'Proof-of-payment receipt uploads and comprehensive payout history reports for accounting reconciliation',
      ],
      icon: 'BadgeDollarSign',
    },
  ],
  benefitsTitle: 'What connected operations mean for your business',
  benefits: [
    'Zero discrepancy between warehouse stock counts and sales availability',
    'Full traceability on every high-value serialized asset from day one',
    'Faster order fulfillment with automated carrier dispatch and thermal label printing',
    'Streamlined returns that protect profit margins and customer goodwill',
    'Transparent partner payouts that motivate your sales and agent network',
    'Single source of truth replacing fragmented spreadsheets and siloed tools',
  ],
  faqs: [
    {
      question: 'How does DERPS handle serialized inventory tracking?',
      answer: 'DERPS includes a dedicated Serial Number (SN) Report and tracking system. Each serialized unit is recorded upon purchase order receipt and followed through warehouse transfers, technician staging, sales order fulfillment, merchant installation, warranty claims, and eventual returns. You can search any serial number instantly to view its complete historical timeline.',
    },
    {
      question: 'How does Brother b-PAC thermal label printing work in DERPS?',
      answer: 'DERPS integrates directly with Brother thermal label printers via the b-PAC SDK. When an order or merchant terminal is prepared for dispatch, the system renders formatted shipping and terminal identification labels using customizable templates and prints them with a single click, embedding the merchant ID, serial number, and carrier barcode.',
    },
    {
      question: 'Can we manage both physical products and professional services in one place?',
      answer: 'Yes. The Items and Services module allows you to configure physical goods (with stock tracking, unit costs, and reorder levels) alongside recurring or one-time services (like technical installations, maintenance contracts, and consulting hours) with standardized pricing and tax rules.',
    },
    {
      question: 'How does the Agent Payout workflow operate?',
      answer: 'Agent payouts are connected directly to sales and merchant activation performance. The system records commission claims, tracks approval stages (Pending, Approved, Rejected), allows file attachments for proof of payment, and generates detailed payout reports for accounting reconciliation.',
    },
    {
      question: 'Can DERPS handle multi-warehouse or multi-location inventory?',
      answer: 'Yes. DERPS supports tracking stock levels across multiple locations and departments, giving management a unified view of total inventory valuation alongside location-specific stock availability.',
    },
    {
      question: 'How does returns processing update inventory and financial records?',
      answer: 'When a return is logged, the operator can mark items as restocked (which immediately returns them to active inventory) or damaged/quarantined. If refunds or credit memos are required, the record ties directly into the Accounting module without manual double-entry.',
    },
  ],
}
