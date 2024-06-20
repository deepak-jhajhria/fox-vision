import ProjectAgency from "../components/aboutus/ProjectAgency";
import DesignMastery from "../components/aboutus/DesignMastery";
import Customer from "../components/aboutus/Customer";
import HowWeWork from "../components/homepage/HowWeWork";

const AboutUs = () => {
  return (
    <>
      <ProjectAgency />
      <DesignMastery />
      <HowWeWork padding="lg:!pt-24 xl:!mt-1 xl:!pb-32 lg:!pb-24 xl:!mb-[2px]" margin="lg:!mb-11" imgClassName="lg:!max-w-[467px] xl:-mt-4 max-md:!max-w-[360px] !mt-0 lg:!max-h-[363px]" />
      <Customer />
    </>
  );
};

export default AboutUs;
