import { WorkCard } from './WorkCard';
import ResultsDriven from './ResultsDriven';
import { howWeWorkList } from '../common/Helper';

const HowWeWork = ({ imgClassName }) => {
  return (
    <div className="px-6 sm:pt-16 pt-12 xl:pt-36 lg:pt-28 md:pt-20 pb-[3px]">
      <div className="container max-w-[1164px]">
        <ResultsDriven imgClassName={imgClassName} />
        <div className="flex flex-row flex-wrap justify-center py-12 -mx-3 lg:py-28 sm:py-16 md:py-20 xl:my-3">
          {howWeWorkList.map((obj, i) => (
            <div key={i} className="flex justify-center w-full px-2 lg:w-1/3 md:w-1/2">
              <WorkCard icons={obj.icons} tittle={obj.tittle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork
