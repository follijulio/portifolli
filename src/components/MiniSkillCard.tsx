import { Fira_Code } from "next/font/google";



interface miniSkillCardProps {
    type: string;
    itens: string[];
}

const firaCode = Fira_Code({
    subsets: ['latin'],
    display: 'swap',
})

const MiniSkillCard: React.FC<miniSkillCardProps> = ({type, itens}) => {
    return(
        <section className={`border-2 border-[#ABB2BF] w-44 h-36 ${firaCode.className}`}>
            <div className="border-b-2 border-[#ABB2BF] text-white">
                {type}
            </div>
            <div className="flex flex-wrap gap-2 p-1">
            {itens.map((item) => {
                return (
                    <div key={item}>
                        <p className={`text-white`}>{item}</p>
                    </div>
                )
            })}
            </div>
        </section>
    );
}
export default MiniSkillCard;