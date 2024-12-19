const icons = [
    {
        "name": "github1",
        "link": "https://github.com/follijulio",
        "image": "https://img.icons8.com/win10/512/FFFFFF/github.png"
    },
    {
        "name": "github2",
        "link": "https://github.com/follijulio",
        "image": "https://img.icons8.com/win10/512/FFFFFF/github.png"
    },
    {
        "name": "github3",
        "link": "https://github.com/follijulio",
        "image": "https://img.icons8.com/win10/512/FFFFFF/github.png"
    }   
]


const AsideBar: React.FC = () =>{
    return (
        <aside className="h-full w-2/12">
            <div className="w-20 flex flex-col justify-center gap-4 items-center">
                <div className="w-0 h-48 border-l-[1px] border-[#ABB2BF]"></div>
                <div className="w-full flex flex-col items-center gap-4">
                    {icons.map((icon) => {
                        return (
                            <a href={icon.link} key={icon.name} className="h-5 w-5">
                                <img src={icon.image} alt={icon.name} className="" />
                            </a>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}

export default AsideBar;