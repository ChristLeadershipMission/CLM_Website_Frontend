import ControlPanel from './ControlPanel';
import SideBar from '../../NavBar/SideBar';
import TopNavBar from '../../NavBar/TopNavBar';
import { useEffect, useState } from 'react';


const DashBoard = () => {

  // const [width, setWidth] = useState(window.outerWidth);
  const width = window.outerWidth;

  const [displaySideBarforSmallScreen, setDisplaySideBarforSmallScreen] = useState(false);

  useEffect(()=>{
 if (width > 884) {
    setDisplaySideBarforSmallScreen(true);
 }
  },[displaySideBarforSmallScreen, width])

  const displaySideBarHandle = (value) =>{
    setDisplaySideBarforSmallScreen(value);
  }

  return (
    <>
    <div>
      { console.log(width) }
     < TopNavBar />
     <div className='flex'>
       {  displaySideBarforSmallScreen && < SideBar displaySideBar={displaySideBarHandle}/>}
       < ControlPanel hideSideBar={displaySideBarHandle} />
     </div>
    </div>
    </>
  )
}

export default DashBoard;