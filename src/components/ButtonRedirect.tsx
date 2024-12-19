import { Fira_Code } from "next/font/google";


interface buttonRedirectProps {
    link: string;
}
const firaCode = Fira_Code({
    subsets: ['latin'],
    display: 'swap',
})

const ButtonRedirect: React.FC<buttonRedirectProps> = ({link}) => {

    const redirect = () => {
        window.location.href = link;
    }

    return (
        <button onClick={redirect} className={`${firaCode.className} text-white border-2 border-[#C778DD] w-28 h-9`}>
            Live
        </button>
    )
}
export default ButtonRedirect;