import Banner from "@/components/banner";
import CaseStudy from "@/components/casestudy";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Project from "@/components/project";
import Workspace from "@/components/workspace";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_52%,#ffffff_100%)] font-sans">
      <div className="wrapper--lg mx-auto flex w-full flex-col gap-6 bg-black">
        <Header />
        <Banner />
        {/* <Workspace /> */}
        {/* <Project /> */}
        {/* <CaseStudy /> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
