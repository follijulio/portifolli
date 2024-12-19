import Aboutme from "@/components/Aboutme";
import ContactCard from "@/components/ContactCard";
import Divider from "@/components/Divider";
import MainLayout from "@/components/MainLayout";
import PresentationCard from "@/components/PresentationCard";
import ProjetCard from "@/components/ProjectsCard";
import QuoteCard from "@/components/QuoteCard";
import SkillsCard from "@/components/SkillsCard";

const text = {
  key: "introduction",
  presentation:
    "Folli is a <a class='text-[#C778DD] font-extrabold text-'>web designer</a> and <a class='text-[#C778DD] font-extrabold text-'>front-end developer</a>",
  text: "He crafts responsive websites where technologies meet creativity",
  image: "https://github.com/follijulio.png"
};

const quote = {
  text:
    "Ser Radical é agarrar as coisas pela raiz. E a raiz para o homem é o próprio homem",
  author: "Karl Marx"
};

const projects = [
  {
    id: "1",
    name: "quotes",
    descrition: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    link: "/projects/quotes",
    technologies: ["javascript", "html", "css"]
  },
  {
    id: "2",
    name: "quotes",
    descrition: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    link: "/projects/quotes",
    technologies: ["javascript", "html", "css"]
  },
  {
    id: "3",
    name: "quotes",
    descrition: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
    link: "/projects/quotes",
    technologies: ["javascript", "html", "css"]
  },
  {
    id: "4",
    name: "quotes",
    descrition: "Lorem ipsum dolor sit amet",
    image: "",
    link: "/projects/quotes",
    technologies: ["javascript", "html", "css"]
  }
];
const page: React.FC = () => {
  return (
    <MainLayout>
      <main className="flex flex-col justify-center items-center gap-20">
        <PresentationCard
          introduction={text.presentation}
          text={text.text}
          image={text.image}
        />
        <QuoteCard author={quote.author} text={quote.text} />
        <div className="w-full flex flex-col gap-16">
          <Divider text={"projects"} link={"/works"} />
          <div className="grid grid-cols-3 gap-4">
            {projects.slice(0, 3).map(project => {
              return (
                <ProjetCard
                  key={project.id}
                  descrition={project.descrition}
                  image={project.image}
                  link={project.link}
                  name={project.name}
                  technologies={project.technologies}
                  id={""}
                />
              );
            })}
          </div>
          <Divider text={"skills"} divider={true} />
          <SkillsCard />
          <Divider text="about-me" />
          <Aboutme />
          <div className="w-full h-56 flex flex-col">
            <Divider text="contacts" />
            <div className="w-full h-full flex flex-row justify-between">
              <div className="w-1/2 ">
                <p className="font-medium text-base text-[#ABB2BF]">
                  I’m interested in freelance opportunities. However, if you
                  have other request or question, don’t hesitate to contact me
                </p>
              </div>
              <div className="h-full w-1/2 flex justify-end items-end" >
              <ContactCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};
export default page;
