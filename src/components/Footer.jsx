import { useSelector } from "react-redux";

function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  const contact = useSelector((state) => state.textData.contact);
  return (
    <div className={`dark:bg-[#252128] flex max-w-[638.67] mx-auto h-[605px] justify-center items-center flex-col gap-3 ${darkMode ? "dark" : ""}`} >
      
        <h1 className="text-[72px] font-bold text-[#4731D3] ">
          {contact.title}
        </h1>
        <p className={`dark:text-[#FFFFFF] text-[32px] ${darkMode ? "dark" : ""}`}>{contact.description}</p>
        <p className="text-[#4731D3] text-[26.67px] underline">{contact.email}</p>
      <div className="flex gap-4 ">
      {contact.socialMedia.map((social, index) => (
        <img className="max-w-[32px] hover:scale-125 min-h-[32px]" src={social.url} key={index} />
      ))}
      </div>
    </div>
  );
}

export default Footer;
252128