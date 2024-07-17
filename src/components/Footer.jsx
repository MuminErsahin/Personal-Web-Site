import { useSelector } from "react-redux";

function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  const contact = useSelector((state) => state.textData.contact);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } dark:bg-[#252128] flex flex-col items-center justify-center mx-auto p-4 md:p-8  max-w-full md:max-w-[800.67px] h-auto md:h-[605px] gap-3`}
    >
      <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-bold text-[#4731D3] text-center">
        {contact.title}
      </h1>
      <p className="dark:text-[#FFFFFF] text-[18px] md:text-[24px] lg:text-[32px] text-center">
        {contact.description}
      </p>
      <p className="text-[#4731D3] text-[16px] md:text-[20px] lg:text-[26.67px] underline text-center">
        {contact.email}
      </p>
      <div className="flex gap-4 mt-4">
        {contact.socialMedia.map((social, index) => (
          <img
            className="w-[24px] md:w-[28px] lg:w-[32px] hover:scale-125"
            src={social.url}
            key={index}
            alt={`social-media-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
