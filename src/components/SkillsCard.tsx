import MiniSkillCard from "./MiniSkillCard";

const skills = [
  {
    type: "languages",
    itens: ["TypeScript", "JavaScript", "Dart", "Java", "Go", "Python", "C"]
  },
  {
    type: "Database",
    itens: ["MySql", "Mongo"]
  },

  {
    type: "Tools",
    itens: ["VSCode", "Figma", "Git", "Github"]
  },
  {
    type: "Freamworks",
    itens: ["React", "Tailwind css", "Flutter"]
  },
  {
    type: "Other",
    itens: ["HTML", "CSS"]
  }
];

const SkillsCard: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/3"></div>
      <div className="grid grid-cols-3 gap-4">
        {skills.map(skill =>
          <MiniSkillCard
            type={skill.type}
            itens={skill.itens}
            key={skill.type}
          />
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
