import projectFounderOS from "@/assets/project-founderos-new.png";
import projectAIAnalyst from "@/assets/project-aianalyst-new.png";
import projectInstamart from "@/assets/project-instamart-new.png";
import projectZomatoCase from "@/assets/project-zomato-aov.png";
import projectRiskModeling from "@/assets/project-riskmodeling.jpg";
import projectInhaus from "@/assets/inhaus-screenshot.png";
import projectZupper from "@/assets/live-zupper.jpg";
import projectZupperPhones from "@/assets/zupper-phones.jpg";
import projectVantage from "@/assets/project-vantage.png";
import projectPorter from "@/assets/project-porter-new.png";
import projectZomatoReviews from "@/assets/project-zomatocase-reviews.png";



// Capstone & Graphic Design assets
import projectFinancialMarket from "@/assets/iit-financial-market.jpg";
import projectSimpleThreads from "@/assets/iit-simple-threads.jpg";
import projectGoldPrediction from "@/assets/colab-gold-prediction.jpg";
import projectTitanicPrediction from "@/assets/colab-titanic-prediction.jpg";
import projectStreamverseEtl from "@/assets/colab-streamverse-etl.jpg";
import projectTennis from "@/assets/project-tennis.png";
import projectRetro from "@/assets/project-retro.png";
import projectSoulstretch from "@/assets/project-soulstretch.png";
import projectVelvoria from "@/assets/project-velvoria.png";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  role: string;
  client: string;
  timeline: string;
  figmaLink?: string;
  githubLink?: string;
  accent: string;
  bg: string;
  video?: string;
  image: string;
  writeup: string[];
  problemStatement: string;
  solutionStatement: string;
  screens: {
    src: string;
    title: string;
    problem: string;
    rationale: string;
  }[];
  processImage?: string;
  processBlurb?: string;
  // New optional metadata fields
  duration?: string;
  type?: string;
  industry?: string;
  skillsUsed?: string[];
  links?: {
    website?: string;
    github?: string;
    pdf?: string;
    docs?: string;
    presentation?: string;
  };
}

export const projectDetails: Record<string, ProjectDetail> = {
  // --- ADITYA'S PERSONAL RESUME PROJECTS ---
  founderos: {
    id: "founderos",
    title: "FounderOS",
    subtitle: "AI Operations Platform",
    tagline: "An AI-powered operating system that automated business reporting, unified operational data, and transformed fragmented metrics into growth insights.",
    role: "Product Developer",
    client: "INHAUS Coffee (Internal)",
    timeline: "2026",
    accent: "var(--brand)",
    bg: "#0a0a0a",
    image: projectFounderOS,
    writeup: [
      "As INHAUS Coffee scaled from idea to market, operational data became heavily scattered across Shopify orders, Razorpay transactions, shipment queues, and manual marketing logs. Answering basic questions like 'Which customer cohort has the highest lifetime value?' or 'Why did today's margins shrink by 3%?' required hours of manual data preparation and calculations.",
      "To eliminate this overhead, I designed and developed FounderOS—an internal AI-driven startup cockpit. The system installs serverless webhook listeners that capture events from Shopify, Razorpay, and Shiprocket in real time, normalizing disparate data structures into a unified PostgreSQL database. Python background scripts run daily to compute 28+ growth metrics, including Net Margins, Cohort Retention (M1-M6), and Customer Acquisition Cost (CAC) margins.",
      "Additionally, the platform integrates an AI Insights engine that interfaces with OpenAI's API. It scans the structured metrics tables daily, performs anomaly detection (e.g., flagging a sudden drop in repeat orders or a spike in payment failures), and automatically broadcasts detailed, actionable PDF reports to the team's Slack channel. This system cut manual reporting efforts by 90% and shortened decision-making cycles from weeks to minutes."
    ],
    problemStatement: "Early-stage startups often operate with fragmented data spread across multiple tools. Sales live inside Shopify, payments inside Razorpay, marketing metrics inside Meta Ads, and inventory inside spreadsheets. Founders spend valuable time collecting information instead of acting on it.",
    solutionStatement: "FounderOS automatically collects data from each platform, standardizes business information, and runs 6 AI-powered workflows to calculate 28+ business KPIs and surface anomalies without manual intervention.",
    screens: [
      {
        src: "",
        title: "Operations Dashboard",
        problem: "Business information was scattered across multiple tools, making it difficult to understand overall company performance.",
        rationale: "A centralized dashboard displayed key operational metrics—including revenue, orders, customer behavior, payment status, and fulfillment—in a single view, allowing founders to assess business health within minutes."
      },
      {
        src: "",
        title: "AI Insights Console",
        problem: "Dashboards show numbers but rarely explain why they changed or what actions should be taken.",
        rationale: "An AI-powered insights panel analyzed operational metrics, highlighted unusual patterns, summarized business performance, and suggested areas requiring attention, helping founders move from reporting to decision-making."
      }
    ]
  },
  aianalyst: {
    id: "aianalyst",
    title: "AI Analyst",
    subtitle: "AI Product",
    tagline: "Built an AI-powered customer intelligence platform that transformed thousands of unstructured feedback records into actionable product insights using RAG, embeddings, and semantic search.",
    role: "AI Engineer",
    client: "IIT Jodhpur Project",
    timeline: "2026",
    accent: "var(--brand)",
    bg: "#ffffff",
    image: projectAIAnalyst,
    writeup: [
      "Product managers at scaling companies are flooded with unstructured feedback from App Store reviews, support tickets, survey forms, and sales calls. Manually sorting through thousands of text rows to prioritize features is slow, inconsistent, and highly error-prone, meaning crucial customer friction points are often left unresolved.",
      "To address this, I built AI Analyst, an intelligent customer feedback engine. The pipeline processes raw text files, utilizing OpenAI's 'text-embedding-3-small' model to convert unstructured feedback comments into 1536-dimensional vector representations. These vectors are indexed in a Pinecone database, enabling fast cosine similarity searches. Through this semantic index, the system automatically groups related feedback notes (e.g., separating checkout bugs from feature requests).",
      "Using Retrieval-Augmented Generation (RAG), the app constructs contextual prompts containing the top clustered user complaints. An LLM agent parses these prompts to automatically draft highly structured Product Requirement Documents (PRDs), outlining the user friction, design changes, and engineering milestones. This allows product teams to map raw reviews directly to actionable development specs in seconds."
    ],
    problemStatement: "Product teams receive massive amounts of qualitative feedback every day, but manually reviewing thousands of responses is time-consuming, inconsistent, and difficult to scale. As a result, important customer pain points often remain hidden, delaying product improvements.",
    solutionStatement: "An automated semantic processing system utilizing embeddings, vector databases, and Retrieval-Augmented Generation (RAG) to instantly cluster related feedback, generate prioritized feature suggestions, and compile structured PRDs.",
    screens: [
      {
        src: "",
        title: "Feedback Explorer",
        problem: "Product teams struggle to search thousands of customer conversations and identify recurring issues.",
        rationale: "The explorer provides semantic search over feedback records, allowing users to ask natural-language questions, retrieve similar conversations, and quickly understand customer pain points without manually reading every response."
      },
      {
        src: "",
        title: "AI Product Insights Dashboard",
        problem: "Raw feedback doesn't directly translate into product decisions.",
        rationale: "The dashboard automatically clusters related issues, prioritizes customer pain points, generates PRDs, and visualizes product trends across six dashboards, enabling faster roadmap planning."
      }
    ]
  },
  instamart: {
    id: "instamart",
    title: "Swiggy Instamart Case Study",
    subtitle: "UX Research & AOV Optimization",
    tagline: "Product strategy and user research proposing features to boost Average Order Value",
    role: "Solo Researcher",
    client: "Product Strategy Cohort",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#ffffff",
    image: projectInstamart,
    writeup: [
      "In the highly competitive quick-commerce sector, increasing the Average Order Value (AOV) is critical for unit economic profitability. Instamart users generally buy items in a hurry, checking out the moment they reach the minimum free delivery threshold. They rarely browse or explore additional categories, leaving high-margin products unsold.",
      "I conducted a UX audit and qualitative research study with 40 active users to map behavioral barriers during checkout. The research revealed that standard upselling recommendations feel intrusive and disconnected, leading to high dismissal rates. To solve this, I designed a 'Smart Checkout Drawer' system that analyzes cart contents in real time.",
      "The system suggests contextual add-ons grouped by recipes or immediate use cases (e.g., recommending limes, mint leaves, and club soda when a user adds white rum to their cart). By targeting micro-moments of high intent and aligning recommendations with user recipes, this UX flow is projected to drive a 10-15% lift in average basket size without introducing checkout friction."
    ],
    problemStatement: "Quick-commerce users add items in a hurry, checking out the moment they hit the minimum delivery threshold without exploring other items.",
    solutionStatement: "In-context checkout drawers showing smart recipe bundles and impulse buy items directly matching cart ingredients.",
    screens: [
      {
        src: "",
        title: "Recipe Cart Drawer",
        problem: "Generic upsell widgets show products users have no immediate need for, leading to high dismiss rates.",
        rationale: "Grouped items by recipe (e.g. adding lemon/sugar when tea is in the cart) to increase cross-sell conversion rates by relevance."
      }
    ]
  },
  "zomatocase": {
    id: "zomatocase",
    title: "Zomato User Cohort Analysis",
    subtitle: "Customer Segmentation",
    tagline: "UX research and segmentation study targeting high-frequency monthly users",
    role: "User Researcher",
    client: "UX Cohort Project",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#ffffff",
    image: projectZomatoCase,
    writeup: [
      "Food delivery platforms spend millions on user acquisition, only to experience high customer churn rates after the first few orders. Generic discount codes fail to drive long-term habit formation because they do not account for variations in user preferences, budgets, or ordering patterns.",
      "This project focuses on segmenting Zomato's active user base into behavioral cohorts. I analyzed survey feedback from 48 active customers and conducted 4 structured interviews to isolate customer retention triggers. Users were grouped into cohorts based on order frequency, budget ranges, and eating habits (e.g., busy office lunch orders vs late-night weekend indulgence).",
      "The analysis revealed that user retention peaks when personalized rewards are tied to specific cuisine categories or restaurants. By shifting from blanket discount codes to dynamically generated loyalty cohorts, Zomato can optimize its marketing spend, target high-frequency users, and increase customer lifetime value (LTV)."
    ],
    problemStatement: "Food delivery apps experience a high customer churn rate after the first 3 orders due to generic promotional campaigns.",
    solutionStatement: "A behavioral loyalty cohort model that maps rewards dynamically based on past food preferences instead of flat discounts.",
    screens: [
      {
        src: "",
        title: "Cohort Map View",
        problem: "Broad segmentations ignore fine-grain variations in user ordering behavior (e.g. night-owls vs office lunches).",
        rationale: "Built user profiles grouping ordering hours, budget size, and review history to automate persona-specific discounts."
      }
    ]
  },
  "zomato-text-reviews": {
    id: "zomato-text-reviews",
    title: "Zomato: Increasing Text Reviews",
    subtitle: "Product PRD & NLP Strategy",
    tagline: "A product requirement framework proposing speech-to-text reviews and NLU quality control loops to increase text reviews in the food delivery vertical.",
    role: "Product Manager",
    client: "Ratings & Reviews (Food Delivery)",
    timeline: "2024",
    accent: "var(--brand)",
    bg: "#ffffff",
    image: projectZomatoReviews,
    writeup: [
      "While a high percentage of food delivery users rate their meals on a star rating scale, leaving detailed text reviews is a major bottleneck. Writing text reviews is perceived as time-consuming, repetitive, and low-value by most customers, depriving Zomato of qualitative data needed to evaluate restaurant partners and improve recommendation systems.",
      "As Product Manager, I designed a 'Lean Review' flow centered around an ASR (Automatic Speech Recognition) voice-to-text interface. Users can press a mic button on the post-order review sheet and speak their feedback. The app automatically transcribes their review in under 30 seconds. To further reduce cognitive load, the page dynamically populates review hashtags (such as portion size, taste, and packaging) based on the overall rating chosen.",
      "The pipeline routes all transcriptions through an online ASR system as a backup for low-performance devices, followed by a Natural Language Understanding (NLU) filter to eliminate spam or abusive language. Financial modeling of this flow estimates a 5-fold increase in text reviews, translating to a projected annual lift of $0.836M in Gross Order Value (GOV) through improved checkout conversion rates."
    ],
    problemStatement: "63% of active food delivery users rate their orders, but most omit text reviews because writing them feels time-consuming and lacks immediate value.",
    solutionStatement: "A voice-to-text 'Lean Review' flow enabling users to record reviews under 30 seconds, coupled with dynamic item hashtags and offline/online speech fallback architectures.",
    screens: [
      {
        src: "",
        title: "Speech-to-Text Voice Input",
        problem: "Manual typing is energy-intensive and discourages casual food reviewers from providing detailed feedback.",
        rationale: "Implemented a mic-to-text recorder (offline ASR with online backup) that automatically transcribes spoken reviews, capping recording time at 120 seconds with an automatic 5-second silence threshold."
      },
      {
        src: "",
        title: "Hashtag-Based Ratings",
        problem: "Review forms require too many decisions, causing high drop-off rates.",
        rationale: "Added automatic portion, taste, and packaging hashtag suggestions based on overall rating, enabling 1-tap tag selection."
      },
      {
        src: "",
        title: "Automated NLU Quality Control",
        problem: "Spoken feedback can contain ambient noise, pronunciation errors, or prohibited content.",
        rationale: "Routed transcription outputs through a Natural Language Understanding (NLU) pipeline to automatically strip out abusive text, check schema validation, and calculate recency-weighted rating scores."
      }
    ],
    links: {
      pdf: "/assets/zomato-increasing-text-reviews.pdf"
    }
  },
  medagent: {
    id: "medagent",
    title: "MedAgent AI",
    subtitle: "Enterprise AI",
    tagline: "Designed a proof-first enterprise sales strategy for an AI patient engagement platform, reducing hospital adoption risk through 30-day outcome-based pilots.",
    role: "Product & Sales Lead",
    client: "Healthcare Partner",
    timeline: "2026",
    accent: "var(--brand)",
    bg: "#0B2545",
    image: projectAIAnalyst,
    writeup: [
      "Enterprise AI products in regulated spaces like healthcare often face long sales cycles and high resistance from buyers. Hospitals are cautious about adopting new AI systems due to data privacy concerns, integration risks, and unclear financial ROI, delaying technology upgrades.",
      "To address this, I developed a GTM sales playbook for MedAgent AI, an AI-powered patient engagement platform. The strategy bypasses lengthy procurement loops by offering hospitals a low-risk, 30-day read-only pilot. During this proof-of-concept (POC) phase, the platform processes anonymous patient logs to automatically track appointment reminders, follow-ups, and customer satisfaction metrics.",
      "By connecting pricing directly to measurable pilot outcomes (such as reducing appointment no-show rates by 25%), the framework shifts the sales discussion from theoretical benefits to proven ROI. This playbook helps enterprise sales teams overcome compliance concerns and accelerate hospital contract approvals."
    ],
    problemStatement: "Mid-sized hospital chains continue to rely on large call-center teams for patient acquisition, reminders, and follow-ups. Executives hesitate to adopt AI due to HIPAA compliance fears, integration complexity, and unclear business ROI.",
    solutionStatement: "A proof-first commercial framework featuring read-only integrations for a 30-day POC pilot, outcome-linked pricing schemas, and a targeted objection-handling protocol.",
    screens: [
      {
        src: "",
        title: "Enterprise Discovery Dashboard",
        problem: "Enterprise sales teams struggle to understand complex hospital buying structures and identify decision-makers early in the sales cycle.",
        rationale: "The dashboard maps stakeholders, operational KPIs, current workflows, and business pain points, helping sales teams qualify opportunities and tailor proposals based on each hospital's priorities."
      },
      {
        src: "",
        title: "POC Success Console",
        problem: "Enterprise buyers need objective evidence before committing to long-term AI deployments.",
        rationale: "The console tracks pilot performance against predefined KPIs—including patient follow-up rates, operational efficiency, and AI-assisted interactions—providing executives with a go/no-go framework for enterprise expansion."
      }
    ]
  },
  vantage: {
    id: "vantage",
    title: "Vantage AI",
    subtitle: "Enterprise AI GTM",
    tagline: "Designed a proof-first go-to-market strategy that reduced manufacturing AI adoption risk by aligning product positioning and pilot metrics around business ROI.",
    role: "Growth Lead",
    client: "Vantage AI",
    timeline: "2025",
    figmaLink: "https://thevantageai.com",
    accent: "var(--brand)",
    bg: "#ffffff",
    image: projectVantage,
    writeup: [
      "Industrial manufacturing companies are historically slow to adopt AI technology due to legacy hardware constraints, high integration costs, and the risk of disrupting assembly lines. GTM campaigns that focus solely on machine learning features fail to connect with plant managers concerned about production downtime.",
      "I developed a GTM strategy for Vantage AI, an industrial analytics platform. The approach structures the sales process around a low-cost, 14-day data validation phase. By installing non-invasive external sensors on critical machinery, sales teams can demonstrate data collection capabilities without touching legacy internal software.",
      "The playbook outlines a 90-day pilot program tied to concrete factory metrics (such as reducing unscheduled machine downtime by 15%). By presenting a clear path to cost savings and addressing operational risks early, this GTM framework helps industrial enterprise sales teams close deals faster."
    ],
    problemStatement: "Manufacturing companies struggle to adopt AI due to legacy hardware constraints, high implementation costs, and resistance to changing manual inspection workflows.",
    solutionStatement: "A GTM playbook installing low-cost vibration sensors to validate data streams in under 14 days, followed by a 90-day pilot framework mapping to operational costs savings.",
    screens: [
      {
        src: "",
        title: "Enterprise GTM Dashboard",
        problem: "Sales teams struggle to prioritize high-fit enterprise accounts and align messaging with different buyer personas.",
        rationale: "The dashboard organizes target accounts by ICP, maps enterprise pain points, and recommends positioning strategies based on industry-specific adoption challenges."
      },
      {
        src: "",
        title: "Pilot Performance Console",
        problem: "Enterprise buyers require measurable evidence before approving organization-wide AI deployments.",
        rationale: "The console tracks pilot KPIs, implementation milestones, ROI indicators, and adoption metrics, providing executives with objective evidence for scaling AI initiatives."
      }
    ]
  },
  greenscan: {
    id: "greenscan",
    title: "AI GreenScan",
    subtitle: "Computer Vision Product",
    tagline: "First-place product strategy and AI recommendation engine classifying 20+ materials for sustainable disposal",
    role: "Product Lead",
    client: "Hackathon Entry",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#064E3B",
    image: projectFounderOS,
    writeup: [
      "Consumers often struggle to recycle properly due to confusing packaging symbols and varying local rules, leading to high contamination rates at processing facilities. This project details the product strategy for a mobile camera app designed to identify and categorize packaging materials using computer vision.",
      "As Product Lead, I designed the product roadmap and user experience for the mobile app. The technology uses a custom-trained ResNet model to classify 20+ material categories (such as PET plastic, cardboard, and aluminum) from a smartphone photo.",
      "The app maps the detected material to local waste management guidelines, presenting users with clear, color-coded recycling steps. This project won 1st place at a university hackathon for its focus on usability, technical feasibility, and real-world environmental impact."
    ],
    problemStatement: "Consumers do not know which packaging materials are recyclable, leading to contaminated waste batches and recycling center rejections.",
    solutionStatement: "A mobile camera app that classifies materials via computer vision and displays step-by-step local disposal guidelines.",
    screens: [
      {
        src: "",
        title: "Scan & Direct View",
        problem: "Users dismiss recycling tips that are too wordy or detail complex local laws.",
        rationale: "Rendered a simple color-coded rating (Green/Yellow/Red) with an absolute location icon showing the nearest bin."
      }
    ]
  },
  porter: {
    id: "porter",
    title: "Porter Case Study",
    subtitle: "Marketplace Operations",
    tagline: "ML-driven demand positioning and retention strategy optimizing driver earnings on a 38K marketplace",
    role: "Product Operations Intern",
    client: "Porter Cohort",
    timeline: "2024",
    accent: "var(--brand)",
    bg: "#fec42e",
    image: projectPorter,
    writeup: [
      "On-demand logistics platforms face high driver churn rates when supply and demand are mismatched, leaving drivers idle and customers waiting. This study focuses on optimizing driver positioning in a marketplace of 38,000 active delivery partners.",
      "I designed a machine learning-based driver positioning model that analyzes historical transaction data to predict high-demand areas. The system nudges idle drivers toward these demand hot spots in real time using visual heat maps on the driver mobile app.",
      "To encourage driver adoption, the UI features dynamic estimated earnings tags (e.g., '+₹120/hr') on the suggested zones. Projections show this model can increase driver acceptance rates from 66% to 88%, boosting platform efficiency and improving driver retention."
    ],
    problemStatement: "Gig drivers experience dry spells with zero orders, leading to high platform churn rates and loss of marketplace liquidity.",
    solutionStatement: "An ML positioning system that nudges idle drivers toward predicted demand clusters using real-time heat maps.",
    screens: [
      {
        src: "",
        title: "Driver Demand Heat Map",
        problem: "Drivers ignore instructions that tell them where to drive without explaining potential income benefits.",
        rationale: "Added an estimated hourly earnings tag (e.g. +₹120/hr) on top of demand clusters, aligning driver incentives with hot spots."
      }
    ]
  },
  hackathon25: {
    id: "hackathon25",
    title: "AI Wedding Planner",
    subtitle: "Rapid AI Prototyping",
    tagline: "Intelligent venue-matching platform and recommendation engine designed and shipped in 24 hours",
    role: "Solo Developer",
    client: "MESA Hackathon '25",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#4A1D96",
    image: projectRiskModeling,
    writeup: [
      "Couples planning weddings spend weeks contacting vendors, comparing prices, and checking calendar availability, causing significant decision fatigue. During the 24-hour MESA Hackathon, I designed and built an AI-powered wedding planning platform.",
      "The platform features a chat-first interface that gathers preferences (such as budget, location, and style) from couples. The backend runs a recommendation engine that matches couples with vendor profiles from a database of 100+ local providers.",
      "By integrating calendar APIs, the system allows couples to check real-time availability and book appointments directly from the chat interface, transforming a stressful process into an automated, single-platform experience."
    ],
    problemStatement: "Couples spend months calling vendors and comparing quotes, leading to decision fatigue and missed booking slots.",
    solutionStatement: "A chat-first planner that gathers wedding profiles and directly books available timeslots with pre-vetted vendors.",
    screens: [
      {
        src: "",
        title: "Matcher Console",
        problem: "Traditional listings require couples to fill out the same inquiry form 50+ times.",
        rationale: "Designed a unified profile questionnaire that auto-submits details to selected vendor APIs in one tap."
      }
    ]
  },
  inhaus: {
    id: "inhaus",
    title: "INHAUS Coffee",
    subtitle: "D2C Consumer Brand",
    tagline: "Co-founded a premium coffee concentrate brand, leading GTM, growth funnel automation, and product strategy from 0 to 1.",
    role: "Co-Founder",
    client: "INHAUS Coffee (Self-Started)",
    timeline: "2026 - Present",
    figmaLink: "https://inhauscoffee.com",
    accent: "var(--brand)",
    bg: "#ffffff",
    image: projectInhaus,
    writeup: [
      "INHAUS Coffee was founded to bridge the gap between instant coffee and café-quality drinks. While brewing specialty coffee at home is expensive and time-consuming, cafe delivery is slow and costly. We developed a premium liquid coffee concentrate that prepares in under a minute without machinery.",
      "As Co-founder, I led the brand's product strategy, go-to-market (GTM) execution, and growth pipelines. I built our ecommerce store on Shopify, setting up customer acquisition funnels, automated subscription management, and email lifecycle flows.",
      "By automating post-purchase email sequences based on user cohort behavior, we converted 32% of first-time trial customers into active monthly subscribers. The brand successfully scaled from a kitchen prototype to a commercial product, proving the market demand for convenient specialty coffee."
    ],
    problemStatement: "The specialty coffee market in India was growing rapidly, but premium coffee remained inaccessible for many consumers due to expensive equipment, long preparation times, and inconsistent quality. Existing alternatives either prioritized convenience or taste—but rarely both.",
    solutionStatement: "We created a premium liquid coffee concentrate that prepares in under a minute without machines, coupled with automated email campaigns converting 32% of trials into active subscribers.",
    screens: [
      {
        src: "",
        title: "Product Landing Page",
        problem: "Customers were unfamiliar with coffee concentrate and needed to understand the product before purchasing.",
        rationale: "The landing page prioritized education through clear product benefits, preparation steps, FAQs, testimonials, and simple purchase flows, reducing hesitation for first-time buyers."
      },
      {
        src: "",
        title: "Growth Dashboard",
        problem: "Understanding which acquisition channels generated the highest-quality customers was difficult without centralized reporting.",
        rationale: "A growth dashboard tracked channel performance, customer acquisition costs, repeat purchases, conversion rates, and campaign performance, enabling rapid experimentation and better marketing decisions."
      }
    ]
  },
  zupper: {
    id: "zupper",
    title: "Zupper",
    subtitle: "B2B Multi-Commerce App",
    tagline: "Designed end-to-end flows for onboarding, auctions, storefronts, and financing for India's MSME retailers.",
    role: "Founding UI/UX Designer",
    client: "Zupper Inc",
    figmaLink: "https://play.google.com/store/apps/details?id=com.zupper.b2b&pcampaignid=web_share",
    timeline: "Sept – Nov 2024",
    accent: "var(--brand)",
    bg: "#101D2B",
    image: projectZupperPhones,
    writeup: [
      "Indian MSME shop owners face operational barriers when sourcing inventory, relying on manual brokers and experiencing a lack of transparent bulk pricing. During my time as founding designer at Zupper, I designed the mobile application's UX framework.",
      "I delivered 45+ high-fidelity screens covering role-based onboarding, a bulk auction system, custom digital storefronts (Store+), and BNPL (Buy Now Pay Later) credit limit flows. To design for non-tech-savvy users, I researched navigation models on popular consumer super-apps.",
      "The resulting interface simplifies bulk sourcing, allowing shop owners to bid in inventory auctions and view clear quantity discount ladders. This design system was compiled into developer handoffs, establishing Zupper's product design direction for lifestyle supply chains."
    ],
    problemStatement: "B2B retailers and MSMEs in India face friction when sourcing lifestyle products due to complex bulk pricing structures, lack of transparent credit availability (BNPL), and fragmented order management channels.",
    solutionStatement: "Designed a unified mobile marketplace that integrates bulk auction bidding, dynamic Buy Now Pay Later (BNPL) credit limits, and simplified onboarding tailored for non-tech-savvy shop owners.",
    screens: [
      {
        src: projectZupperPhones,
        title: "B2B Marketplace & Storefront",
        problem: "Traditional wholesale sourcing requires retailers to navigate confusing spreadsheets or deal with brokers, with zero visibility into customized bulk discount tiers.",
        rationale: "Created a clean, card-based interface displaying live auctions, dynamic volume discount ladders (Store+), and personalized credit limit badges (BNPL) to make sourcing as seamless as consumer e-commerce."
      }
    ],
    duration: "3 Months",
    type: "Mobile Design",
    industry: "B2B e-commerce",
    skillsUsed: ["UI/UX Design", "Figma", "User Flows", "B2B Sourcing", "Competitive Analysis"],
    links: {
      website: "https://play.google.com/store/apps/details?id=com.zupper.b2b&pcampaignid=web_share"
    }
  },


  // --- 5 CAPSTONE PROJECTS ---
  "financial-market": {
    id: "financial-market",
    title: "Financial Market Dynamics",
    subtitle: "IIT Jodhpur Capstone",
    tagline: "A comprehensive capstone project analyzing how market shocks affect major Indian financial institutions using Linear Algebra and Python",
    role: "Data Analyst / Researcher",
    client: "FinScoop (Fictional Case Study)",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#1C0A0A",
    image: projectFinancialMarket,
    writeup: [
      "In interconnected financial systems, the collapse of a single bank can trigger cascading defaults across partner institutions through complex debt linkages. This capstone project models the transmission of liquidity shocks among four major Indian banks (SBI, ICICI, HDFC, and Axis Bank).",
      "Using Python and Linear Algebra libraries (NumPy, SciPy), I constructed a 4x4 matrix representing interbank loan connections. The model computes eigenvalues and eigenvectors to determine the system's structural stability boundary under varying external shocks.",
      "The simulation identifies critical exposure nodes that are highly sensitive to market shocks, demonstrating how network structure contributes to systemic risk. This project offers a quantitative framework for regulators to assess bank stability and design preventive market policies."
    ],
    problemStatement: "Regulators cannot easily predict which bank defaults will trigger a cascading systemic failure through complex lending linkages.",
    solutionStatement: "A Python matrix simulator that applies asset shocks to nodes and computes default propagation waves via eigenvalue bounds.",
    screens: [
      {
        src: "",
        title: "Cascading Deficit Graph",
        problem: "Static tables do not illustrate the propagation waves of financial stress over time.",
        rationale: "Designed a node link graph displaying bank size, exposure vector arrows, and default state highlights under simulated crises."
      }
    ],
    links: {
      pdf: "/assets/iit-financial-market.pdf"
    }
  },
  "simple-threads": {
    id: "simple-threads",
    title: "Simple Threads Business Analysis",
    subtitle: "IIT Jodhpur Capstone",
    tagline: "Stitching Success Together — A comprehensive data analytics report for a boutique retail fashion company",
    role: "Data Analyst",
    client: "Simple Threads Retail",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#0A1F2C",
    image: projectSimpleThreads,
    writeup: [
      "Retail brands struggle to measure the financial returns of promotional marketing campaigns when customer purchases, product databases, and email logs are stored in separate silos. This capstone project focuses on building a unified data warehouse for a boutique apparel retailer.",
      "I structured and normalized datasets spanning customer profiles, transactional orders, inventory levels, and discount campaigns. Using Python (Pandas) and SQL, I built an analytics pipeline that tracks conversion metrics across different demographics and product lines.",
      "The analysis revealed that high discount rates on slow-moving inventory did not drive long-term customer acquisition, leading to margin loss. The final business report details customer churn triggers and suggests changes in campaign targeting to improve marketing ROI."
    ],
    problemStatement: "Specialty retailers struggle to measure discount campaign effectiveness and customer churn triggers across separate databases.",
    solutionStatement: "A unified analytics funnel mapping purchase history directly against discount email campaign logs to calculate actual ROI per campaign.",
    screens: [
      {
        src: "",
        title: "Campaign Effectiveness Dashboard",
        problem: "Sales pipelines lack granular connection to customer acquisition costs and email discount click rates.",
        rationale: "Engineered automatic campaign metrics tracking linking discount values directly with buyer demographics."
      }
    ],
    links: {
      pdf: "/assets/iit-simple-threads.pdf"
    }
  },
  "gold-prediction": {
    id: "gold-prediction",
    title: "Gold Price Prediction Model",
    subtitle: "ML Capstone",
    tagline: "Linear Regression Machine Learning Model predicting Gold Prices with 99.97% accuracy",
    role: "ML Engineer",
    client: "Academics",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#0F1626",
    image: projectGoldPrediction,
    writeup: [
      "Gold prices are highly volatile, influenced by complex global economic factors such as inflation rates, currency valuations, oil prices, and stock index movements. This machine learning project models historical gold price fluctuations to establish predictive baselines.",
      "I compiled a 10-year financial dataset (2013-2023) containing key macroeconomic indicators. Using Python and Scikit-learn, I built a Linear Regression model, applying Ridge and Lasso regularization techniques to prevent overfitting on outlier data points.",
      "The final model achieved a 99.97% R² score on the test set, with a Mean Absolute Percentage Error (MAPE) of 0.22%. The project illustrates the relative feature importance of inflation indicators and silver prices in forecasting daily gold closing values."
    ],
    problemStatement: "Financial traders face high asset volatility and need predictive baselines to de-risk short-term trades.",
    solutionStatement: "A Linear Regression pipeline scaling historical indicators to forecast gold closing values with low error boundaries.",
    screens: [
      {
        src: "",
        title: "Regression Fit Overlay",
        problem: "Non-linear market shocks cause standard linear models to overfit on outlier data points.",
        rationale: "Implemented L1/L2 regularization loops (Ridge/Lasso) to balance feature weights and eliminate noisy price signals."
      }
    ],
    links: {
      website: "https://colab.research.google.com/drive/1B2eOqfkNBO9DGHflsSeinS6om39bOeib?usp=sharing"
    }
  },
  "titanic-prediction": {
    id: "titanic-prediction",
    title: "Titanic Survival Prediction",
    subtitle: "ML Classification Capstone",
    tagline: "Logistic Regression classification model predicting passenger survival rates",
    role: "ML Engineer",
    client: "Machine Learning Cohort",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#1A1A24",
    image: projectTitanicPrediction,
    writeup: [
      "This machine learning capstone project builds a classification model to predict passenger survival probabilities using the classic Titanic dataset. The analysis explores how demographics, ticket class, and cabin placement correlated with survival rates.",
      "I engineered a Python preprocessing pipeline to handle missing values, using median age imputation and cabin proximity encoding. Using Scikit-learn, I trained a Logistic Regression model to classify survival states based on passenger attributes.",
      "The model achieved an 80% classification accuracy on the test set. An analysis of feature coefficients confirmed that cabin class, gender, and family size were the strongest predictors of survival probability, illustrating historical evacuation patterns."
    ],
    problemStatement: "Classification models fail when processing missing tabular data records (like missing age values and cabin records).",
    solutionStatement: "Built a structured preprocessing pipeline utilizing median age imputation and categorical label encoders.",
    screens: [
      {
        src: "",
        title: "Feature Correlation Heatmap",
        problem: "Collinear features lead to unstable coefficients in logistic regression fits.",
        rationale: "Used Pearson correlation heatmaps to drop collinear parameters, stabilizing the classification outputs."
      }
    ],
    links: {
      website: "https://colab.research.google.com/drive/1krehfJHOdwGobOE6s_f4HSBKeOA33agm?usp=sharing"
    }
  },
  "streamverse-etl": {
    id: "streamverse-etl",
    title: "Streamverse ETL Pipeline",
    subtitle: "Data Engineering Capstone",
    tagline: "A complete ETL (Extract, Transform, Load) watch history pipeline for streaming platforms",
    role: "Data Engineer",
    client: "Streamverse",
    timeline: "2025",
    accent: "var(--brand)",
    bg: "#120B1C",
    image: projectStreamverseEtl,
    writeup: [
      "Streaming platforms ingest massive amounts of raw user log data daily, containing inconsistent session IDs, formatting errors, and missing geolocation tags. This data engineering project designs a robust pipeline to clean and prepare viewing logs for downstream analytics.",
      "I built a Python ETL pipeline that extracts raw CSV activity logs, normalizes timestamp formatting to UTC, and filters out duplicate records. The transformed data is structured into fact and dimension tables and loaded into a normalized SQL database.",
      "Using the structured database, I generated user engagement metrics that group viewers by country and genre preferences. This pipeline allows marketing teams to automate targeted retention campaigns and identify high-value power users."
    ],
    problemStatement: "Streaming watch history files are ingested with inconsistent schemas, duplicate session keys, and formatting errors.",
    solutionStatement: "A Python-based transformation pipeline utilizing robust deduplication steps and type-casting rules before SQL export.",
    screens: [
      {
        src: "",
        title: "ETL Metrics Report",
        problem: "Inconsistent timestamps cause analytics engines to report incorrect user session lengths.",
        rationale: "Standardized all timezone records to UTC and calculated aggregate session analytics automatically during transformation."
      }
    ],
    links: {
      website: "https://colab.research.google.com/drive/1pL5K7sTBh4DDFfcOyOQqpJGAMY9qx33p?usp=sharing"
    }
  },

  // --- 4 GRAPHIC DESIGN POSTERS ---
  "city-open": {
    id: "city-open",
    title: "City Open Tennis Poster",
    subtitle: "Graphic Design Poster",
    tagline: "Vibrant and high-contrast sports event promotion poster design",
    role: "Graphic Designer",
    client: "Tournament Concept",
    timeline: "2024",
    accent: "var(--brand)",
    bg: "#0B1D33",
    image: projectTennis,
    writeup: [
      "The poster uses bold, clean typography with emphasis on numbers and title placement to capture quick attention.",
      "A single action photograph on a vibrant blue court sets a dynamic mood while keeping the design minimal and striking.",
      "Focuses on visual layout hierarchy, text readability, and sports branding aesthetics."
    ],
    problemStatement: "Sports event posters are often overcrowded with text, diluting the emotional energy of the event.",
    solutionStatement: "A layout pairing high-contrast, oversized type elements with a single focused action shot to lock viewer attention.",
    screens: []
  },
  "retro-rides": {
    id: "retro-rides",
    title: "Retro Rides: Classic Car Show",
    subtitle: "Graphic Design Poster",
    tagline: "Vintage advertising poster inspired by 90s American retro aesthetics",
    role: "Graphic Designer",
    client: "Event Concept",
    timeline: "2024",
    accent: "var(--brand)",
    bg: "#2A251B",
    image: projectRetro,
    writeup: [
      "This is a graphic design poster for Retro Rides, inspired by 90s American retro aesthetics and vintage advertising posters.",
      "The design blends bold typography, classic car illustration, and muted grain textures to capture the nostalgic vibe.",
      "It was created as a visual exploration of retro-inspired branding for event promotion."
    ],
    problemStatement: "Modern vector car posters look sterile and fail to evoke the nostalgic texture of classic automobiles.",
    solutionStatement: "A layout blending muted retro palettes, vintage block-fonts, and a fine grain filter to replicate analog printing.",
    screens: []
  },
  "soulstretch": {
    id: "soulstretch",
    title: "SoulStretch: Yoga & Wellness",
    subtitle: "Social Media Campaign Design",
    tagline: "Mindfulness and wellness Instagram campaign posts",
    role: "Brand & Social Designer",
    client: "SoulStretch Yoga",
    timeline: "2024",
    accent: "var(--brand)",
    bg: "#1E2B24",
    image: projectSoulstretch,
    writeup: [
      "A series of Instagram posts promoting yoga and mindfulness through calming visuals and uplifting text.",
      "Designed with earthy tones and balanced layouts, these posts attract audiences by blending inspiration with wellness-focused design.",
      "Developed specific typography grids and guidelines for carousel posts to maintain brand consistency."
    ],
    problemStatement: "Social media feeds are loud, making quiet wellness content get skipped during fast scrolling.",
    solutionStatement: "Earthy, muted tones and massive negative space layouts that break the feed noise and provide visual rest.",
    screens: []
  },
  "velvoria": {
    id: "velvoria",
    title: "Velvoria Cupcake Delight",
    subtitle: "Food & Beverage Advertising Poster",
    tagline: "Premium food product advertising poster highlighting consumer indulgence",
    role: "Graphic Designer",
    client: "Velvoria Label (Fictional)",
    timeline: "2024",
    accent: "var(--brand)",
    bg: "#331E2A",
    image: projectVelvoria,
    writeup: [
      "A graphic design poster created for a fictional food and beverage brand, showcasing creative advertising for a premium cupcake experience.",
      "Designed to highlight brand identity and appeal to consumer indulgence, it reflects how visual storytelling drives food marketing.",
      "Features soft gradients, pastel color palettes, and playful type treatments."
    ],
    problemStatement: "Commercial bakeries struggle to convey premium, indulgent dessert quality in simple visual sheets.",
    solutionStatement: "A layout blending soft pastel gradients and editorial font weight contrast to elevate the product into an premium luxury.",
    screens: []
  },
  "nurture": {
    id: "nurture",
    title: "Nurture : A Plant Care Companion",
    subtitle: "Plant Wellness App Design",
    tagline: "Simplifying gardening for enthusiasts of all skill levels.",
    role: "UI/UX Designer",
    client: "Personal Project",
    timeline: "5 Weeks",
    accent: "#10b981",
    bg: "#ffffff",
    image: "https://framerusercontent.com/images/0RKQNlUmdUNZZYuxu16clCX0vQ.png",
    writeup: [],
    problemStatement: "",
    solutionStatement: "",
    screens: []
  }
};
