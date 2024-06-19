import React from 'react'

const Map = () => {
  return (
    <div className=' overflow-hidden max-h-[500px] sm:max-h-[711px]'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.383471288313!2d-79.37922452399843!3d43.64018947110274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2a6daefd53%3A0xe6618a12997ae43d!2sHarbour%20Square%20Park!5e0!3m2!1sen!2sin!4v1718688484401!5m2!1sen!2sin" width="1920" height="711" title='googlemap' className='w-full max-h-[500px] sm:max-h-[711px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
