"use client";

import { Fira_Code } from "next/font/google";
import { emailto } from "@/hooks/emailto";

interface presentationCardProps {
  introduction: string;
  text: string;
  image: string;
}

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap"
});

const PresentationCard: React.FC<presentationCardProps> = ({
  image,
  introduction,
  text
}) => {
  return (
    <div className="w-full flex h-96 justify-between">
      <div className={`w-1/2 text-white flex flex-col h-full justify-center gap-8 ${firaCode.className}`}>
        <p
          className="text-4xl font-semibold"
          dangerouslySetInnerHTML={{ __html: introduction }}
        />
        <p>
          {text}
        </p>
        <button onClick={emailto} className="border-2 border-[#C778DD] w-36  ">
          Contact me !!
        </button>
      </div>
      <div className="flex justify-center">
        <img
          src={image}
          className="h-96 w-96 object-cover image-move"
          alt={image}
        />
      </div>
    </div>
  );
};

export default PresentationCard;
