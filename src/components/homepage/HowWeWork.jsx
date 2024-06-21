import { WorkCard } from './WorkCard';
import ResultsDriven from './ResultsDriven';
import { howWeWorkList } from '../common/Helper';

const HowWeWork = ({ imgClassName, margin, padding, arrowPosition }) => {
  return (
    <section>
      <div className="px-3 sm:px-6 relative z-[1] sm:pt-12 pt-10 xl:pt-36 lg:pt-24 md:pt-16 xl:pb-[3px]">
        <div className="container max-w-[1164px]">
          <ResultsDriven
            margin={margin}
            imgClassName={imgClassName}
            arrowPosition={arrowPosition}
          />
          <div
            className={`flex flex-row flex-wrap justify-center py-6 -mx-3 xl:py-28 lg:py-24 sm:py-8 max-sm:mb-4 md:py-16 xl:my-3 ${padding}`}
          >
            {howWeWorkList.map((obj, i) => (
              <div
                key={i}
                className="flex justify-center w-full px-2 lg:w-1/3 sm:w-1/2"
              >
                <WorkCard icons={obj.icons} tittle={obj.tittle} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork
