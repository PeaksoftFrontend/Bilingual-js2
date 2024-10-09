import { Experiense } from "../components/landingPageComponents/Experiense";
import { Feedback } from "../components/landingPageComponents/Feedback";
import { Footer } from "../components/landingPageComponents/Footer";
import { Header } from "../components/landingPageComponents/Header";
import { InfinitySlider } from "../components/landingPageComponents/InfinitySlider";
import { InfoCards } from "../components/landingPageComponents/InfoCards";
import { InfoSlider } from "../components/landingPageComponents/InfoSlider";
import { LearningRoadmap } from "../components/landingPageComponents/LearningRoadmap";
import { OurTeam } from "../components/landingPageComponents/OurTeam";
import { VideoGallery } from "../components/landingPageComponents/VideoGallery";

export const Landing = () => {
  return (
    <>
      <Header />
      <InfoCards />
      <Experiense />
      <OurTeam />
      <InfoSlider />
      <VideoGallery />
      <LearningRoadmap />
      <Feedback />
      <InfinitySlider />
      <Footer />
    </>
  );
};
