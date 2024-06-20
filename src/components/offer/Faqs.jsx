import { H2 } from "../common/Heading"
import { accordionList } from "../common/Helper"
import Accordion from "./Accordion"

const Faqs = () => {
    return (
        <section className="px-3 sm:px-6 py-10 sm:py-12 md:py-16 xl:pb-[150px] xl:pt-[134px] lg:py-24 mb-[144px]">
            <div className="container max-w-[970px]">
                <H2 className='text-center' heading='Frequently Asked Questions' />
                <Accordion className='mt-6 sm:mt-8 lg:mt-[50px]' data={accordionList}/>
            </div>
        </section>
    )
}

export default Faqs