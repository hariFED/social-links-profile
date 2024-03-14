
const Button = ({ link, appname }) => {
    return (
        <div className=" mt-5 bg-[#333333] w-[90%] cursor-pointer flex items-center justify-center h-14 hover:text-[#141414] font-semibold hover:bg-[#c5f82a] rounded-xl">
            <a href={link}>
                <div className=" ">
                    {appname}
                </div>
            </a>
        </div>
    )
}

export default Button