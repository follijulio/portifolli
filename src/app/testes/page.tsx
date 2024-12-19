import SkillsCard from "@/components/SkillsCard";

const page: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-red-500 flex justify-center items-center">
            <div className="w-8/12">
        <SkillsCard />
            </div>
        </div>
    )
}

export default page;