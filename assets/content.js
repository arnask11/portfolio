/*
  Portfolio content. Every page section renders from these objects.
  Edit here, not in index.html.

  Sources used when writing this file:
  - Project READMEs and code in each linked GitHub repo
  - Arnas's own descriptions of employer work (no employer code is linked)
  Rule: no invented metrics. Every number below appears in a repo README or was provided by Arnas.
*/

window.PORTFOLIO = {

  metrics: [
    { value: 40, prefix: '~', suffix: '%', label: 'Faster feedback triage at Meta' },
    { value: 10, suffix: 'K', label: 'Synthetic claims in the ClaimsAI benchmark' },
    { value: 200, suffix: '+', label: 'LLM tool-calling eval tasks' },
    { value: 150, suffix: '+', label: 'Students taught at MSU' }
  ],

  principles: [
    { k: 'Retrieval', v: 'Getting the right context into the system.' },
    { k: 'Tools', v: 'Giving models structured ways to act.' },
    { k: 'Evaluation', v: 'Finding where models actually fail.' },
    { k: 'Data', v: 'Reliable pipelines underneath them.' },
    { k: 'Systems', v: 'State, queues, latency, and failure.' },
    { k: 'Product', v: 'Turning infrastructure into something people use.' }
  ],

  /* ------------------------------------------------------------------ */
  experiences: [
    {
      id: 'pieline',
      org: 'PieLine',
      role: 'Software Engineer Intern',
      dates: 'Jun 2026 - Present',
      context: 'Early-stage B2B voice AI startup for restaurants, backed by Founders, Inc.',
      summary: 'Building customer onboarding, menu ingestion, and data and testing infrastructure for a restaurant voice AI product.',
      tags: ['TypeScript', 'Next.js', 'Supabase', 'Python', 'SQL'],
      overview: [
        'PieLine answers restaurant phone calls with a voice agent. The agent is only as good as what sits around it: the menu it reads from, the account data behind each restaurant, and the tooling the team uses to see how calls went. My work is mostly in that surrounding layer.',
        'The team is small, so requirements usually arrive as a conversation rather than a ticket. A lot of the job is turning that into a scoped build, shipping it, and testing it against the live dashboard.'
      ],
      sections: [
        {
          title: 'Customer onboarding, end to end',
          body: 'Built the invite-based onboarding flow for new restaurant customers, frontend and backend, inside the internal admin panel of the Next.js dashboard.',
          bullets: [
            'Invite form that creates the account and sends the invitation',
            'Pending invitations view with acceptance status and a resend action',
            'Google sign-in, plus forgot-password and change-password flows',
            'Supabase auth and table setup behind it, tested against the live dashboard, where an admin mistake reaches every customer'
          ]
        },
        {
          title: 'Menu ingestion pipeline',
          body: 'The voice agent needs each restaurant’s full menu, including required and optional modifiers, as clean JSON. I refactored the team’s TypeScript scraper into a one-command adaptive pipeline.',
          bullets: [
            'Prefers structured data first: captured network payloads and batched item-detail GraphQL requests',
            'Falls back to opening item modals, then to LLM extraction (Stagehand with OpenAI), only for items still missing options',
            'Validates the output, then recovers in the same session and re-verifies if validation fails, before a full retry',
            'Runs in a Browserbase cloud browser because the source site blocks local Chromium',
            'Unit tests with Vitest on committed fixtures so CI does not depend on live scrapes'
          ]
        },
        {
          title: 'Call data and retrieval testing',
          bullets: [
            'Python and SQL pipelines for processing and analyzing customer call transcripts stored in Supabase',
            'Integration tests around the voice agent’s retrieval layer',
            'Researched and evaluated tooling for automated call analysis and voice agent quality measurement'
          ]
        },
        {
          title: 'Beyond code',
          body: 'Contributed to go-to-market work for restaurant customers, including how owners think about missed calls and low-cost ways to show them the problem.'
        }
      ],
      stack: ['TypeScript', 'Next.js', 'Supabase', 'Python', 'SQL', 'Browserbase', 'Stagehand', 'OpenAI', 'GraphQL', 'Vitest'],
      note: 'Employer code is private, so there are no repository links here.'
    },
    {
      id: 'meta',
      org: 'Meta',
      role: 'Software Engineering Intern · Edge Network Services',
      dates: 'May - Jul 2025',
      summary: 'Built an ML-assisted feedback analysis pipeline that cut incident triage time by ~40%.',
      highlight: { value: '~40%', label: 'faster triage' },
      tags: ['Python', 'scikit-learn', 'SQL', 'PCA', 'KMeans'],
      overview: [
        'Edge Network engineers receive a large volume of operational and user feedback. Reading it item by item made it slow to see which issues were recurring and which ones deserved attention first.',
        'I built a pipeline that turns that unstructured feedback into groups of related reports, so an engineer starts from a handful of themes instead of a long queue.'
      ],
      sections: [
        {
          title: 'What I built',
          bullets: [
            'Python preprocessing for large-scale feedback data, with SQL for pulling production-scale datasets',
            'Semantic representation of each report using internal LLM-generated embeddings',
            'Dimensionality reduction with PCA before clustering',
            'Clustering with KMeans and DBSCAN, including experiments on cluster behavior and choosing the cluster count',
            'Analysis and visualization so the cluster output made sense to the engineers using it'
          ]
        },
        {
          title: 'Technical approach',
          flow: ['Raw feedback', 'Preprocess (Python, SQL)', 'LLM embeddings', 'PCA', 'KMeans / DBSCAN', 'Themes for triage']
        },
        {
          title: 'Impact',
          body: 'Reduced feedback and incident triage time by approximately 40%.'
        }
      ],
      stack: ['Python', 'Pandas', 'scikit-learn', 'SQL', 'PCA', 'KMeans', 'DBSCAN', 'LLM embeddings', 'Data visualization']
    },
    {
      id: 'indoqubix',
      org: 'IndoQubix Cloudtech',
      role: 'Software Development Intern · Health Technology',
      dates: 'Jun - Aug 2024',
      summary: 'Built full-stack features, APIs, and predictive recommendations for a patient-provider platform.',
      tags: ['Full stack', 'REST APIs', 'RBAC', 'Healthcare'],
      overview: [
        'A health-tech platform connecting patients, providers, and their records. Healthcare data raises the bar on who can see what and on keeping a record of changes, so a lot of the work sat in access control and auditability rather than just features.'
      ],
      sections: [
        {
          title: 'What I worked on',
          bullets: [
            'Full-stack application features across frontend and backend',
            'API integrations, tested and validated with Postman',
            'Role-based access control for patient and provider data',
            'Versioning and audit functionality suited to healthcare workflows',
            'Recommendation and predictive features meant to support clinical decision-making'
          ]
        }
      ],
      stack: ['Full stack', 'REST APIs', 'Postman', 'RBAC', 'Audit logging', 'Recommendation systems']
    },
    {
      id: 'msu-it',
      org: 'MSU IT',
      role: 'Student IT Assistant · Learning & Development',
      dates: 'Oct 2025 - May 2026',
      summary: 'Produced technical training resources and supported virtual classrooms across campus systems.',
      tags: ['Technical writing', 'Training video', 'Support'],
      overview: [
        'A communication role more than an engineering one: taking how a campus system works and making it clear to the people who have to use it.'
      ],
      sections: [
        {
          title: 'What I did',
          bullets: [
            'Produced training videos and instructional resources for university learning technology',
            'Supported virtual classroom setups',
            'Turned technical processes into documentation people could follow',
            'Helped users troubleshoot technical problems'
          ]
        }
      ],
      stack: ['Documentation', 'Video production', 'User support']
    },
    {
      id: 'msu-cse',
      org: 'MSU Computer Science',
      role: 'Undergraduate Learning Assistant',
      dates: 'Sep 2023 - May 2025',
      summary: 'Taught Python and data structures to 150+ students in labs and office hours.',
      highlight: { value: '150+', label: 'students' },
      tags: ['Python', 'Data structures', 'Teaching'],
      overview: [
        'Two years of labs and office hours for introductory computer science. The useful habit it built: explaining a bug so the student can find the next one themselves.'
      ],
      sections: [
        {
          title: 'What I did',
          bullets: [
            'Supported 150+ students through labs, office hours, and course instruction',
            'Explained Python, data structures, and computational problem-solving',
            'Debugged student programs by walking through the error with them rather than handing over a fix'
          ]
        }
      ],
      stack: ['Python', 'Data structures', 'Debugging', 'Mentoring']
    },
    {
      id: 'msu-med',
      org: 'MSU College of Human Medicine',
      role: 'Research Assistant',
      dates: 'Oct - Dec 2023',
      summary: 'Worked on computer vision workflows for medical imaging: annotation, preprocessing, and model validation.',
      tags: ['Computer vision', 'Medical imaging', 'Python'],
      overview: [
        'A research role on medical imaging models. The work was mostly on the data side, where label quality decides how much a validation number means.'
      ],
      sections: [
        {
          title: 'What I did',
          bullets: [
            'Annotated medical images',
            'Preprocessed imaging data for experiments',
            'Worked on computer vision experiment workflows and model validation',
            'Iterated on dataset quality as part of the research process'
          ]
        }
      ],
      stack: ['Computer vision', 'Image annotation', 'Data preprocessing', 'Model validation']
    }
  ],

  /* ------------------------------------------------------------------ */
  projects: [
    {
      id: 'claimsai',
      featured: true,
      kicker: 'AI decision systems',
      title: 'ClaimsAI Decision Engine',
      summary: 'Benchmarks five claims-routing architectures, from a rules engine to a tool-calling orchestrator, on 10,000 synthetic insurance claims.',
      cardMetric: '10K claims · 89.9% routing accuracy',
      tags: ['Python', 'XGBoost', 'FastAPI', 'SimPy'],
      github: 'https://github.com/arnask11/ClaimsAI_Decision_Engine',
      metrics: [
        { v: '89.9%', l: 'held-out routing accuracy' },
        { v: '$262', l: 'modeled loss per claim' },
        { v: '50.6%', l: 'fewer SLA violations vs FIFO' }
      ],
      overview: [
        'At intake, every insurance claim goes one of four ways: auto-process, request documents, human review, or the fraud team. A wrong call is not just a wrong label. Paying a fraudulent claim straight through costs money, and sending a clean one to a person costs time and SLA.',
        'So the project scores each system on accuracy and on a modeled dollar loss per claim, then asks a second question: once claims are routed, does the way you assign them to adjusters change SLA performance?'
      ],
      sections: [
        {
          title: 'Five systems, same 2,000 held-out claims',
          body: '10,000 claims generated with seed 42. Each system sees different inputs at decision time.',
          bullets: [
            'Rules: coded first-notice thresholds and a fixed fraud heuristic',
            'XGBoost routing: the same coded form, trained to predict the expert path',
            'Text-only: TF-IDF and logistic regression on the claimant narrative (not an LLM)',
            'Structured hybrid: coded form plus policy lookup and an exclusion-clause scan',
            'Narrative hybrid: one orchestrator extracts fields from the narrative, resolves the policy, then calls the fraud and severity models'
          ]
        },
        { chart: 'claimsai' },
        {
          title: 'Architecture',
          flow: ['Claim arrives', 'Orchestrator extracts fields', 'Validation', 'Policy lookup · fraud model · severity model', 'Decision policy with human gates', 'Adjuster assignment', 'Audit record']
        },
        {
          title: 'Engineering decisions',
          bullets: [
            'Policy ID is withheld from the tree models so a model cannot memorize which contract excludes theft. That fact has to come from retrieval.',
            'Region, age band, and notice channel are not features. Straight-through rates are audited by region afterward (min-to-max ratio 0.87).',
            'Fraud scores are isotonic-calibrated. The fraud-team gate sits at 0.80, not 0.50, because a specialist queue is the expensive action.',
            'The orchestrator follows a fixed decision policy over its tools (policy search and lookup, fraud and severity scoring, missing-information requests, adjuster assignment, escalation). It refuses to score a file whose amount is missing or contradicted.',
            'Every decision stores the gate that fired, so a reviewer can argue with a specific reason instead of a score.'
          ]
        },
        {
          title: 'Where it breaks',
          bullets: [
            'Typos: the narrative hybrid drops to 63.5% while form-based models stay above 98%. If the coded form is reliable, use it.',
            'Ambiguous wording: incident type becomes unresolvable, the hybrid refuses to confirm coverage and over-escalates (46.6%).',
            'Contradictory amounts: the hybrid abstains and asks for documents on every file (100%). Form-based systems often pay the smaller amount.',
            'The book and expert labels are synthetic. The loss figures are a scenario model, not an insurer’s result.'
          ]
        },
        {
          title: 'Queue simulation',
          body: '20 peak days, 1,560 claims, the same arrivals under three assignment policies in SimPy. Relative to FIFO, sending each claim to the shortest skilled queue cut SLA violations 50.6%. An OR-Tools batch plan cut them 42.7% but still lost, because what mattered was matching the file to someone with the skill.'
        }
      ],
      stack: ['Python', 'XGBoost', 'scikit-learn', 'SHAP', 'FastAPI', 'Streamlit', 'OR-Tools', 'SimPy', 'Docker', 'PostgreSQL']
    },
    {
      id: 'toolbench',
      featured: true,
      kicker: 'LLM evaluation',
      title: 'Tool Calling Failure Benchmark',
      summary: 'An evaluation harness that measures how and why LLMs fail at tool calling, and whether they recover.',
      cardMetric: '200+ tasks · 4 models',
      tags: ['Python', 'Anthropic', 'OpenAI', 'Evals'],
      metrics: [
        { v: '200+', l: 'distinct tool-calling tasks' },
        { v: '4', l: 'models compared' }
      ],
      overview: [
        'Most tool-calling demos show the call that worked. This project is about the ones that did not: which tool the model picked, whether the arguments were valid, and what happens after a failed call.',
        'It runs the same 200+ tasks across Claude Haiku, Claude Sonnet, Claude Opus, and GPT-4o mini, so patterns show up across models instead of as one-off anecdotes.'
      ],
      sections: [
        {
          title: 'What I built',
          bullets: [
            'A repeatable evaluation harness that runs every task against every model the same way',
            'A failure taxonomy: wrong tool selected, malformed arguments, hallucinated parameters, schema violations, and unsuccessful invocations',
            'A self-correction path that hands the error back and lets the model try again',
            'Scoring for recoverability, not just first-attempt success'
          ]
        },
        {
          title: 'Evaluation loop',
          flow: ['Task + tool schemas', 'Model call', 'Validate call against schema', 'Classify failure', 'Return error to model', 'Score recovery']
        },
        {
          title: 'Why recovery matters',
          body: 'In an agent loop a failed call is not the end of the task. A model that picks the wrong tool but corrects itself on the next turn behaves very differently in production from one that repeats the mistake. Measuring only first-attempt accuracy hides that difference.'
        }
      ],
      stack: ['Python', 'Anthropic API', 'Claude', 'OpenAI API', 'GPT-4o mini', 'JSON Schema', 'LLM evaluation'],
      note: 'The benchmark code is not public.'
    },
    {
      id: 'hap',
      featured: true,
      kicker: 'Senior capstone · HAP / Henry Ford Health',
      title: 'Enterprise AI Video Creator',
      award: 'Best Design Day Performance Award · MSU Engineering Design Day',
      summary: 'Turns a plain-language training request into a compliance-checked, professionally rendered video for a health insurer.',
      cardMetric: 'Async render pipeline · RBAC + audit trail',
      tags: ['React', 'FastAPI', 'RabbitMQ', 'Celery'],
      metrics: [
        { v: 'Award', l: 'Best Design Day Performance' },
        { v: 'Async', l: 'queue-based video rendering' },
        { v: 'PHI/PII', l: 'aware workflow design' }
      ],
      overview: [
        'Built by our capstone team for Health Alliance Plan (HAP), a Michigan health insurer and subsidiary of Henry Ford Health. Enterprise users describe a training video in plain language. The platform writes a script, runs compliance checks, and produces a rendered video.',
        'Because the users are inside a health insurer, the product also needed role-based access, version history, audit trails, and care around PHI and PII.'
      ],
      sections: [
        {
          title: 'The core problem: rendering is slow',
          body: 'AI video generation takes far longer than an HTTP request should stay open. So the API never waits for it. It enqueues a render job and returns, a Celery worker picks the job off RabbitMQ and calls Synthesia, and the result and status are written to PostgreSQL for the frontend to read.',
          flow: ['React client', 'FastAPI', 'RabbitMQ', 'Celery worker', 'Synthesia render', 'PostgreSQL status', 'Client reads completion']
        },
        {
          title: 'Request to video',
          flow: ['Plain-language request', 'Script generation (OpenAI)', 'Compliance checks', 'Asset + video workflow', 'Async render', 'Finished video']
        },
        {
          title: 'Platform features',
          bullets: [
            'React and TypeScript frontend with real-time collaboration',
            'Role-based access control, version history, and audit trails',
            'Pinecone vector search for retrieving relevant content',
            'PHI and PII-aware workflow design for an insurer’s data',
            'Supabase for additional backend infrastructure'
          ]
        }
      ],
      stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'RabbitMQ', 'Celery', 'Pinecone', 'OpenAI', 'Synthesia', 'Supabase'],
      note: 'Built for a client, so the code is not public.'
    },
    {
      id: 'outreach-agent',
      featured: true,
      kicker: 'Agents',
      title: 'Autonomous Outreach Agent',
      summary: 'Finds research and startup contacts, drafts personalized emails into Gmail, and remembers everyone it has touched across runs.',
      cardMetric: 'YC Startup School 2026 coding-agent showcase',
      tags: ['Python', 'Claude', 'Gmail API', 'OAuth2'],
      github: 'https://github.com/arnask11/outreach-agent',
      metrics: [
        { v: 'YC', l: 'Startup School 2026 showcase' },
        { v: 'Human', l: 'review before anything sends' },
        { v: '~$0.002', l: 'per drafted email with Haiku' }
      ],
      overview: [
        'An agent that runs the whole outreach pipeline: find ML professors and early-stage AI founders, find their emails, write a personalized note grounded in their actual work, and track what happens after.',
        'It is built to be run again and again. Every run only touches new people, which is the part that makes it an agent rather than a script you babysit.'
      ],
      sections: [
        {
          title: 'Pipeline',
          flow: ['Scrape targets (CSRankings, web)', 'Skip anyone drafted or blacklisted', 'Draft with Claude Haiku', 'Save to Gmail Drafts (OAuth2)', 'Sync sent / replied from Gmail', 'Learn from outcomes']
        },
        {
          title: 'Why state matters',
          body: 'Without persistence, an unattended outreach agent would email the same person on every run. Anyone already in drafted.csv is never drafted again, duplicate addresses are skipped, and a blacklist is checked before anyone enters the pipeline.'
        },
        {
          title: 'Engineering decisions',
          bullets: [
            'Human in the loop: every email lands in Gmail Drafts. Nothing sends automatically.',
            'memory.md is persistent memory of what worked. When a reply syncs from Gmail, Claude analyzes it and writes new insights back, and the next run injects them into the prompt.',
            'Follow-ups are drafted only when an email was sent, got no reply, and five or more days have passed.',
            'Haiku with prompt caching for drafting; Sonnet only for the scraper, which has to navigate multiple pages to find an email.',
            'Excel sync so the pipeline can be reviewed and edited outside the terminal.'
          ]
        }
      ],
      stack: ['Python', 'Anthropic API', 'Claude Haiku', 'Claude Sonnet', 'Gmail API', 'OAuth2', 'openpyxl']
    },

    /* ---------- More systems ---------- */
    {
      id: 'data-platform',
      kicker: 'Data engineering',
      title: 'Claims AI Data Platform',
      summary: 'A medallion lakehouse that turns batch, streaming, and unstructured claims data into tested, ML-safe gold tables and embeddings.',
      cardMetric: '1,705 docs parsed · quality gate before gold',
      tags: ['PySpark', 'Delta Lake', 'dbt', 'Great Expectations'],
      github: 'https://github.com/arnask11/claims-ai-data-platform',
      metrics: [
        { v: '1,705', l: 'notes, emails, and PDFs parsed' },
        { v: '6 / 6', l: 'planted bad rows quarantined' },
        { v: '17.7%', l: 'documents that contradict the record' }
      ],
      overview: [
        'The data layer behind the ClaimsAI Decision Engine. Claims arrive three ways: batch CSVs, a JSON event stream with corrections and a schema change partway through, and 1,705 notes, emails, and PDFs. The platform turns all of it into gold tables the engine can train on and chunks it can retrieve from.'
      ],
      sections: [
        {
          title: 'Lineage',
          layers: [
            { name: 'Bronze', items: ['Append-only Delta', 'Schema evolution', 'Raw PII kept only in a restricted table'] },
            { name: 'Silver', items: ['One row per claim (MERGE on claim_id)', 'PII hashed', 'Bad rows quarantined with a reason', 'Document text parsed'] },
            { name: 'Quality gate', items: ['Great Expectations', 'Critical failure stops the run'] },
            { name: 'Gold', items: ['dbt models + tests', 'Point-in-time features', 'Chunks + embeddings'] }
          ]
        },
        {
          title: 'Engineering decisions',
          bullets: [
            'A critical check (duplicate claim ID, raw PII on silver, loss date after report date, missing policy) raises and stops the run before dbt or embeddings run.',
            'Row-level problems do not stop the run. They go to quarantine with one reason each.',
            'Features are point in time: a claim’s prior-claim count and regional amount z-score only use claims reported before it.',
            'A gold contract lists the columns the model may train on. Region, age band, and the fraud label stay off it.'
          ]
        },
        {
          title: 'Tradeoffs',
          bullets: [
            'Auto Loader is Databricks-only, so the local runner uses a checksum checkpoint and Delta mergeSchema with the same column contract.',
            'History features are self-joins: clear at 1,000 rows, the wrong plan at 100 million, where they become windows or daily snapshots.',
            'Data is synthetic and seeded, so the checks show the pipeline behaves correctly, not accuracy on real adjuster documents.'
          ]
        }
      ],
      stack: ['PySpark', 'Delta Lake', 'dbt', 'DuckDB', 'Great Expectations', 'Pydantic', 'LangChain', 'Streamlit', 'Python']
    },
    {
      id: 'mcp',
      kicker: 'MCP',
      title: 'Outreach MCP Server',
      summary: 'An MCP server that exposes the outreach agent’s dedup and drafting logic as tools any MCP client can call.',
      cardMetric: '3 MCP tools · stdio test client',
      tags: ['Python', 'MCP SDK', 'FastMCP'],
      github: 'https://github.com/arnask11/outreach-mcp-server',
      metrics: [
        { v: '3', l: 'tools exposed' },
        { v: 'stdio', l: 'end-to-end test client' }
      ],
      overview: [
        'MCP is a standard interface between AI applications and external tools. The outreach agent already used tool calling internally. This server lifts those same capabilities into something Claude Desktop or any other MCP client can discover and call.'
      ],
      sections: [
        {
          title: 'Tools',
          bullets: [
            'check_contact_history(name): is this person already queued, drafted, or missing an email?',
            'draft_outreach_email(...): drafts using the agent’s tone rules and past performance as context. Returns the draft only, never sends.',
            'get_outreach_performance_summary(): what has and has not worked, learned from past outcomes'
          ]
        },
        {
          title: 'Testing',
          body: 'test_client.py starts a real MCP client over stdio, lists the registered tools, and calls each one, so the server is verified end to end without a full MCP host. Synthetic demo data ships with the repo so it runs out of the box.'
        }
      ],
      stack: ['Python', 'MCP SDK', 'FastMCP', 'Anthropic API', 'Tool schemas']
    },
    {
      id: 'voice',
      kicker: 'Voice AI',
      title: 'Voice AI System',
      summary: 'A restaurant voice agent on LiveKit with a Supabase-driven prompt, two tools, a post-call webhook, and a Next.js admin.',
      cardMetric: 'Real-time STT → LLM → TTS with tool calls',
      tags: ['LiveKit', 'TypeScript', 'Supabase', 'Next.js'],
      github: 'https://github.com/arnask11/voice-ai-system',
      overview: [
        'A small version of the infrastructure behind a production restaurant voice agent, built to understand how the pieces fit: live audio, per-restaurant configuration, tools the agent can call mid-conversation, and what gets recorded when the call ends.'
      ],
      sections: [
        {
          title: 'Architecture',
          flow: ['Caller audio (LiveKit room)', 'Silero VAD · Deepgram STT', 'GPT-4.1 mini + tools', 'Cartesia TTS', 'Room ends → webhook', 'Supabase Edge Function → call_logs']
        },
        {
          title: 'What I built',
          bullets: [
            'LiveKit Agents service in Node and TypeScript that loads the restaurant’s config at session start and builds a dynamic system prompt',
            'Two tools with Zod schemas: get_current_menu (read) and submit_catering_request (write)',
            'Supabase schema for restaurants, menu items, catering requests, and call logs, with RLS enabled',
            'A post-call Supabase Edge Function triggered by a LiveKit webhook',
            'A Next.js admin to edit greetings and menu items and view catering requests and call logs'
          ]
        }
      ],
      stack: ['LiveKit Agents', 'TypeScript', 'Node.js', 'Deepgram', 'OpenAI', 'Cartesia', 'Supabase', 'Next.js', 'Zod']
    },
    {
      id: 'opentable',
      kicker: 'Browser automation',
      title: 'OpenTable Reservation Automation',
      summary: 'Books real OpenTable reservations by driving a cloud browser, exposed as voice-agent tools.',
      cardMetric: 'Warm sessions: ~40-50s → ~15-25s to confirm',
      tags: ['Node.js', 'Playwright', 'Browserbase', 'Vapi'],
      github: 'https://github.com/arnask11/OpenTable_Reservation_Automation',
      overview: [
        'OpenTable has no public booking API, so this service clicks through the website in a Browserbase cloud browser with Playwright and returns the confirmation number. It is shaped for a live phone call, where a caller will not wait almost a minute.'
      ],
      sections: [
        {
          title: 'Engineering decisions',
          bullets: [
            'Session warming: start the browser early in the call, then book on confirmation in ~15-25s instead of a ~40-50s cold run',
            'Express API for availability and reservations, plus a Vapi webhook adapter exposing warm_session, list_restaurants, check_availability, and make_reservation',
            'Dry-run by default for voice calls, so a test never creates a real booking by accident',
            'Getting past bot blocking with a regional proxy and a homepage visit before the booking page',
            'Selectors isolated in one file and unit tests with Vitest that need no live browser'
          ]
        }
      ],
      stack: ['Node.js', 'Express', 'Playwright', 'Browserbase', 'Vapi', 'Zod', 'Vitest']
    },
    {
      id: 'toolkit-research',
      kicker: 'Research pipeline',
      title: 'Agent Toolkit Research Pipeline',
      summary: 'Scores 100 apps on how buildable an agent toolkit would be, with a crawler baseline and a separate verification pass.',
      cardMetric: '100 apps · 20-app fresh-fetch check',
      tags: ['Python', 'Data pipeline', 'Verification'],
      github: 'https://github.com/arnask11/AI-Product-Ops',
      overview: [
        'A pipeline that reads vendor docs for 100 apps and labels auth, API access, and buildability, then publishes the results as a single HTML case study.'
      ],
      sections: [
        {
          title: 'How it is honest about its own labels',
          bullets: [
            'Pass 1 is a regex-only crawler with no LLM, kept as a baseline to compare against the published labels',
            'The published labels are hand-authored with AI-assisted doc reading, and the README says so',
            'A 20-app job re-fetches docs and re-runs the same checks, recording whether evidence URLs still resolve',
            'Page statistics are computed at build time from the data, not hardcoded in HTML'
          ]
        }
      ],
      stack: ['Python', 'Standard library only', 'HTML']
    },
    {
      id: 'lost-found',
      kicker: 'Serverless',
      title: 'Serverless Lost & Found',
      summary: 'A lost-and-found app built entirely on managed AWS services, with direct-to-S3 image uploads.',
      cardMetric: 'Presigned S3 uploads · no servers to run',
      tags: ['AWS Lambda', 'DynamoDB', 'S3'],
      overview: [
        'An app for reporting and managing lost-and-found items with no persistent application servers.'
      ],
      sections: [
        {
          title: 'Engineering details',
          bullets: [
            'AWS Lambda for backend logic behind REST endpoints',
            'DynamoDB for item records',
            'S3 for images, uploaded straight from the client using presigned PUT URLs so image bytes never pass through a Lambda'
          ]
        }
      ],
      stack: ['AWS Lambda', 'DynamoDB', 'S3', 'REST APIs']
    },
    {
      id: 'portfolio',
      kicker: 'This site',
      title: 'Portfolio',
      summary: 'This site: a data-driven single page with progressive disclosure, keyboard-accessible case studies, and GitHub Pages deployment.',
      cardMetric: 'No framework · content in one data file',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/arnask11/portfolio',
      overview: [
        'Every card and case study on this page renders from one content file, so adding a project means adding an object rather than copying markup.'
      ],
      sections: [
        {
          title: 'Details',
          bullets: [
            'Case studies open in a drawer with their own URL, so the back button and shared links work',
            'Escape to close, focus moves into the drawer and returns to the card that opened it',
            'Respects prefers-reduced-motion',
            'Deployed on GitHub Pages'
          ]
        }
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'GitHub Pages']
    }
  ],

  /* ------------------------------------------------------------------ */
  /* core: shown by default. icon: simpleicons slug (only for real logos). used: where it was used (ids above). */
  stack: [
    { group: 'Languages', items: [
      { n: 'Python', icon: 'python', core: true, used: ['pieline', 'meta', 'claimsai', 'toolbench', 'outreach-agent', 'mcp', 'data-platform', 'toolkit-research'] },
      { n: 'TypeScript', icon: 'typescript', core: true, used: ['pieline', 'hap', 'voice'] },
      { n: 'JavaScript', icon: 'javascript', used: ['opentable', 'portfolio'] },
      { n: 'SQL', used: ['pieline', 'meta'] },
      { n: 'C++', icon: 'cplusplus', note: 'Coursework.' },
      { n: 'Java', note: 'Coursework.' },
      { n: 'HTML / CSS', used: ['portfolio', 'toolkit-research'] }
    ]},
    { group: 'AI / LLM', items: [
      { n: 'OpenAI', icon: 'openai', core: true, used: ['hap', 'toolbench', 'pieline', 'voice'] },
      { n: 'Anthropic', icon: 'anthropic', core: true, used: ['toolbench', 'outreach-agent', 'mcp'] },
      { n: 'MCP', core: true, used: ['mcp'] },
      { n: 'FastMCP', used: ['mcp'] },
      { n: 'LangChain', icon: 'langchain', used: ['data-platform'] },
      { n: 'Tool calling', used: ['toolbench', 'claimsai', 'voice', 'mcp', 'opentable'] },
      { n: 'LLM evaluation', used: ['toolbench'] },
      { n: 'Embeddings', used: ['meta', 'data-platform'] },
      { n: 'Retrieval / RAG', used: ['claimsai', 'data-platform', 'hap', 'pieline'] },
      { n: 'Pinecone', used: ['hap'] }
    ]},
    { group: 'Voice AI', items: [
      { n: 'LiveKit', core: true, used: ['voice'] },
      { n: 'ElevenLabs', icon: 'elevenlabs', core: true, used: [], note: 'Worked with outside the projects listed here.' },
      { n: 'Deepgram', used: ['voice'] },
      { n: 'Cartesia', used: ['voice'] },
      { n: 'Vapi', used: ['opentable'] }
    ]},
    { group: 'Machine learning', items: [
      { n: 'scikit-learn', icon: 'scikitlearn', core: true, used: ['meta', 'claimsai'] },
      { n: 'XGBoost', used: ['claimsai'] },
      { n: 'SHAP', used: ['claimsai'] },
      { n: 'Pandas', icon: 'pandas', used: ['meta', 'data-platform'] },
      { n: 'NumPy', icon: 'numpy', used: ['data-platform'] },
      { n: 'PCA / KMeans / DBSCAN', used: ['meta'] }
    ]},
    { group: 'Frontend', items: [
      { n: 'React', icon: 'react', core: true, used: ['hap'] },
      { n: 'Next.js', icon: 'nextdotjs', core: true, used: ['pieline', 'voice'] }
    ]},
    { group: 'Backend / APIs', items: [
      { n: 'FastAPI', icon: 'fastapi', core: true, used: ['hap', 'claimsai'] },
      { n: 'Node.js', icon: 'nodedotjs', used: ['voice', 'opentable'] },
      { n: 'Express', icon: 'express', used: ['opentable'] },
      { n: 'GraphQL', icon: 'graphql', used: ['pieline'] },
      { n: 'OAuth2 / Gmail API', used: ['outreach-agent'] }
    ]},
    { group: 'Data', items: [
      { n: 'PostgreSQL', icon: 'postgresql', core: true, used: ['hap', 'claimsai'] },
      { n: 'Supabase', icon: 'supabase', core: true, used: ['pieline', 'voice', 'hap'] },
      { n: 'PySpark', icon: 'apachespark', core: true, used: ['data-platform'] },
      { n: 'Delta Lake', used: ['data-platform'] },
      { n: 'dbt', icon: 'dbt', used: ['data-platform'] },
      { n: 'DuckDB', icon: 'duckdb', used: ['data-platform'] },
      { n: 'DynamoDB', used: ['lost-found'] },
      { n: 'Great Expectations', used: ['data-platform'] },
      { n: 'Pydantic', icon: 'pydantic', used: ['data-platform'] }
    ]},
    { group: 'Infrastructure', items: [
      { n: 'AWS', core: true, used: ['lost-found'] },
      { n: 'Docker', icon: 'docker', core: true, used: ['claimsai'] },
      { n: 'RabbitMQ', icon: 'rabbitmq', used: ['hap'] },
      { n: 'Celery', icon: 'celery', used: ['hap'] },
      { n: 'Async job processing', used: ['hap'] },
      { n: 'Browserbase / Playwright', used: ['pieline', 'opentable'] }
    ]},
    { group: 'Simulation / optimization', items: [
      { n: 'SimPy', used: ['claimsai'] },
      { n: 'OR-Tools', used: ['claimsai'] }
    ]},
    { group: 'Tooling', items: [
      { n: 'Git / GitHub', icon: 'github', note: 'Every project here.' },
      { n: 'Vitest', icon: 'vitest', used: ['pieline', 'opentable'] },
      { n: 'Postman', icon: 'postman', used: ['indoqubix'] },
      { n: 'Streamlit', icon: 'streamlit', used: ['claimsai', 'data-platform'] },
      { n: 'Vercel / Render', note: 'Deployment for earlier web projects.' }
    ]}
  ],

  claimsChart: [
    { name: 'Rules', acc: 55.1, loss: 1205 },
    { name: 'XGBoost routing', acc: 86.3, loss: 443 },
    { name: 'Text-only', acc: 85.0, loss: 634 },
    { name: 'Structured hybrid', acc: 87.5, loss: 286 },
    { name: 'Narrative hybrid', acc: 89.9, loss: 262, best: true }
  ]
};
