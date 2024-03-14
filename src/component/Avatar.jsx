
const Avatar = ({ pic, name, place, title }) => {
    return (
        <div className="flex flex-col items-center text-center justify-center gap-5">
            <div>
                <img src={pic} className="rounded-full" width={90} alt={`${name}-profilepic`} />
            </div>
            <div className="flex gap-2 items-center justify-center flex-col text-center">
                <p className="text-3xl font-medium ">{name}</p>
                <p className="text-base font-medium text-[#c5f82a]">{place}</p>
            </div>
            <div>
                <p className="text-base text-gray-300">&ldquo;{title}.&ldquo;</p>
            </div>
        </div>
    )
}

export default Avatar