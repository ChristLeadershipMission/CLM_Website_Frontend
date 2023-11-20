// import React from 'react'

const AdminquickNav = ({hideSideBar, title}) => {
  return (
    <div className="lg:h-[90vh] overflow-y-auto">
        <div
          className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block lg:w-[78.8vw] overflow-hidden
          w-[100vw] md:h-[8vh] h-[7vh]
          "
        >
          <h1
            className="lg:text-2xl md:text-center lg:text-left py-[2vh] md:py-[3vh] 
            md:text-[1.5rem] lg:pt-[2vh]"
          >
            {title} Management
          </h1>
          <h1
            className="lg:hidden font-black md:pt-[2vh] pl-[20vw] pt-[1vh]
            md:pr-[3vw] lg:text-[2rem] md:text-[1.8rem] text-[1.2rem]"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        </div>
  )
}

export default AdminquickNav