import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";



const MainLaout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default MainLaout;