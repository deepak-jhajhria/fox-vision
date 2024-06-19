import ProjectAgency from "../components/aboutus/ProjectAgency";
import DesignMastery from "../components/aboutus/DesignMastery";
import Customer from "../components/aboutus/Customer";
import HowWeWork from "../components/homepage/HowWeWork";

const AboutUs = () => {
  return (
    <>
      <ProjectAgency />
      <DesignMastery />
      <HowWeWork
        padding="lg:!pt-24 lg:!mt-3 lg:!pb-32 lg:!mb-[2px]"
        imgClassName="lg:!max-w-[467px] max-md:!max-w-[360px] !mt-0 lg:!max-h-[363px]"
      />
      <Customer />
    </>
  );
};

export default AboutUs;
