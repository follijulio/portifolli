import { Fira_Code } from "next/font/google";

interface dividerProps {
  text: string;
  link?: string;
  divider?: boolean;
}

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap"
});

const Divider: React.FC<dividerProps> = ({ link, text, divider = true}) => {
  return (
    <div
      className={`w-full flex justify-between items-center ${firaCode.className} `}>
      <div className="flex w-3/4 items-center gap-5">
        <p className="before:content-['#'] before:text-[#C778DD] text-3xl text-white font-medium py-3 flex items-center shrink-0">
          {text}
        </p>
        {
          divider ? 
          <div className="border-t border-2 border-[#C778DD] w-10/12"></div>
          : 
          <></>
        }
        </div>
        { link ? 
        <a href={link} className="items-center">
          <p className="text-white inline-block hover:text-[#C778DD] duration-200 ease-in-out hover:scale-95">View all &rarr;</p>
        </a> 
        :
        <></>
      }
    </div>
  );
};
export default Divider;
