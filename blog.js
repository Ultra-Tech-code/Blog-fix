
//blog.js data
const blogPosts = [
  {
    id: 1,
    title: "What you need to run an architectural firm",
    author: {
      name: "John Deborah",
      title: "Architectural expertist",
      image: "./assets/Debbie.jpg"
    },
    date: "Oct 23, 2024",
    readTime: "3 mins read",
    subDefinition: "Running an architectural firm requires a combination of technical expertise, business acumen, and strategic planning. Here are the key elements you'll need to successfully operate an architectural firm:",
    image: "./assets/architectural-firm.jpg",
    content: [
      {
        type: "section",
        title: "Architectural expertist",
        items: [
          {
            title: "Professional Credentials and Licensing",
            points: [
              "Architectural License: Ensure you have the necessary certifications and licenses required to practice as an architect. In most countries, this involves completing a professional degree (such as a Bachelor's or Master's in Architecture), gaining practical experience (internships or apprenticeships), and passing a licensing exam (e.g., NCARB in the U.S.).",
              "Legal Structure: Register your business under the appropriate legal structure (e.g., sole proprietorship, partnership, or LLC), and obtain business licenses specific to your location."
            ]
          },
          {
            title: "Business Plan",
            points: [
              "Vision and Mission: Define the firm's core values, target market, and areas of specialization (residential, commercial, sustainable design, etc.).",
              "Financial Plan: Include projections for startup costs, operating expenses, revenue streams, and profit margins. Consider funding options like loans or investors, if necessary.",
              "Marketing Strategy: Develop a plan for acquiring clients, such as building an online presence, networking within the industry, and showcasing past projects through a portfolio."
            ]
          },
          {
            title: "Office Setup and Infrastructure",
            points: [
              "Physical Office or Virtual Workspace: Decide whether you need a physical office space or if remote work with a virtual setup would suffice. An office can help establish credibility but comes with extra overhead costs.",
              "Design Software: Invest in professional architectural design software such as AutoCAD, Revit, SketchUp, or ArchiCAD. These are essential for creating blueprints, 3D models, and visual presentations.",
              "IT and Support Tools: Secure necessary technology including high-performance computers, printers (especially for large-format drawings), and cloud storage or project management tools for team collaboration.",
              "Administrative Support: Consider hiring administrative staff or outsourcing for tasks like accounting, legal services, and human resources."
            ]
          },
          {
            title: "Team and Talent",
            points: [
              "Skilled Architects and Designers: Hire or collaborate with licensed architects, junior architects, drafters, and interior designers, depending on the size of your firm and the scope of your projects.",
              "Project Managers: Experienced project managers can oversee the execution of multiple projects, ensure timelines are met, and handle client communications."
            ]
          }
        ]
      }
    ],
    stats: {
      views: "600k",
      comments: "800k",
      likes: "1.2M"
    },
    socialLinks: {
      facebook: "https://web.facebook.com/ebubedike.edwin/",
      twitter: "https://x.com/eddie_bullion?t=hKraQ43Xwien8NG-KkUqRQ&s=08",
      linkedin: "https://www.linkedin.com/in/ebubedike-edwin-59665522b/",
      whatsapp: "https://chat.whatsapp.com/By43YM6GI5tFbYnAQvVUsg"
    }
  },
  {
    id: 2,
    title: "What is Blockchain",
    author: {
      name: "Ebubedike Nzube Edwin",
      title: "Blockchain Developer",
      image: "./assets/Nzube.jpg" 
    },
    date: "Oct 28, 2024",
    readTime: "3 mins read",
    subDefinition: "Blockchain is a decentralized, distributed digital ledger technology that records transactions across many computers in such a way that the record is secure, transparent, and immutable.",
    image: "./assets/what-is-blockchain.jpg",
    content: [
      {
        type: "section",
        title: "Key Concepts of Blockchain",
        items: [
          {
            title: "Decentralization",
            points: [
              "Traditional databases (like those used by banks) are centralized, meaning one entity controls the system. In contrast, blockchain operates on a decentralized network of computers (often called nodes) that work together to validate and record transactions.",
              "No single point of control exists, reducing the risk of manipulation or failure due to a single compromised system."
            ]
          },
          {
            title: "Distributed Ledger",
            points: [
              "All nodes in the blockchain network have access to the entire ledger, meaning every transaction is recorded across the network. If one node fails or is compromised, the ledger remains intact on the other nodes.",
              "Everyone in the network has a synchronized copy of the ledger, increasing transparency."
            ]
          },
          {
            title: "Transparency and Immutability",
            points: [
              "Once a transaction is recorded on the blockchain, it is very difficult to alter. Every transaction is cryptographically secured and linked to the previous one, creating a chain of information that is highly resistant to tampering.",
              "This property makes blockchain trustworthy for recording sensitive information, as any change would be visible to the entire network."
            ]
          },
          {
            title: "Consensus Mechanism",
            points: [
              "For transactions to be added to the blockchain, there needs to be consensus among the network participants. Different blockchains use different consensus algorithms, such as:",
              "- Proof of Work (PoW): Requires solving complex computational problems to validate transactions (used in Bitcoin).",
              "- Proof of Stake (PoS): Involves participants staking their cryptocurrency to validate transactions (used in Ethereum 2.0).",
              "- Delegated Proof of Stake (DPoS), Practical Byzantine Fault Tolerance (PBFT), and others."
            ]
          },
          {
            title: "Smart Contracts",
            points: [
              "A key feature of many blockchains, particularly Ethereum, is the use of smart contracts—self-executing contracts where the terms are directly written into lines of code.",
              "Smart contracts automatically execute actions when predefined conditions are met, removing the need for intermediaries."
            ]
          },
          {
            title: "Cryptographic Security",
            points: [
              "Blockchain uses cryptographic techniques to secure data. Public-key cryptography ensures that only those with the correct private key can access or authorize transactions, while the public key serves as an address visible to all.",
              "The cryptographic nature of blockchain ensures security, authenticity, and integrity of transactions."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Types of Blockchain",
        items: [
          {
            title: "Public Blockchains",
            points: [
              "Open and permissionless networks where anyone can join and participate (e.g., Bitcoin, Ethereum). Transactions are visible to everyone."
            ]
          },
          {
            title: "Private Blockchains",
            points: [
              "Restricted and permission-based, where only authorized participants can join the network."
            ]
          },
          {
            title: "Consortium Blockchains",
            points: [
              "A hybrid model where a group of organizations controls the network, balancing decentralization and control."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Applications of Blockchain",
        items: [
          {
            title: "Cryptocurrency",
            points: [
              "Blockchain underpins cryptocurrencies like Bitcoin and Ethereum, recording transactions and ensuring security."
            ]
          },
          {
            title: "Supply Chain Management",
            points: [
              "Ensures transparency and traceability of products in the supply chain."
            ]
          },
          {
            title: "Digital Identity",
            points: [
              "Creates secure, decentralized identity systems."
            ]
          },
          {
            title: "Financial Services",
            points: [
              "Enables fast, secure, and low-cost cross-border payments."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Why Blockchain is Important",
        items: [
          {
            points: [
              "Security: Blockchain’s cryptographic security makes it highly resistant to hacking.",
              "Transparency: All transactions are visible to the network, promoting trust.",
              "Efficiency: Reduces transaction times and costs by removing intermediaries.",
              "Data Integrity: Ensures records remain accurate and trustworthy."
            ]
          }
        ]
      }
    ],
    stats: {
      views: "150k",
      comments: "500k",
      likes: "1.2M"
    },
    socialLinks: {
      facebook: "https://web.facebook.com/ebubedike.edwin/",
      twitter: "https://x.com/eddie_bullion?t=hKraQ43Xwien8NG-KkUqRQ&s=08",
      linkedin: "https://www.linkedin.com/in/ebubedike-edwin-59665522b/",
      whatsapp: "https://chat.whatsapp.com/By43YM6GI5tFbYnAQvVUsg"
    }
  },
  {
    id: 3,
    title: "Implementation of Robotics on Agriculture",
    author: {
      name: "Faith Raymond",
      title: "Agricultural Innovator",
      image: "./assets/Faithy Raymond.png"
    },
    date: "Oct 30, 2024",
    readTime: "5 mins read",
    subDefinition: "The intersection of robotics and agriculture is transformative, bringing innovation and efficiency to an industry facing unique challenges.",
    image: "./assets/robot-img.jpg",
    content: [
      {
        type: "section",
        title: "The Agricultural Challenges Addressed by Robotics",
        items: [
          {
            title: "Labor Shortage",
            points: [
              "Many agricultural regions are struggling with a shortage of skilled labor, making it difficult to meet demand during peak harvesting periods.",
              "Farmers are pressured to adopt more sustainable practices to reduce water usage, energy consumption, and pesticide applications.",
              "As weather patterns grow increasingly unpredictable, robotics and automation offer solutions to improve resilience and ensure crop consistency.",
              "Rising operational costs push businesses to look for efficient ways to plant, monitor, and harvest crops."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Key Robotics Technologies in Agriculture",
        items: [
          {
            title: "Autonomous Tractors and Field Robots",
            points: [
              "Use GPS, LiDAR, and computer vision to navigate fields with precision.",
              "Can perform tasks such as plowing, planting, and fertilizing without human intervention."
            ]
          },
          {
            title: "Precision Agriculture and Drones",
            points: [
              "Drones capture high-resolution images, track crop health, and analyze factors like soil moisture and weed pressure.",
              "Provide real-time data to farmers for data-driven decisions."
            ]
          },
          {
            title: "Harvesting Robots",
            points: [
              "Designed to handle delicate crops requiring gentle picking.",
              "Equipped with soft grippers and computer vision technology to detect ripeness."
            ]
          },
          {
            title: "Robotic Irrigation Systems",
            points: [
              "Integrate sensors and robotic controls to adjust watering schedules based on real-time soil and weather conditions.",
              "Optimize water usage and enhance sustainability."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Business Benefits of Robotic Agriculture",
        items: [
          {
            title: "Increased Productivity",
            points: [
              "Robots can operate consistently, regardless of labor shortages or weather conditions.",
              "Lead to faster planting, harvesting, and crop maintenance."
            ]
          },
          {
            title: "Enhanced Crop Quality and Yield",
            points: [
              "Monitor each plant's health and adjust inputs accordingly.",
              "Reduce chemical usage and improve crop quality."
            ]
          },
          {
            title: "Reduced Operational Costs",
            points: [
              "Save on labor costs by automating labor-intensive tasks.",
              "Lower operational costs by minimizing crop losses due to human error."
            ]
          },
          {
            title: "Sustainability and Environmental Benefits",
            points: [
              "Reduce resource usage including water, energy, and chemicals.",
              "Position brands as sustainable and responsible."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Challenges and Considerations",
        items: [
          {
            title: "High Initial Costs",
            points: [
              "Robotic systems require substantial initial investment.",
              "Small-scale farmers may struggle without funding or incentives."
            ]
          },
          {
            title: "Technical Training and Skill Requirements",
            points: [
              "Require a level of technical skill that may not be available in rural areas.",
              "Training programs are essential to bridge this skills gap."
            ]
          },
          {
            title: "Data Privacy and Security",
            points: [
              "Need protocols for data privacy and storage.",
              "Farmers need assurance that their data is protected."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Future of Robotics in Agriculture",
        items: [
          {
            title: "Autonomous Farms",
            points: [
              "The integration of robotics, IoT, and AI will become seamless.",
              "The global agricultural robotics market is projected to grow significantly."
            ]
          }
        ]
      }
    ],
    stats: {
      views: "150k",
      comments: "200",
      likes: "3.5K"
    },
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      whatsapp: "https://chat.whatsapp.com/"
    }
  },
  {
    id: 4,
    title: "Artificial Intelligence: Transforming Technology and Revolutionizing Business",
    author: {
      name: "Ebubedike Nzube Edwin",
      title: "Tech Enthusiast",
      image: "./assets/Nzube.jpg"
    },
    date: "Oct 23, 2024",
    readTime: "5 mins read",
    subDefinition: "Artificial Intelligence (AI) is a driving force in modern technology, reshaping industries, and unlocking innovative potential across the business landscape.",
    image: "./assets/ai-img.jpg",
    content: [
      {
        type: "section",
        title: "What is Artificial Intelligence?",
        paragraphs: [
          "AI is a field of computer science focused on creating systems that can learn from data, adapt, and perform tasks typically requiring human intelligence. These tasks include problem-solving, speech recognition, decision-making, and even visual perception. AI is a broad umbrella covering various subfields, such as machine learning, natural language processing, computer vision, and robotics."
        ]
      },
      {
        type: "section",
        title: "The Role of Modern Technology",
        items: [
          {
            title: "Automation of Repetitive Tasks",
            points: [
              "AI-powered systems can handle repetitive and time-consuming tasks, freeing up human workers for more strategic roles.",
              "In software development, AI tools can generate code, optimize testing processes, and help in project management."
            ]
          },
          {
            title: "Enhanced Data Analysis",
            points: [
              "With AI algorithms, companies can sift through vast amounts of data to identify trends and generate insights.",
              "This analysis can lead to improved products and a better understanding of customer needs."
            ]
          },
          {
            title: "Natural Language Processing (NLP)",
            points: [
              "NLP has enabled AI to process and interpret human language, making it possible to develop intelligent chatbots and virtual assistants."
            ]
          },
          {
            title: "Computer Vision",
            points: [
              "Computer vision allows machines to interpret visual data from the world, transforming industries from retail to healthcare."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "How AI is Revolutionizing Business",
        items: [
          {
            title: "Improving Customer Experience",
            points: [
              "By leveraging AI for personalized recommendations and customer service, businesses can enhance customer satisfaction and loyalty."
            ]
          },
          {
            title: "Enhancing Decision-Making",
            points: [
              "AI-powered predictive analytics enables businesses to make data-driven decisions."
            ]
          },
          {
            title: "Streamlining Operations and Reducing Costs",
            points: [
              "Many businesses use AI to automate operations, streamline workflows, and reduce errors."
            ]
          },
          {
            title: "Risk Management and Fraud Detection",
            points: [
              "AI helps detect and mitigate risks by analyzing data patterns to identify fraudulent activities."
            ]
          },
          {
            title: "Innovating Products and Services",
            points: [
              "AI is a catalyst for innovation, helping businesses develop new products and services."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Challenges and Ethical Considerations of AI in Business",
        items: [
          {
            title: "Data Privacy and Security",
            points: [
              "AI systems require large volumes of data, raising concerns about data privacy and the risk of breaches."
            ]
          },
          {
            title: "Bias and Fairness",
            points: [
              "AI algorithms can inherit biases, leading to unfair outcomes."
            ]
          },
          {
            title: "Transparency and Accountability",
            points: [
              "The complexity of AI algorithms can create trust issues with users."
            ]
          },
          {
            title: "Impact on Employment",
            points: [
              "Automation raises concerns about job displacement."
            ]
          }
        ]
      },
      {
        type: "section",
        title: "The Future of AI in Business",
        paragraphs: [
          "Looking ahead, AI is set to play an even greater role in business, thanks to emerging technologies like quantum computing."
        ]
      },
      {
        type: "section",
        title: "Conclusion",
        paragraphs: [
          "Artificial intelligence is transforming the technological and business landscape, offering new ways to operate efficiently and innovate."
        ]
      }
    ],
    stats: {
      views: "1M",
      comments: "1500",
      likes: "2M"
    },
    socialLinks: {
      facebook: "https://web.facebook.com/ebubedike.edwin/",
      twitter: "https://x.com/eddie_bullion?t=hKraQ43Xwien8NG-KkUqRQ&s=08",
      linkedin: "https://www.linkedin.com/in/ebubedike-edwin-59665522b/",
      whatsapp: "https://chat.whatsapp.com/By43YM6GI5tFbYnAQvVUsg"
    }
  },
    
  ];
  
  const blogContainer = document.getElementById('blog-container');

  function displayBlogPosts() {
    blogPosts.forEach((post) => {
      const card = document.createElement('div');
      card.className = 'card';
  
      card.innerHTML = `
        <img src="${post?.image}" alt="${post?.title}">
        <div class="card-content">
          <h3>${post?.title}</h3>
          <div class="meta-info">
            <span>By ${post?.author.name} | ${post?.date} | ${post?.readTime}</span>
          </div>
          <p>${post?.subDefinition}</p>
          <div class="read-more">
            <a href="blog-details.html?id=${post?.id}">Read More</a>
          </div>
        </div>
      `;
  
      blogContainer.appendChild(card);
    });
  }

  const bloggersContainer = document.createElement('div');
bloggersContainer.className = 'container';

function displayBloggers() {
  const header = document.createElement('header');
  header.innerHTML = '<h2>OUR BLOGGERS ARE:</h2>';
  bloggersContainer.appendChild(header);

  const bloggersGrid = document.createElement('div');
  bloggersGrid.className = 'bloggers-grid';

  blogPosts.forEach(post => {
    const bloggerCard = document.createElement('div');
    bloggerCard.className = 'blogger-card';

    bloggerCard.innerHTML = `
      <div class="blogger-image">
        <img src="${post.author.image}" alt="${post.author.name}">
      </div>
      <div class="blogger-info">
        <h3>${post.author.name}</h3>
        <p>${post.author.title}</p>
      </div>
    `;

    bloggersGrid.appendChild(bloggerCard);
  });

  bloggersContainer.appendChild(bloggersGrid);

  document.getElementById('blog-container').after(bloggersContainer);
}

displayBlogPosts();
displayBloggers();
