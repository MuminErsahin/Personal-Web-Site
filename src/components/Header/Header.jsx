import { useSelector } from "react-redux";
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
        className={`text-white flex justify-between ${DarkMode ? "dark" : ""} max-md:flex-col max-md:w-full`}
        style={{
          padding: "0 auto",
          width: "100%",
          height: "894px",
          background: `linear-gradient(to right, ${gradientColor1} 75%, ${gradientColor2} 25%)`,
        }}
      >
        <div className=" w-full max-md:flex-col">
          
        <NavBar />
          
          <div className="text-3xl font-bold m-24 pr-9 max-md:m-4 max-md:pr-0 max-md:text-center">
            <h1 className="text-[#CBF281] md:text-[36px] max-md:text-[24px] max-md:text-start max-md:pb-[80px] ml-[293px] max-md:ml-0">
              {header.title}
            </h1>
            <Layout />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
