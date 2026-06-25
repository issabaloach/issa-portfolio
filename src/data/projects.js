export const PROJECTS = {
  brucedavidson: {
    name: "Bruce Davidson Productions",
    tagline: "Ebook web app with integrated payments.",
    blurb:
      "A bespoke platform for an American client to sell and distribute their ebooks securely. Integrated with PayPal for seamless checkout.",
    role: "Full-stack developer",
    domain: "brucedavidsonproductions.com",
    link: "https://www.brucedavidsonproductions.com/",
    image: "/images/brucedavidson.jpg",
    year: "2026",
    stack: ["Next.js", "Prisma", "NeonDB", "NextAuth", "PayPal"],
    metrics: [
      ["type", "ebook app"],
      ["auth", "NextAuth"],
      ["payments", "PayPal"],
      ["db", "NeonDB"],
    ],
    context:
      "The American client needed a custom, branded platform to distribute their ebooks directly to customers without relying on third-party marketplaces.",
    approach: [
      "Next.js App Router for fast page loads and solid SEO.",
      "NeonDB and Prisma to provide a resilient, type-safe data layer.",
      "NextAuth for secure session management and PayPal for immediate checkout.",
    ],
    tradeoffs: [
      "Opted for NextAuth over managed identity providers to retain full control over the user data and authentication flow.",
    ],
    arch: ["Next.js client", "NextAuth API", "Prisma ORM", "NeonDB", "PayPal"],
  },

  neuroscan: {
    name: "NeuroScan AI",
    tagline: "Brain tumor MRI classifier with diagnostic-grade accuracy.",
    blurb:
      "A Nextjs + Python web app that classifies brain MRI scans into four tumor categories. Optimized to run real-time inference on CPU-only cloud infrastructure — no GPU dependency, no per-request cost spike.",
    role: "Full-stack engineer + ML pipeline",
    domain: "brain-tumor-web-smiu.vercel.app",
    link: "https://brain-tumor-web-smiu.vercel.app/",
    image: "/images/braintumor.jpg",
    year: "2026",
    stack: ["Nextjs", "Python", "TensorFlow", "FastAPI", "Vercel"],
    metrics: [
      ["classification accuracy", "95%"],
      ["p95 inference", "3.8s"],
      ["infrastructure", "CPU-only"],
      ["tumor classes", "4-way"],
    ],
    context:
      "Radiologists at smaller hospitals don't have access to deep-learning triage tools — the models exist in research papers, but the path from notebook to a real product nobody has built. The constraint was practical: any system has to run on commodity cloud without GPU budget.",
    approach: [
      "Picked a 4-class architecture over binary so the model degrades gracefully on edge cases instead of confidently misclassifying.",
      "Stripped TensorFlow ops down to what CPU inference can do efficiently — quantized weights, batched preprocessing in NumPy.",
      "Treated the <4s latency target as a hard contract: the system fails loudly if it can't hit it, instead of silently degrading.",
    ],
    tradeoffs: [
      "No GPU = simpler infra but a ceiling on model size. Picked accuracy over experimentation.",
      "No DICOM viewer — out of scope; the goal was triage, not full reading workflow.",
    ],
    arch: ["Next.js client", "FastAPI router", "TF inference worker", "S3 image cache"],
  },

  gmr: {
    name: "Global Music Rater",
    tagline: "Full-stack music marketplace with in-browser audio tooling.",
    blurb:
      "A marketplace where artists upload tracks, get rated, and earn revenue. Direct-to-storage uploads bypass the server entirely; the clipping engine runs in the browser.",
    role: "Full-stack engineer",
    domain: "globalmusicrater.com",
    link: "https://www.globalmusicrater.com/",
    image: "/images/globalmusicrater.jpg",
    year: "2026",
    stack: ["Nextjs", "Node", "Express", "MongoDB", "AWS S3", "Stripe"],
    metrics: [
      ["upload pipeline", "direct-to-S3"],
      ["clip engine", "in-browser"],
      ["payouts", "automated"],
      ["stack", "Nextjs",""],
    ],
    context:
      "Existing music platforms either lock artists into bad revenue terms or require ops-heavy admin work. The product brief was: let an artist upload, sample, and earn — without the platform touching the audio bytes more than necessary.",
    approach: [
      "Presigned-URL uploads — clients hit S3 directly so the API never proxies multi-MB audio.",
      "Built the clipping UX on the Web Audio API; offload chops are free to the platform.",
      "Stripe Connect for payouts with idempotent webhooks driving revenue ledger updates.",
    ],
    tradeoffs: [
      "In-browser clipping means worse experience on weak devices — accepted; the desktop-first audience justified it.",
    ],
    arch: ["React client", "Express API", "S3 presigned", "Stripe webhooks", "MongoDB"],
  },

  gym: {
    name: "ProCheckGym",
    tagline: "Multi-tenant gym management SaaS with automated enforcement.",
    blurb:
      "A platform that runs the back-office for gyms — members, attendance, subscriptions, billing — with cron-driven enforcement that keeps the data honest without staff intervention.",
    role: "Backend lead",
    domain: "procheckgym.com",
    link: "https://www.procheckgym.com/",
    image: "/images/procheckgym.jpg",
    year: "2026",
    stack: ["ExpressJs", "MongoDB","Neondb", "Nextjs", "Cron", "Docker"],
    metrics: [
      ["modules", "6"],
      ["cron jobs", "4"],
      ["tenancy", "multi-tenant"],
      ["uptime", "99.9%"],
    ],
    context:
      "Gym staff don't want to be data janitors. The pattern across every gym I talked to was the same: members lapse, attendance gets fuzzy, and someone has to spend Fridays cleaning the database.",
    approach: [
      "Modular NestJS — every domain (members, attendance, subscriptions) is its own bounded context.",
      "Cron workers run nightly: expire stale subscriptions, reconcile attendance gaps, send renewal nudges.",
      "Tenant isolation at the data layer — one shared cluster, deterministic per-gym indexing.",
    ],
    tradeoffs: [
      "Single Mongo cluster vs per-tenant — cheaper to run, but the day a gym needs data sovereignty I rebuild.",
    ],
    arch: ["React admin", "NestJS gateway", "Auth module", "Members svc", "Cron worker", "MongoDB"],
  },

  asan: {
    name: "AsanKarobar",
    tagline: "POS, inventory and invoicing SaaS for retail operations.",
    blurb:
      "A multi-tenant SaaS managing point-of-sale, inventory, vendor relationships and invoicing for retailers. Built API-first so the same backend powers POS terminals, admin web, and (eventually) mobile.",
    role: "Backend architect",
    domain: "asankarobar.biz",
    link: "https://www.asankarobar.biz/",
    image: "/images/asankarobar.jpg",
    year: "2025",
    stack: ["NestJS", "MongoDB", "REST", "Docker"],
    metrics: [
      ["domains", "POS · INV · AP"],
      ["tenancy", "multi-tenant"],
      ["throughput", "optimized"],
      ["db", "sharded"],
    ],
    context:
      "Mid-market retail in Pakistan runs on spreadsheets and WhatsApp. Existing SaaS is either localized but ancient, or modern but priced for the US market.",
    approach: [
      "Domain-driven module split: POS, Inventory, Vendor, Invoice — each owns its data, communicates via the gateway.",
      "Read-optimized denormalization for hot tables; write path stays normalized for correctness.",
      "Built the invoice engine first — every other module hangs off the financial truth.",
    ],
    tradeoffs: [
      "No real-time sync between POS terminals yet. Eventually consistent; queued conflict resolution.",
    ],
    arch: ["React POS", "NestJS gateway", "Inventory svc", "Vendor svc", "Invoice svc", "MongoDB"],
  },

  edtech: {
    name: "OnlineTeacher1to1",
    tagline: "Live tutoring platform — student & teacher dashboards from scratch.",
    blurb:
      "A live 1-to-1 tutoring frontend built end-to-end: student onboarding, teacher dashboards, scheduling, payment flows. Production-ready and responsive across devices.",
    role: "Frontend lead",
    domain: "onlineteachers1to1.com",
    link: "https://onlineteachers1to1.com/",
    year: "2025",
    stack: ["Next.js", "shadcn/ui", "Tailwind", "REST APIs"],
    metrics: [
      ["surfaces", "2 dashboards"],
      ["payments", "integrated"],
      ["responsive", "mobile-first"],
      ["scope", "built from scratch"],
    ],
    context:
      "A tutoring platform without a usable interface is just a phone number. The brief was to take backend endpoints and turn them into two coherent experiences — one for students, one for teachers — that didn't feel like two different products.",
    approach: [
      "shadcn/ui as the foundation, then layered custom components only where the brand needed it.",
      "Shared component library across the two dashboards — same building blocks, different compositions.",
      "Mobile responsiveness as a first-class constraint, not a final-week scramble.",
    ],
    tradeoffs: [
      "Used shadcn defaults heavily — fast to ship, harder to differentiate visually until later.",
    ],
    arch: ["Next.js student app", "Next.js teacher app", "Auth", "Scheduler API", "Payment gateway"],
  },

  attendance: {
    name: "Attendyfy",
    tagline: "Biometric attendance pipeline at Bright Solutions — backend.",
    blurb:
      "A backend that handles thousands of daily check-ins from ZKBioTime biometric devices. Solved a hairy connectivity problem with secure tunneling so remote devices talk to the local server without firewall gymnastics.",
    role: "Backend developer",
    domain: "internal · bright solutions",
    link: "https://www.attendyfy.com/",
    image: "/images/attendyfy.jpg",
    year: "2025",
    stack: ["Expressjs", "MongoDB", "Neondb", "Ngrok", "ZKBioTime", "Hikvision", ""],
    metrics: [
      ["daily check-ins", "thousands"],
      ["data accuracy", "100%"],
      ["tunneling", "Ngrok"],
      ["validation", "strict schema"],
    ],
    context:
      "Biometric hardware in the field, backend in a private network, firewall rules between them. The classic enterprise headache that usually ends in a VPN reconfig and a sad sysadmin.",
    approach: [
      "Ngrok secure tunneling for device-to-backend traffic — bypasses firewall reconfig entirely.",
      "Strict validation at every API boundary — biometric data is messy, the backend assumes nothing.",
      "Modular Mongo schema designed to scale across thousands of daily records without index pain.",
    ],
    tradeoffs: [
      "Ngrok dependency is a vendor risk — long-term, plan to migrate to a self-hosted tunnel.",
    ],
    arch: ["ZKBioTime device", "Ngrok tunnel", "NestJS API", "Validation pipe", "MongoDB"],
  },

  recipe: {
    name: "Recipe App",
    tagline: "A weekend React app that taught me Firebase.",
    blurb:
      "Built a responsive recipe app with search, filters and real-time data updates. Small project, mostly a vehicle to learn Firebase fluency.",
    role: "Solo build",
    domain: "perfect-recipe-orcin.vercel.app",
    link: "https://perfect-recipe-orcin.vercel.app/",
    image: "/images/reciper.jpg",
    year: "2024",
    stack: ["React", "Firebase"],
    metrics: [
      ["features", "search · filter"],
      ["data", "real-time"],
      ["scope", "weekend"],
      ["goal", "learn firebase"],
    ],
    context:
      "Sometimes you build a thing to learn another thing. Real-time data was the lesson; recipes were the excuse.",
    approach: [
      "Firebase Realtime Database for live updates without writing a backend.",
      "Search and filter as derived state from the live store.",
    ],
    tradeoffs: [
      "Firebase locks you in. Fine for a learning project; would not start a SaaS here today.",
    ],
    arch: ["React app", "Firebase RTDB"],
  },
};
