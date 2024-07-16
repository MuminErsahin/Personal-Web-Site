import { useSelector } from "react-redux";

function Layout() {
  const mainSection = useSelector((state) => state.textData.mainSection);
  return (
    <>
    <div className="min-w-466.7 flex">
      <div className="ml-[293px] ">
        <p className="text-[#CBF281] text-[72px] py-8 leading-[84px]">{mainSection.title}</p>

        <p className="text-2xl font-light">{mainSection.description}</p>
      </div>

      <div className=" absolute ml-[1090px]">
        <img className="w-[466px] h-[501.18] rounded-2xl" src={mainSection.image} alt="profile" />
      </div>
      
      
      </div>
    </>
  );
}

export default Layout;
