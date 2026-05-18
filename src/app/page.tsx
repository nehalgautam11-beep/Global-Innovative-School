import HeroSection from "../components/sections/HeroSection";
import SchoolTourSection from "../components/sections/SchoolTourSection";
import ClassesSection from "../components/sections/ClassesSection";
import CurriculumSection from "../components/sections/CurriculumSection";
import RoboticsSection from "../components/sections/RoboticsSection";
import TeachersSection from "../components/sections/TeachersSection";
import TestimonialsSection from "../components/sections/Testimonials";
import ContactSection from "../components/sections/ContactSection";
import MilestonesSection from "../components/sections/MilestonesSection";
import GallerySection from "../components/sections/GallerySection";
import KarateSection from "../components/sections/KarateSection";
import HolisticDevelopmentSection from "../components/sections/HolisticDevelopmentSection";
import HomeEntryExperience from "../components/ui/HomeEntryExperience";
import RatingSection from "../components/sections/RatingSection";

export default function Home() {
  return (
    <HomeEntryExperience>
      <main className="home-theme overflow-x-clip">
        <HeroSection />
        <SchoolTourSection />
        <ClassesSection />
        <MilestonesSection />
        <CurriculumSection />
        <RoboticsSection />
        <HolisticDevelopmentSection />
        <KarateSection />
        <GallerySection />
        <TeachersSection />
        <TestimonialsSection />
        <ContactSection />
        <RatingSection />
      </main>
    </HomeEntryExperience>
  );
}
