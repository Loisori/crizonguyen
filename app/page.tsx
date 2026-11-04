import Banner from "@/components/banner";
import CaseStudy from "@/components/casestudy";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Project from "@/components/project";
import Workspace from "@/components/workspace";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] font-sans">
      <div className="mx-auto w-full bg-[#050505]">
        <Header />
        <Banner />
        <Workspace /> 
        <Project />
        <CaseStudy />
        <Footer />
      </div>
    </main>
  );
}
