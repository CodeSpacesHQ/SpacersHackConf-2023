import {
  monalisa,
  samuel,
  vani,
  tabitha,
  precious,
  chisom,
  john,
  laurent,
  andrew,
} from "../assets/jury";

interface JuryItems {
  img: string;
  name: string;
  title: string;
  about: string;
}

export const Jury: JuryItems[] = [
  {
    img: monalisa,
    name: "Monalisa Agbata",
    title: "Marketing Director",
    about:
      "Monalisa Agbata, is a seasoned go-to-market strategist focusing on early and growth-stage startups. She has built her career helping startups launch and penetrate emerging markets, leveraging her expertise to identify and communicate their unique value propositions to customers, partners, and investors.",
  },
  {
    img: john,
    name: "John Daniels Adeyemi",
    title: "Software Developer",
    about:
      "John, a seasoned software engineer with 5 years of experience, excels in the complete software development life cycle. John prioritizes user satisfaction, teamwork, and performance optimization. He boasts proficiency in React.js, Vue.js, Next.js, Node.js, MongoDB, SQL, Flutter, bug tracking tools, and programming languages.",
  },
  {
    img: chisom,
    name: "Chisom Nwokwu",
    title: "Software Engineer",
    about:
      "Chisom Nwokwu (fondly called TechQueen) is a renowned Software Engineer based in Lagos, Nigeria working with the Sustainability Team at Microsoft, she joined Microsoft as a new graduate shortly after rounding up an internship with the Bank of America, where she worked as a Technology analyst.",
  },
  {
    img: samuel,
    name: "Adedoyin Samuel Oluwatosin",
    title: "Designer, and Founder",
    about:
      "Adedoyin Samuel Oluwatosin, also known as Psam, is a designer and developer, and the founder of two iconic brands - TekArt and BLNR, which have earned him a reputation as a leader in the field of design and technology. Psam calls himself the 'billionaire designer' because he believes in the reality of his aspirations.",
  },
  {
    img: andrew,
    name: "Adebola Andrew Mondogho",
    title: "Senior Web Developer",
    about:
      "Adebola Andrew Mondogho is a dedicated programmer with more than five years of experience in the tech industry. Throughout his career, he has actively engaged in mentoring and inspiring young people, and adults to pursue careers in coding. His commitment to nurturing the next generation of technologists has led him to hold various key roles in educational initiatives.",
  },
  {
    img: precious,
    name: "Precious Okoro",
    title: "UX Writer & Content Designer",
    about:
      "Precious Okoro is a seasoned content designer, UX writer, and digital creator. Passionate about enhancing user experiences, Precious specializes in transforming boring interfaces into captivating and user-friendly platforms through her expertise in crafting compelling user-focused content.",
  },
  {
    img: tabitha,
    name: "Tabitha Hris",
    title: "Microsoft MVP & Founder",
    about:
      "Tabitha Hris is a Microsoft Most Valuable Professional (MVP). She is an inspiring and passionate leader, business consultant, social and development worker.She has vast knowledge and experience in areas of Microsoft Technologies and Products, Customer Experience Analysis, Digital Creation as well as Social Development. These areas have been her core strength over the last years as she has carved out a distinctive niche in them.",
  },
  {
    img: laurent,
    name: "Laurent Doguin",
    title: "Developer Relations at Couchbase",
    about:
      "Laurent is a nerdy metalhead who lives in Paris. He mostly writes code in Java and structured text in AsciiDoc, and often talks about data, reactive programming and other buzzwordy stuff. He is also a former Developer Advocate for Clever Cloud and Nuxeo where he devoted his time and expertise to helping those communities grow bigger and stronger. He now runs Developer Relations at Couchbase.",
  },
  {
    img: vani,
    name: "Vani Jaiswal",
    title: "Solutions Engineer at Couchbase",
    about:
      "Vani Jaiswal is a Solutions Engineer at Couchbase, located in Manhattan, NYC. She is an integral part of the Field Engineering team, dedicated to assisting customers in integrating Couchbase products to modernize their technology stack. In her leisure hours, Vani enjoys traveling, attending concerts, exploring new cafes, working out, and experimenting with recipes found on Instagram.",
  },
];
