import { Fira_Code } from "next/font/google";
// import Image from 'next/image';
// import quoteIcon from '@/public/quoteicon.png'

interface quoteCardProps {
  text: string;
  author: string;
}

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap"
});

const QuoteCard: React.FC<quoteCardProps> = ({ text, author }) => {
  return (
    <div
      className={`flex flex-col items-end ${firaCode.className} text-2xl font-medium text-white`}
    >
      <div className="w-[45rem] h-24 flex justify-center text-center items-center border-2 border-[#ABB2BF] ">
        <p className="before:content-['\201C'] after:text-[#C778DD] after:content-['\201D'] before:text-[#C778DD] ">
          {text}
        </p>
      </div>
      <div className=" w-40 h-16 border-l-2 border-r-2 border-b-2 border-t-0 border-[#ABB2BF] flex justify-center items-center before:content-['\2014'] before:text-[#C778DD]">
        {" "}{author}
      </div>
    </div>
  );
};

export default QuoteCard;
