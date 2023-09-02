import bibleReading from '../../../../../src/assets/pictures/bibleReading.svg'
import prayergroup from '../../../../../src/assets/pictures/prayergroup.svg'

const ClmOneFamily = () => {
  return (
    <>
      <div>
        <div className='text-center py-[2rem] lg:pt-[4rem] lg:mb-[2rem] font-["Arial"]'>
          <h1 className='font-black lg:text-[2rem] text-[1.5rem] md:text-[2rem]'>
            CLM, <span  className='text-[#F66D0A]'>One Family</span>
          </h1>
          <h3 className='font-bold pt-[1rem] mx-[2rem]'>
            We are passionate about our members and we provide a place to grow,
            in faith and other areas.
          </h3>
          </div>
          <div
          className='lg:flex  lg:px-[4rem] lg:gap-[4rem]'
          >
            <div>
              <img src={bibleReading} alt=""  className='lg:w-[90vw] px-[2rem] lg:px-0'/>
            </div>
            <div className='lg:pt-[4rem] pt-[2rem]'>
              <h1 className='text-center lg:pb-[2rem] pb-[1rem] font-black lg:text-[2rem] text-[1.5rem] md:text-[2rem]'>
                We are a people of <br /> <span className='text-[#F66D0A]'>THE WORD.</span>
              </h1>
              <p className='text-center font-bold px-[2rem] pb-[2rem] lg:pb-0'>
                Every week, we have a Bible Study outline, to help our members
                grow in the knowledge of the Word, and to apply this Word in
                becoming better Christians.
              </p>
            </div>
          </div>
          <div className='lg:flex  lg:px-[4rem] lg:gap-[4rem] lg:pt-[4rem]'>
            <div>
              <img src={prayergroup} alt="" className='w-[99.9vw] px-[2rem] lg:px-0'/>
            </div>
            <div className='lg:pt-[6rem] pt-[2rem]'>
              <h1 className='text-center lg:pb-[2rem] font-black lg:text-[2rem] text-[1.5rem] md:text-[2rem]'>
                We are a people of <br /><span className='text-[#F66D0A]'>PRAYER.</span>
              </h1>
              <p className='text-center font-bold px-[2rem] pb-[2rem] lg:pb-0'>
                You have so many requests and you would like us to pray with
                you? You can link up with us with your requests and together, we
                join our faith and trust that God will answer us.
              </p>
            </div>
          </div>
      </div>
    </>
  );
};

export default ClmOneFamily;
