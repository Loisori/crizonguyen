export interface VideoItem {
  title: string;
  img: string;
  duration: string;
  views: string;
  time: string;
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
        duration: "10:35",
        views: "12 N lượt xem",
        time: "1 năm trước",
      },
      {
        title: "How I Script My Developer Vlogs",
        img: "/imgs/Jason/before2.webp",
        duration: "8:23",
        views: "4.5 N lượt xem",
        time: "10 tháng trước",
      },
      {
        title: "A Day in the Life of a Remote Software Engineer",
        img: "/imgs/Jason/before3.webp",
        duration: "15:42",
        views: "18 N lượt xem",
        time: "8 tháng trước",
      },
    ],
    after: [
      {
        title: "Why I Stopped Using macOS for Coding",
        img: "/imgs/Jason/after.webp",
        duration: "12:15",
        views: "124 N lượt xem",
        time: "3 tuần trước",
      },
      {
        title: "I Built a Desktop App in 24 Hours (No Sleep)",
        img: "/imgs/Jason/after2.webp",
        duration: "18:08",
        views: "98 N lượt xem",
        time: "2 tuần trước",
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
        duration: "14:10",
        views: "8.2 N lượt xem",
        time: "2 năm trước",
      },
      {
        title: "My First Time Visiting Japan solo",
        img: "/imgs/Mike/before1.webp",
        duration: "25:40",
        views: "22 N lượt xem",
        time: "1 năm trước",
      },
      {
        title: "How to Edit Cinematic Videos Faster",
        img: "/imgs/Mike/before3.webp",
        duration: "11:15",
        views: "15 N lượt xem",
        time: "11 tháng trước",
      },
    ],
    after: [
      {
        title: "Traveling to the Edge of the World (Full Cinematic Movie)",
        img: "/imgs/Mike/after.webp",
        duration: "18:40",
        views: "340 N lượt xem",
        time: "3 tuần trước",
      },
      {
        title: "The Hidden Secrets of Productivity in 2026",
        img: "/imgs/Mike/after2.webp",
        duration: "12:08",
        views: "180 N lượt xem",
        time: "2 tuần trước",
      },
      {
        title: "Inside the Most Luxury Hotel Suite in Hanoi",
        img: "/imgs/Mike/after3.webp",
        duration: "15:20",
        views: "215 N lượt xem",
        time: "10 ngày trước",
      },
      {
        title: "Why You Should Start a Podcast in 2026",
        img: "/imgs/Mike/after4.webp",
        duration: "22:50",
        views: "98 N lượt xem",
        time: "7 ngày trước",
      },
      {
        title: "We Spent 48 Hours Surviving in the Wild Forest",
        img: "/imgs/Mike/after5.webp",
        duration: "32:15",
        views: "480 N lượt xem",
        time: "4 ngày trước",
      },
      {
        title: "The Future of AI-Assisted Development Tools",
        img: "/imgs/Mike/after6.webp",
        duration: "16:00",
        views: "150 N lượt xem",
        time: "2 ngày trước",
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
        duration: "18:35",
        views: "450 N lượt xem",
        time: "1 năm trước",
      },
      {
        title: "Thử thách ăn hết 100 món ăn vặt Thái Lan",
        img: "/imgs/MisThy/before2.webp",
        duration: "22:15",
        views: "680 N lượt xem",
        time: "8 tháng trước",
      },
      {
        title: "Một ngày làm việc vất vả tại văn phòng mới",
        img: "/imgs/MisThy/before3.webp",
        duration: "14:55",
        views: "390 N lượt xem",
        time: "6 tháng trước",
      },
    ],
    after: [
      {
        title: "Review nhà hàng chuẩn 5 sao cực sang chảnh",
        img: "/imgs/MisThy/after.webp",
        duration: "24:40",
        views: "1.8 Tr lượt xem",
        time: "1 tuần trước",
      },
      {
        title: "Lần đầu trải nghiệm tự lái trực thăng ngắm cảnh",
        img: "/imgs/MisThy/after2.webp",
        duration: "20:08",
        views: "1.2 Tr lượt xem",
        time: "5 ngày trước",
      },
    ],
  },
];
