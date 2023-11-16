import { useEffect, useState } from "react";
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    const [verified, setVerified] = useState("Loading");

    useEffect(()=>{
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        console.log(userData);
        if(userData){
            setVerified(true);
        }else{
            setVerified(false);
        }
    },[]);

    if (verified === "Loading") {
        return (
            <>
            <div className="h-screen flex items-center justify-center">
                <div className="animate-spin w-32 h-32 border-8 border-gray-300 border-t-red-700 rounded-full "></div>
            </div>
            </>
        );
    }

  return (
    <>
    {
        // verified? <Outlet /> : <h1>Heloee</h1>
        verified? <Outlet /> : <Navigate to={"/login"} />
        // verified? <div>This is true</div> : <div>This is false</div>
    }
    </>
  )
};

export default PrivateRoute;
        // verified? <div>This is true</div> : <div>This is false</div>


// if (verified === false) {
    //     return (
    //         <>
    //         <div className="h-screen flex items-center justify-center">
    //             <div className="animate-spin w-32 h-32 border-8 border-gray-300 border-t-red-700 rounded-full "></div>
    //         </div>
    //         </>
    //     );
    // }