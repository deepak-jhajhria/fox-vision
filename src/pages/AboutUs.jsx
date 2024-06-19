import ProjectAgency from "../components/aboutus/ProjectAgency";
import DesignMastery from "../components/aboutus/DesignMastery";
import Customer from "../components/aboutus/Customer";
import HowWeWork from "../components/homepage/HowWeWork";

const AboutUs = () => {
  return (
    <>
      <ProjectAgency />
      <DesignMastery />
      <HowWeWork imgClassName='lg:!max-w-[467px] !mt-0 lg:!max-h-[363px]'/>
      <Customer />
    </>
  );
};

export default AboutUs;
