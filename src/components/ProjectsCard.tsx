'use client'

import ButtonRedirect from "./ButtonRedirect";
import { Fira_Code } from "next/font/google";


interface projectCardProps {
    id: string;
    name: string;
    descrition: string;
    image: string;  
    link?: string;
    technologies: string[];
}


const firaCode = Fira_Code({
    subsets: ['latin'],
    display: 'swap',
})


const ProjetCard: React.FC<projectCardProps> = ({descrition, image, link, name, technologies}) => {
    return (
        <div className={`${firaCode.className} h-[27rem] w-80 border-2 border-[#ABB2BF]`}>
            <div className="w-full h-full">
                <div className="h-2/5 w-full">
                    <img src={image ? image :  "https://github.com/github.png"} className="w-full h-full object-cover border-b-2 border-[#ABB2BF]" alt="" />
                </div>
                <div className="w-full flex justify-start p-2 gap-4 text-[#ABB2BF] border-b-2 border-[#ABB2BF]">
                {technologies.map((tech) => {
                    return(
                        <div key={tech}>
                            {tech}
                        </div>
                    )
                })}
                </div>
                <div className="h-2/5 w-full flex px-4 flex-col gap-2 justify-center">
                    <div className="h-1/3 flex items-center">
                        <p className="text-2xl font-medium text-white">{name}</p>
                    </div>
                    <div className="h-1/3 flex ">
                        <p className="h-1/3 text-base font-medium text-[#ABB2BF]">{descrition}</p>
                    </div>
                    <div className="h-1/3 flex items-center">
                        <div>
                            {link ? <ButtonRedirect link={link}/> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjetCard;
