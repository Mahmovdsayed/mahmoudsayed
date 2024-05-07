import { Button, Card, Link } from "@nextui-org/react";
import { Chip, Avatar } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Skils from "./Skils";
import Projects from "./Projects";

interface IProps {

}
const About = ({ }: IProps) => {
    return <>
        <div className="text-center relative top-[-100px] md:top-[-150px] mt-6 px-4">
            <Chip size="sm" variant="dot" color="warning">Available For Work</Chip>
            <h1 className="font-semibold my-3 text-4xl">Mahmoud Sayed</h1>
            <Card className=" md:w-1/2 m-auto">
                <p className="p-4 text-tiny text-default-600  px-5">I am a skilled MERN Stack developer with a passion for crafting innovative and robust web applications. My technical expertise lies in building and developing both the front-end and back-end of applications using React.js, Node.js, Express.js, and MongoDB.

                    I am constantly striving to enhance user experience and performance by implementing best practices in UI design, state management, and performance optimization. With my broad knowledge of web development technologies, I am able to efficiently achieve project goals.

                    My capabilities also extend to building and implementing efficient and secure databases tailored to the application's needs, as well as testing and ensuring the quality of applications to ensure their compatibility and optimal performance.</p>
            </Card>
            <Chip className="my-3" radius="sm" variant="flat" color="secondary">MERN STACK Developer</Chip>
            <div className="space-x-2 mb-4">
                <Button href="https://www.linkedin.com/in/mahmoud-sayed-a51634226/" target="_blank" className="bg-[#0077B5]" isIconOnly as={Link} radius="sm" size="md" startContent={<FaLinkedinIn />}></Button>
                <Button href="https://github.com/Mahmovdsayed" target="_blank" className="bg-[#0D1117]" isIconOnly as={Link} radius="sm" size="md" startContent={<FaGithub />}></Button>
                <Button href="https://twitter.com/mahmovdsayed" target="_blank" className="bg-[#191919]" isIconOnly as={Link} radius="sm" size="md" startContent={<FaXTwitter />}></Button>
                <Button href="https://www.instagram.com/mahmovdsayed" target="_blank" className="bg-[#E1306C]" isIconOnly as={Link} radius="sm" size="md" startContent={<AiFillInstagram />}></Button>
            </div>
            <iframe className="rounded-2xl md:w-1/2 m-auto" src="https://open.spotify.com/embed/track/0yLSY8FHJc9beVaW34qLe0?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <Skils />
            <Projects />
        </div>
    </>;
};

export default About;