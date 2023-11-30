import welcome from '../../../../../src/assets/pictures/welcomeChurch.svg'

const Intro = () => {
  return (
    <>
    <div 
    className=' sticky top-0 lg:h-[100vh] h-[30vh] md:h-[38vh]
    '>
        <img src={welcome} alt=""/>
    </div>
    </>
  )
}

export default Intro;