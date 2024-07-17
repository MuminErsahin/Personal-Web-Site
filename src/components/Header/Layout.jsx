import { useSelector } from "react-redux";

function Layout() {
  const mainSection = useSelector((state) => state.textData.mainSection);
  return (
    <>
    <div className="min-w-466.7 pt-24  flex md:max-w-[960px] ">
      <div className="ml-[293px] max-md:ml-0  ">
        <p className="text-[#CBF281] max-md:text-3xl text-[72px] py-8 leading-[84px]  md:text-[36px] max-md:text-[24px] max-md:text-start max-md:w-[300px] md:flex md:flex-start">{mainSection.title}</p>

        <p className="text-2xl max-md:text-[24px] max-md:text-start max-md:w-[300px] font-light">{mainSection.description}</p>
      </div>

      <div className=" absolute ml-[1090px] mt-[-100px] ">
        <img className="w-[466px] h-[501.18px] rounded-2xl max-md:w-[155px] object-cover " src={mainSection.image} alt="profile" />
      </div>
      </div>
    </>
  );
}

export default Layout;
