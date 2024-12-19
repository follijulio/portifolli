const apresentation = {
  hi: "Hello, i'm Folli!",
  first_text:
    "I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise the into modern user-friendly web experiences.",
  second_text:
    " Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks."
};

const aboutme: React.FC = () => {
  return (
    <div className="w-full h-[32rem] flex">
      <div className="text-base w-1/2 h-full flex flex-col gap-10 font-normal text-[#ABB2BF] text-justify p-3">
        <div>
          <p>
            {apresentation.hi}
          </p>
        </div>
        <div>
          <p>
            {apresentation.first_text}
          </p>
        </div>
        <div>
          <p>
            {apresentation.second_text}
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center" >
      <img src="https://github.com/follijulio.png" className="w-5/6 h-5/6 object-cover image-move" alt="" />
      </div>
    </div>
  );
};
export default aboutme;