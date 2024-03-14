import Avatar from '../component/Avatar'
import Button from '../component/Button'
import avatar from '../assets/images/avatar-jessica.jpeg'

const data = [
    {
        appname: "Git Hub",
        link: "www.github.com",
        key: 1

    },
    {
        appname: "Frontend Mentor",
        link: "www.frontendmentor.io",
        key: 2

    },
    {
        appname: "LinkedIn",
        link: "www.linkedin.com",
        key: 3

    },
    {
        appname: "Twitter",
        link: "www.twitter.com",
        key: 4

    },
    {
        appname: "Instagram",
        link: "www.instagram.com",
        key: 5

    },
]



const SocialMediaShare = () => {
    return (
        <div className=' lg:w-1/4   p-10 rounded-2xl bg-[#1f1f1f] flex flex-col items-center justify-center'>
            <Avatar pic={avatar} name="Jessica Randale" place="London, United kingdom" title="Front end developer and avid reader" />

            {data.map((item) => {
                return (
                    <>
                        <a href={`https://${item.link}`} className='w-full'>
                            <Button appname={item.appname} />
                        </a>
                    </>
                )
            })
            }

        </div>
    )
}

export default SocialMediaShare