import {  useSelector } from "react-redux";
import "../../Css/Header.css";

import Layout from "./Layout";
import NavBar from "./NavBar";

function Header() {
  
  const DarkMode = useSelector((state) => state.darkMode);
  const header = useSelector((state) => state.textData.header);
 
  const gradientColor1 = DarkMode ? "#171043" : "#4731d3";
  const gradientColor2 = DarkMode ? "#1A210B" : "#cbf281";
  return (
    <>
   
      <div
        className={` text-white flex  justify-between ${DarkMode ? "dark" : ""}`}
        style={{
          padding: "0 auto",
          width: "100%",
          height: "671px",
          background: `linear-gradient(to right, ${gradientColor1} 75%, ${gradientColor2} 25%)`,
        }}
      >
        <div className="flex flex-row-reverse " >
          <div >
         <NavBar />
         </div>
        <div className="text-3xl font-bold m-24 pr-9 ">
        <h1 className="dark:text-[] text-[#CBF281] ml-[293px] ">
          {header.title}
        </h1>
        <Layout />
        </div>
       
       
      </div>
       <div className="flex items-start">
       </div>
        </div>
    </>
  );
}

export default Header;
