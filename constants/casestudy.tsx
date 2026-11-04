export interface CaseImage {
  /** What the picture shows (used as alt text). */
  alt: string;
  img: string;
  width: number;
  height: number;
}

export interface CaseMetric extends CaseImage {
  label: string;
}

export interface CaseStudyData {
  id: string;
  name: string;
  niche: string;
  before: CaseImage[];
  after: CaseImage[];
  metrics: CaseMetric[];
  highlights: string[];
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "01",
    name: "Mike",
    niche: "Travel & lifestyle vlogs",
    before: [
      {
        alt: "How Much I've Spent on Ironman (so far) | Ironman 70.3 (Ep 7)",
        img: "/imgs/Mike/before.webp",
        width: 1400,
        height: 1265,
      },
      {
        alt: "17 Things I Wish I Knew as a Beginner Cyclist | Ironman 70.3 (Ep 5)",
        img: "/imgs/Mike/before1.webp",
        width: 1384,
        height: 1332,
      },
      {
        alt: "What a Full Month of Ironman Training Looks Like | Ironman 70.3 (Ep 3)",
        img: "/imgs/Mike/before3.webp",
        width: 1400,
        height: 1271,
      },
    ],
    after: [
      {
        alt: "15 Incredible Cycling Accessories from AliExpress: Upgrades for $3 to $50!",
        img: "/imgs/Mike/after.webp",
        width: 1396,
        height: 1248,
      },
      {
        alt: "These $350 AliExpress Carbon Wheels Are Disrupting the Industry",
        img: "/imgs/Mike/after2.webp",
        width: 1400,
        height: 1238,
      },
      {
        alt: "15 Incredible Cycling Accessories from AliExpress | Ironman 70.3 (Ep 4)",
        img: "/imgs/Mike/after3.webp",
        width: 1400,
        height: 1299,
      },
      {
        alt: "I Learned to Swim Without Getting Tired! | Ironman 70.3 (Ep 2)",
        img: "/imgs/Mike/after4.webp",
        width: 1400,
        height: 1317,
      },
    ],
    metrics: [
      {
        label: "Channel analytics, last 90 days",
        alt: "YouTube Studio channel analytics: 161,300 views in the last 90 days",
        img: "/imgs/Mike/after5.webp",
        width: 2400,
        height: 1448,
      },
      {
        label: "AliExpress affiliate sales",
        alt: "AliExpress affiliate transaction report",
        img: "/imgs/Mike/after6.webp",
        width: 2400,
        height: 1560,
      },
    ],
    highlights: ["161.3K views in 90 days"],
  },
  {
    id: "02",
    name: "MisThy",
    niche: "Gaming & entertainment",
    before: [
      {
        alt: "MisThy dẫn người ấy đi bụi ở Đà Lạt 7 ngày 7 đêm",
        img: "/imgs/MisThy/before.webp",
        width: 1400,
        height: 1277,
      },
      {
        alt: "Reaction hot Douyin trend 'chạm có vật biến hình'",
        img: "/imgs/MisThy/before2.webp",
        width: 1400,
        height: 1279,
      },
      {
        alt: "25H sống cùng lạc đà Alpaca ở Đà Lạt",
        img: "/imgs/MisThy/before3.webp",
        width: 1400,
        height: 1278,
      },
    ],
    after: [
      {
        alt: "MisThy thay đổi phong cách với hot Tiktoker Ngân Hà",
        img: "/imgs/MisThy/after.webp",
        width: 1400,
        height: 1277,
      },
      {
        alt: "24H làm hầu gái nhà bà trùm nông sản Viên Vibi",
        img: "/imgs/MisThy/after2.webp",
        width: 1400,
        height: 1277,
      },
    ],
    metrics: [],
    highlights: [],
  },
  {
    id: "03",
    name: "Jason",
    niche: "Technology & software",
    before: [
      {
        alt: "Down in the dumps - Ecommerce day 78",
        img: "/imgs/Jason/before.webp",
        width: 1400,
        height: 1092,
      },
      {
        alt: "Big channel updates - Ecommerce Day 73",
        img: "/imgs/Jason/before2.webp",
        width: 1400,
        height: 1127,
      },
      {
        alt: "0 to 10k Followers in 3 Days?? - Ecommerce Day 69",
        img: "/imgs/Jason/before3.webp",
        width: 1400,
        height: 1214,
      },
    ],
    after: [
      {
        alt: "The #1 Dropshipping Supplement Mistake That's Costing You THOUSANDS",
        img: "/imgs/Jason/after.webp",
        width: 1400,
        height: 1246,
      },
    ],
    metrics: [
      {
        label: "Video analytics",
        alt: "YouTube Studio video analytics: 1,330 views since published",
        img: "/imgs/Jason/after2.webp",
        width: 2400,
        height: 1178,
      },
    ],
    highlights: ["1,330 views", "102.5 h watch time", "+49 subscribers"],
  },
];
