import { WorkCard } from './WorkCard';
import ResultsDriven from './ResultsDriven';
import { WorkData } from '../common/Helper';

const HowWeWork = ({ imgClassName,padding,margin }) => {
  return (
    <div className="px-6 pt-12 xl:pt-36 lg:pt-28 md:pt-16 pb-[3px]">
      <div className="container max-w-[1164px]">
        <ResultsDriven margin={margin} imgClassName={imgClassName} />
        <div className={`flex flex-row flex-wrap justify-center py-12 -mx-3 lg:py-28 md:py-16 xl:my-3 ${padding}`}>
          {WorkData.map((obj, i) => (
            <div
              key={i}
              className="flex justify-center w-full px-2 md:w-1/3 sm:w-1/2"
            >
              <WorkCard icons={obj.icons} tittle={obj.tittle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork
