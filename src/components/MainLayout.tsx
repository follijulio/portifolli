import AsideBar from "./AsideBar";
import NavBar from "./NavBar";

interface mainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#282C33] w-screen h-screen flex relative">
      <AsideBar />
      <div className="flex flex-col w-8/12">
        <header className="flex justify-center">
          <NavBar />
        </header>
        <div className="w-full h-full overflow-y-scroll overflow-hidden no-scrollbar    ">
          {children}
        </div>
      </div>
      <div />
    </div>
  );
};
export default MainLayout;
