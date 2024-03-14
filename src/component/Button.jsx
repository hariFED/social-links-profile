
const Button = ({ appname }) => {
    return (
        <div className=" mt-5 bg-[#333333]  cursor-pointer flex items-center justify-center h-12 hover:text-[#141414] font-semibold hover:bg-[#c5f82a] rounded-xl">

            {appname}

        </div>
    )
}

export default Button