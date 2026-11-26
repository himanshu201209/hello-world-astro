export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  /** Hub card date, e.g. MARCH 2026 */
  date: string;
  /** Detail page date, e.g. March 17, 2026 */
  detailDate: string;
  image: string;
  heroImage: string;
  description?: string;
  authors: BlogAuthor[];
};

/** Blog Hub + Detail data generated from the Webflow Blogs CSV. */
export const blogPosts: BlogPost[] = [
  {
    id: "every-task-checked-against-every-public-benchmark",
    title: "Every task, checked against every public benchmark",
    date: "NOVEMBER 2026",
    detailDate: "November 18, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6afdfa570be8b8900f9a3856_Thumbnail%20(15)%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6afdfa55cac08ebdb210a180_Thumbnail%20(19)%20(1).jpg",
    description: "flow qc checks every task against every public benchmark and every other flow task, across every modality, in seconds.",
    authors: [
      {
        name: "Jacky Guan",
        role: "micro1",
      },
      {
        name: "Rumi Elias Calles",
        role: "Director of Research Eng, micro1",
      }
    ],
  },
  {
    id: "why-ai-agents-need-a-new-factory-floor",
    title: "The capability overhang: why AI agents need a new factory floor",
    date: "NOVEMBER 2026",
    detailDate: "November 14, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6af868415087645ebe5842f1_Thumbnail%20(13)%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6af8684370db92a1acf50d7e_Thumbnail%20(14)%20(1).jpg",
    description: "Why AI agents need redesigned workflows, better delegation, and new productivity measures to close the gap between capability and adoption.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      },
      {
        name: "Liu Zhang",
        role: "Member of Technical Staff, micro1",
      }
    ],
  },
  {
    id: "the-only-bottleneck-should-be-the-model",
    title: "The only bottleneck should be the model",
    date: "NOVEMBER 2026",
    detailDate: "November 10, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae3b2634186aed0440997b3_image%20(7)%20(2).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae3b265ce5e2b28e8369a6c_image%20(7)%20(1).jpg",
    description: "How micro1 reduces the delays and coordination around model attempts while preserving trustworthy evaluation results.",
    authors: [
      {
        name: "Rumi Elias Calles",
        role: "Director of Research Eng, micro1",
      },
      {
        name: "Jacky Guan",
        role: "micro1",
      },
      {
        name: "Nick Waytowich",
        role: "micro1",
      }
    ],
  },
  {
    id: "diligence-is-not-judgment",
    title: "Diligence is not judgment: the contextual restraint gap in legal AI",
    date: "NOVEMBER 2026",
    detailDate: "November 10, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6af429b8b30b92086c057421_Thumbnail.jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6af42a0834a731282ddab9fd_Thumbnail-webp.webp",
    description: "Legal AI can find the issues in a contract. Knowing which ones to fight for, concede or escalate is the gap ContractBench measures.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      },
      {
        name: "Isabel Yishu Yang",
        role: "micro1",
      }
    ],
  },
  {
    id: "where-personal-ai-agents-struggle",
    title: "Permission Isn’t Enough: Where Personal AI Agents Struggle With Judgment",
    date: "OCTOBER 2026",
    detailDate: "October 29, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae3a31b1b1d86898c71c182_Thumbnail%20(5).png",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae3a318fbdfda0f2b3ce648_Thumbnail%20(6).png",
    description: "An exploratory analysis of PersonalAgentBench shows why identity and approval controls still require independent evaluation of agent judgment and verification.",
    authors: [
      {
        name: "Shaudi Mahdavi",
        role: "micro1",
      }
    ],
  },
  {
    id: "retrieval-gap-in-financial-ai",
    title: "Relevant is not authoritative: the retrieval gap in financial AI",
    date: "OCTOBER 2026",
    detailDate: "October 26, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae09dd17c50b0795c5e2d43_Thumbnail%20(10)%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae09dcf119a04eb2a3f88fc_Thumbnail%20(9)%20(1).jpg",
    description: "Finding the right document isn't enough. Discover why financial AI struggles to rank authoritative sources first, and what that means for accuracy, trust, and real-world decisions.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      }
    ],
  },
  {
    id: "flow-qc",
    title: "Teaching the reviewer: Introducing flow QC",
    date: "OCTOBER 2026",
    detailDate: "October 13, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ace90053daea023626c9ded_V5%20(3)%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ace900353f45fa7da29c2ae_V5%20(2)%20(1).jpg",
    description: "flow qc reviews the tasks used to train and evaluate models before an expert has to. Getting a model to find problems was easy. Getting it to stop reporting problems that are not there was the real work.",
    authors: [
      {
        name: "Rumi Elias Calles",
        role: "Director of Research Eng, micro1",
      },
      {
        name: "Tyler Houchin",
        role: "micro1",
      }
    ],
  },
  {
    id: "q3",
    title: "micro1 end of Q3 update",
    date: "OCTOBER 2026",
    detailDate: "October 12, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6acce72a500ae5821813c699_7%20(5)%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6acce281212e3337874d9a09_7%20(4)%20(1).jpg",
    description: "From nearly bankrupt to $1B run rate. the long term is now.",
    authors: [
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "micro1-commits-1b-to-enterprise-data-acquisition",
    title: "micro1 announces commitment to spend $1B on enterprise data acquisition over the next 12 months",
    date: "OCTOBER 2026",
    detailDate: "October 9, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ac8a50b706241158aafbebe_OG%20(14)%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ac8a4cd346974fa55f6bcc6_v1.webp",
    description: "The initiative gives businesses a new revenue stream from their operational intelligence while helping AI models and agents learn to navigate workflows, make decisions, and complete complex tasks.",
    authors: [
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "ai-and-mental-health",
    title: "Changing the narrative: loneliness, access, and what we ask of AI in mental health",
    date: "SEPTEMBER 2026",
    detailDate: "September 30, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6abcec201af4ee87f6ae892a_thumbnail%20(5).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6abcec238526c3122bfce751_thumbnail%20(4).webp",
    description: "Explore how AI can address loneliness and gaps in mental health care while balancing safety, access, clinical expertise, and meaningful human connection.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      }
    ],
  },
  {
    id: "introducing-flow",
    title: "Introducing flow",
    date: "SEPTEMBER 2026",
    detailDate: "September 22, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ab3c4a8aadc41b59ec34759_V5%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ab29c50fa74ab79fe9ed17b_v5%20(11).webp",
    description: "Data generation models that make human expertise even more valuable",
    authors: [
      {
        name: "Rumi Elias Calles",
        role: "Director of Research Eng, micro1",
      },
      {
        name: "Tyler Houchin",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-ai-transition-problem",
    title: "The transition problem: collaboration, diffusion, and what AI is doing to our metrics",
    date: "SEPTEMBER 2026",
    detailDate: "September 10, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6aa3e2bdacd37253e8db05dc_thumbnail_3.webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6aa3e2c3eedd82bda3fe4a65_Thumbnail%203%20(3)%20(1).jpg",
    description: "How AI is reshaping collaboration, labor, productivity, and economic measurement, and why managing the transition matters as adoption accelerates.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      }
    ],
  },
  {
    id: "micro1-supporting-the-doe-genesis",
    title: "micro1 selected to support the DOE Genesis",
    date: "SEPTEMBER 2026",
    detailDate: "September 1, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a970fd4d91edb4dc64f25e5_Thumbnail%203%20(1).png",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a970fd2fb705c0314c2e6b2_Thumbnail%20(1).png",
    description: "micro1 has been selected to contribute to the U.S. Department of Energy’s Genesis Mission, a national effort to accelerate scientific discovery through AI and advanced computing.",
    authors: [
      {
        name: "Hunter Hayden",
        role: "micro1",
      }
    ],
  },
  {
    id: "where-live-music-meets-ai-research",
    title: "Where live music meets AI research",
    date: "AUGUST 2026",
    detailDate: "August 31, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a959dab53d7cb2738e4ed47_Thumbnail%202%20(1).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a959da95118f519aed51a09_Screenshot%202026-08-31%20at%2015.53.45%201%20(1).jpg",
    description: "Discover how micro1’s microsessions brought live music and AI research together through 20+ performances across San Francisco.",
    authors: [
      {
        name: "Beatriz Barros",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-next-chapter-of-ai",
    title: "World models and the next chapter of model training",
    date: "AUGUST 2026",
    detailDate: "August 17, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a842c17c7d986cb1fcbeecf_thumbnail_16%20(3).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a842c1aec63f5a82771f83b_thumbnail_16%20(2).webp",
    description: "World models could be the next frontier of AI. Explore how they learn physics, power robotics and simulation, and move AI beyond language into the physical world.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      }
    ],
  },
  {
    id: "generating-the-training-data-that-doesnt-exist-yet",
    title: "Generating the training data that doesn't exist yet",
    date: "AUGUST 2026",
    detailDate: "August 15, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a90357afafbb82feeccad8c_Version%204%20(2).jpg",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a903578dd03e4725be5488e_Version%204%20(1)%20(1).jpg",
    description: "micro1 launches Flow-gen: physics-based simulation and generative AI that produce controlled synthetic sensor data to close coverage gaps in perception model training.",
    authors: [
      {
        name: "Nick Waytowich",
        role: "micro1",
      }
    ],
  },
  {
    id: "data-for-our-defense-customers",
    title: "Solving the data conversion problem for our defense customers",
    date: "AUGUST 2026",
    detailDate: "August 2, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a7101d82f70e0dc8e97b554_group_1413373788%20(2).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a7101d691a43a0e93d0e846_group_1413373788%20(3).webp",
    description: "The defense enterprise has no shortage of aerial video. The real shortage is usable training data.",
    authors: [
      {
        name: "Nick Waytowich",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-secret-to-high-quality-training-data",
    title: "The Secret to High-Quality Training Data is Happy Humans",
    date: "JULY 2026",
    detailDate: "July 27, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a68f8ec6f33a1d59263c22f_thumbnail_10.webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a68f8e9da59ec97ce3c840c_thumbnail_10%20(1).webp",
    description: "Why expert happiness is essential to producing high-quality training data—and why the future of AI depends on valuing the humans behind it.",
    authors: [
      {
        name: "Dylan",
        role: "micro1",
      }
    ],
  },
  {
    id: "why-the-ai-evaluation-layer-is-your-real-ip",
    title: "Why The AI Evaluation Layer is Your Real IP",
    date: "JULY 2026",
    detailDate: "July 21, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a5fdc0142e5c747587c41a9_3%20Landscape.webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a5fdc0142e5c747587c41a9_3%20Landscape.webp",
    description: "Learn how continuous evaluation, expert feedback, and proprietary data help enterprise AI agents break past the 80% accuracy ceiling and create a defensible moat.",
    authors: [
      {
        name: "Rita Kaur",
        role: "micro1",
      }
    ],
  },
  {
    id: "healthcare-ai-evaluation",
    title: "Getting Healthcare AI Right: Why Evaluation Is the Hard Part",
    date: "JULY 2026",
    detailDate: "July 9, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a5144368fce28e8be9fb941_v2-2.webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a51441c9fa976d93481a1b1_v2.webp",
    description: "Discover why evaluation is the hardest part of building healthcare AI. Learn how expert-led, workflow-specific assessment is the key to creating reliable, trustworthy systems.",
    authors: [
      {
        name: "Paola Rodriguez",
        role: "micro1",
      }
    ],
  },
  {
    id: "enterprise-ai-wont-scale-without-human-data",
    title: "Enterprise AI Won't Scale Without Human Data",
    date: "JUNE 2026",
    detailDate: "June 19, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a395a0737008d4d7fb06f2e_image_941.webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a395a0448916bf40c7968aa_image_941%20(1).webp",
    description: "Human data is becoming the critical infrastructure for enterprise AI agents, helping organizations evaluate performance, capture expertise, and build durable advantage.",
    authors: [
      {
        name: "Ava Fitoussy",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-ai-agents-scaling-bottleneck",
    title: "The AI Scaling Bottleneck: Why Agents Stagnate at 80% Accuracy (And How to Fix It)",
    date: "JUNE 2026",
    detailDate: "June 6, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a2696d3fccf0c150a563456_thumbnail%20(6).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269705827167b18e84b6e1_image_1039.webp",
    description: "There is a distinct inflection point that occurs when you transition an AI agent from a controlled sandbox into production...",
    authors: [
      {
        name: "Rita Kaur",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-human-foundation-of-ai-in-healthcare",
    title: "The Human Foundation of AI in Healthcare",
    date: "APRIL 2026",
    detailDate: "April 10, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d1122a065761c0c1105_thumbnail%20(8).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d147bc97ca4105a560e_thumbnail%20(7).webp",
    description: "Artificial intelligence in healthcare is no longer a distant promise or a conceptual frontier. It is already reshaping how care is delivered, how risks are identified, and how decisions are made...",
    authors: [
      {
        name: "Paola Rodriguez",
        role: "micro1",
      },
      {
        name: "David Q Sun",
        role: "micro1",
      },
      {
        name: "Sam Hashemi",
        role: "micro1",
      }
    ],
  },
  {
    id: "new-era-for-the-democratization-of-legal-expertise",
    title: "A New Era for the Democratization of Legal Expertise",
    date: "MARCH 2026",
    detailDate: "March 17, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d782d8d2b30dfe224df_thumbnail%20(9).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d751259195ee9c4f020_thumbnail%20(10).webp",
    description: "Legal judgment is one of the most consequential forms of human expertise. It shapes who can enforce...",
    authors: [
      {
        name: "Isabel Yishu Yang",
        role: "micro1",
      },
      {
        name: "Joshua Browder",
        role: "micro1",
      },
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-competitive-moat-is-still-human",
    title: "The Competitive Moat Is Still Human",
    date: "MARCH 2026",
    detailDate: "March 16, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d9cfccf0c150a5a01e6_thumbnail%20(12).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d9e46a1dcb884c7b266_thumbnail%20(11).webp",
    description: "Not as reassurance. As responsibility. And the more I sit with it, the more I think it captures something the mainstream discourse about AI keeps getting wrong.",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      }
    ],
  },
  {
    id: "most-agentic-ai-never-makes-it-past-the-demo",
    title: "Most Agentic AI Never Makes It Past the Demo",
    date: "MARCH 2026",
    detailDate: "March 9, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269dc61e1c5b9e41f26ab0_thumbnail%20(13).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269dc4721be5aeb9f2bf3e_thumbnail%20(14).webp",
    description: "There is a version of agentic AI that looks extraordinary. The demos are compelling, the walkthroughs are persuasive, and the possibility space feels genuinely limitless....",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      }
    ],
  },
  {
    id: "ai-is-becoming-more-human-than-ever",
    title: "AI is becoming more human than ever",
    date: "FEBRUARY 2026",
    detailDate: "February 19, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269ec29c1d67e7d84681ad_thumbnail%20(22).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269ebf9b4e9c11cb249e48_thumbnail%20(23).webp",
    description: "As AI progresses, it becomes more human — not just in what it can do, but in how it learns. The real shift isn’t just bigger models; it’s increasing the fidelity with which human judgment is captured and operationalized over longer horizons.",
    authors: [
      {
        name: "Ali Ansari",
        role: "micro1",
      },
      {
        name: "Aarush Gupta",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-execution-gap-in-enterprise-ai",
    title: "The Execution Gap in Enterprise AI",
    date: "FEBRUARY 2026",
    detailDate: "February 12, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269fb98a360acfb4cc197f_thumbnail%20(34).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269fb76d47b856fb11214d_thumbnail%20(35).webp",
    description: "Enterprises are investing more in AI than ever before. Budgets are growing, teams are experimenting aggressively, and automation is increasingly...",
    authors: [
      {
        name: "Lin Qiao",
        role: "micro1",
      },
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "generalist-human-data-is-still-needed-more-than-ever",
    title: "Generalist human data is still needed, more than ever",
    date: "FEBRUARY 2026",
    detailDate: "February 3, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269ee6c031942053681f8b_thumbnail%20(25).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269ee8eb2a0367500366c0_thumbnail%20(24).webp",
    description: "We’d like to define a “generalist” in the world of human data as someone who uses their understanding of the world to create inputs that explain human behavior and help automated systems better replicate how people think and act in society.",
    authors: [
      {
        name: "Arian Sadeghi",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-united-states-must-win-the-ai-race",
    title: "The U.S. MUST win the AI race",
    date: "JANUARY 2026",
    detailDate: "January 31, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269e2c5f4995327fd3ed4f_thumbnail%20(17).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269e29311fc74d4f57c99b_thumbnail%20(18).webp",
    description: "We made this decision because the AI race is not just about better products. It is about who controls the intelligence layer of the global economy, and whether frontier capability is used to strengthen the free world or to empower adversarial states.",
    authors: [
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "1-trillion",
    title: "Human data will be a $1 trillion/year market",
    date: "JANUARY 2026",
    detailDate: "January 7, 2026",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f526c9323bf9386d4a3_thumbnail%20(30).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f50c62c4449fd5f5211_thumbnail%20(31).webp",
    description: "This is not a short-term prediction. It is a structural claim about where the economy converges.",
    authors: [
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "the-critical-role-of-human-data-in-enterprise-ai-adoption",
    title: "The critical role of human data in enterprise AI adoption",
    date: "DECEMBER 2025",
    detailDate: "December 13, 2025",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d1122a065761c0c1105_thumbnail%20(8).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269d147bc97ca4105a560e_thumbnail%20(7).webp",
    description: "Agentic AI adoption is skyrocketing across enterprises everywhere, yet many of these companies are struggling to see the expected ROI from their initiatives. The missing key ingredient here isn’t more advanced algorithms, it’s better data.",
    authors: [
      {
        name: "Izzy Nova",
        role: "micro1",
      }
    ],
  },
  {
    id: "human-expertise-the-engine-behind-the-ai-data-revolution",
    title: "Human Expertise: The Engine Behind the AI Data Revolution",
    date: "DECEMBER 2025",
    detailDate: "December 5, 2025",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f333ea5da7eb9c96507_thumbnail%20(29).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f361259195ee9c61004_thumbnail%20(28).webp",
    description: "Although many blame AI for the current jitters in the job market, even the most ardent AI believer recognizes that human intuition and human expertise is something that a computer cannot replace — and thus, it’ll always have value...",
    authors: [
      {
        name: "Daniel Warner",
        role: "micro1",
      }
    ],
  },
  {
    id: "best-practices-for-high-stakes-healthcare-and-legal-ai-projects",
    title: "Operational Excellence in Human Data: Best Practices for High Stakes Healthcare and Legal AI Projects",
    date: "DECEMBER 2025",
    detailDate: "December 4, 2025",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f7f0a2a4b7377e9dfd0_thumbnail%20(33).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f82827167b18e8a5b3f_thumbnail%20(32).webp",
    description: "Building safe and reliable AI systems requires far more than sophisticated model architecture. It depends on human expertise, disciplined operations, and evaluation pipelines designed to withstand the complexity of real world professional environments...",
    authors: [
      {
        name: "Paola Rodriguez",
        role: "micro1",
      }
    ],
  },
  {
    id: "how-ai-powered-recruitment-defies-expectations-about-inclusion-and-transparency",
    title: "How AI-powered recruitment defies expectations about inclusion and transparency",
    date: "SEPTEMBER 2025",
    detailDate: "September 22, 2025",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f09d597c8e679bb2461_thumbnail%20(26).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269f07d265329f70bb00ae_thumbnail%20(27).webp",
    description: "Our research at micro1 addresses a critical question in recruitment: whether AI will reduce inequities or reinforce them...",
    authors: [
      {
        name: "Mark Esposito",
        role: "Chief Economist, micro1",
      },
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
  {
    id: "hiring-with-ai-doesnt-have-to-be-so-inhumane",
    title: "Hiring with AI doesn't have to be so inhumane",
    date: "MARCH 2025",
    detailDate: "March 28, 2025",
    image: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269e0222a065761c0cb2cc_thumbnail%20(16).webp",
    heroImage: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a269e0d5f385abfe62bfe8e_thumbnail%20(15).webp",
    description: "Our research at micro1, conducted with Stanford researchers, demonstrates that conversational AI fundamentally changes what \"humane\" hiring looks like at massive scale.",
    authors: [
      {
        name: "Ali Ansari",
        role: "micro1",
      }
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug);
}
