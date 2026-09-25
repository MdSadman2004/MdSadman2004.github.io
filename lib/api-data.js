'use strict';

// Shared JSON payloads used by both the Express server (server.js) and the
// Netlify function (netlify/functions/api.js) so the /api/* endpoints stay
// consistent across deployment targets.

const PAGE_DATA = {
  'approach': {
    title: "Our Approach",
    subtitle: "Gentle integration. Organic growth.",
    description: "We don't believe in disruptive, breaking overhauls. We respect your legacy systems, data structures, and history, weaving cutting-edge RAG and LangGraph systems directly into your existing ecosystem.",
    pillars: [
      {
        title: "Legacy Preservation",
        desc: "We analyze and interface with your current tools rather than demanding a migration. Your data stays secure, on-premise or in your cloud."
      },
      {
        title: "Organic Connectivity",
        desc: "Using multi-agent architectures, we build systems that communicate across departmental silos, turning isolated databases into a unified clearing of knowledge."
      },
      {
        title: "Bespoke Orchestration",
        desc: "Every industry is unique. Our solutions are custom-engineered, mapping directly to legal archives, real estate transactional histories, or manufacturing workflows."
      }
    ]
  },
  'how-it-works': {
    title: "How It Works",
    subtitle: "A clear, guided transition to AI empowerment.",
    steps: [
      {
        num: "01",
        title: "The Audit & Mapping",
        desc: "We sit down with your teams to map out the current flow of data, identifying manual bottlenecks, hidden archives, and fragmented workflows."
      },
      {
        num: "02",
        title: "The Clearing Integration",
        desc: "We build secure RAG channels and design custom LangGraph agent flows. The system is layered on top of your existing tools without down-time."
      },
      {
        num: "03",
        title: "Continuous Nourishment",
        desc: "We monitor agent paths, optimize prompt routing, and train your staff. The network matures, expanding its efficiency week-over-week."
      }
    ]
  },
  'ecosystem': {
    title: "The Ecosystem",
    subtitle: "Unified intelligence across industries.",
    integrations: [
      {
        industry: "Legal Operations",
        useCase: "Contract analysis, automated document assembly, precedent search, and compliance audits using deep semantic search."
      },
      {
        industry: "Real Estate & Land",
        useCase: "Deed history mapping, title search, lease abstraction, and zoning analysis powered by LangGraph agency."
      },
      {
        industry: "Legacy Enterprise",
        useCase: "Cross-departmental knowledge retrieval, CRM intelligence, automated customer intake, and report generation."
      }
    ]
  },
  'connect': {
    title: "Connect with Glade",
    subtitle: "Let's find your clearing.",
    info: "Schedule a session with our design engineering team. We'll map your system architecture and design a custom AI integration strategy."
  },
  'projects': {
    title: "Our Projects",
    subtitle: "Sophisticated architectures. Open-source foundations.",
    description: "Discover our production-ready AI templates, multi-agent frameworks, and deep integration models designed for high-performance B2B operations.",
    projects: [
      {
        id: "aegis",
        tag: "Legal Search",
        title: "Aegis Intelligence",
        desc: "Advanced RAG pipeline designed for multi-state litigations. Accelerates case law analysis by surfacing semantic insights from millions of legacy precedents.",
        githubUrl: "#"
      },
      {
        id: "terratrace",
        tag: "Real Estate & Title",
        title: "TerraTrace Agent",
        desc: "LangGraph-driven orchestrator that processes historical deeds, abstracts complex covenants, and maps chain of titles with autonomous accuracy.",
        githubUrl: "#"
      },
      {
        id: "vanguard",
        tag: "Enterprise Compliance",
        title: "Vanguard Audit System",
        desc: "Automated corporate footprint and ESG reporting engine. Scrapes, structure, and parses scattered ERP data into high-grade regulatory reports.",
        githubUrl: "#"
      },
      {
        id: "apex",
        tag: "Client Onboarding",
        title: "Apex Intake Flow",
        desc: "Conversational intake agent utilizing local LLMs. Captures unstructured customer requests, resolves intent, and updates CRM platforms automatically.",
        githubUrl: "#"
      }
    ]
  }
};

function getPageData(pageKey) {
  return PAGE_DATA[pageKey] || null;
}

function submitConnect() {
  return {
    status: 'success',
    message: 'Thank you. We will reach out shortly to bring clarity to your ecosystem.'
  };
}

module.exports = { PAGE_DATA, getPageData, submitConnect };