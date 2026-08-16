export interface VideoItem {
  title: string;
  img: string;
}

export interface CaseStudyData {
  id: string;
  name: string;
  title: string;
  before: VideoItem[];
  after: VideoItem[];
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "01",
    name: "Jason",
    title: "Technology & Software Engineer",
    before: [
      {
        title: "My New Desk Setup & Coding Workspace (2026)",
        img: "/imgs/Jason/before.webp",
      },
      {
        title: "How I Script My Developer Vlogs",
        img: "/imgs/Jason/before2.webp",
      },
      {
        title: "A Day in the Life of a Remote Software Engineer",
        img: "/imgs/Jason/before3.webp",
      },
    ],
    after: [
      {
        title: "Why I Stopped Using macOS for Coding",
        img: "/imgs/Jason/after.webp",
      },
      {
        title: "I Built a Desktop App in 24 Hours (No Sleep)",
        img: "/imgs/Jason/after2.webp",
      },
    ],
  },
  {
    id: "02",
    name: "Mike",
    title: "Travel & Lifestyle Vlogs",
    before: [
      {
        title: "Reviewing My Old 1080p Camera Gear",
        img: "/imgs/Mike/before.webp",
      },
      {
        title: "My First Time Visiting Japan solo",
        img: "/imgs/Mike/before1.webp",
      },
      {
        title: "How to Edit Cinematic Videos Faster",
        img: "/imgs/Mike/before3.webp",
      },
    ],
    after: [
      {
        title: "Traveling to the Edge of the World (Full Cinematic Movie)",
        img: "/imgs/Mike/after.webp",
      },
      {
        title: "The Hidden Secrets of Productivity in 2026",
        img: "/imgs/Mike/after2.webp",
      },
      {
        title: "Inside the Most Luxury Hotel Suite in Hanoi",
        img: "/imgs/Mike/after3.webp",
      },
      {
        title: "Why You Should Start a Podcast in 2026",
        img: "/imgs/Mike/after4.webp",
      },
      {
        title: "We Spent 48 Hours Surviving in the Wild Forest",
        img: "/imgs/Mike/after5.webp",
      },
      {
        title: "The Future of AI-Assisted Development Tools",
        img: "/imgs/Mike/after6.webp",
      },
    ],
  },
  {
    id: "03",
    name: "MisThy",
    title: "Gaming & Entertainment Creator",
    before: [
      {
        title: "MisThy chơi game cùng đồng bọn (Cười bể bụng)",
        img: "/imgs/MisThy/before.webp",
      },
      {
        title: "Thử thách ăn hết 100 món ăn vặt Thái Lan",
        img: "/imgs/MisThy/before2.webp",
      },
      {
        title: "Một ngày làm việc vất vả tại văn phòng mới",
        img: "/imgs/MisThy/before3.webp",
      },
    ],
    after: [
      {
        title: "Review nhà hàng chuẩn 5 sao cực sang chảnh",
        img: "/imgs/MisThy/after.webp",
      },
      {
        title: "Lần đầu trải nghiệm tự lái trực thăng ngắm cảnh",
        img: "/imgs/MisThy/after2.webp",
      },
    ],
  },
];
