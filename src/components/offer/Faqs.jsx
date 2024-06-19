import { H2 } from "../common/Heading"
import { accordionList } from "../common/Helper"
import Accordion from "./Accordion"

const Faqs = () => {
    return (
        <section className="px-4 sm:px-6 py-[150px] mb-[144px]">
            <div className="container max-w-[970px]">
                <H2 className='text-center' heading='Frequently Asked Questions' />
                <Accordion className='mt-[50px]' data={accordionList}/>
            </div>
        </section>
    )
}

export default Faqs