import { Button, Card, Link } from "@nextui-org/react";
import { Chip, Avatar } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Projects from "./Projects";

interface IProps {

}
const About = ({ }: IProps) => {
    return <>
        <div className="text-center relative top-[-100px] md:top-[-150px] mt-6 px-4">
            <Chip size="sm" variant="dot" color="warning">Available For Work</Chip>
            <h1 className="font-semibold my-3 text-4xl">Mahmoud Sayed</h1>
            <Card shadow="none" className="bg-gray-100 md:w-1/2 m-auto">
                <p className="p-4 text-tiny text-default-600 font-medium text-center leading-5">I am a skilled MERN Stack developer with a passion for crafting innovative and robust web applications. My technical expertise lies in building and developing both the front-end and back-end of applications using React.js, Node.js, Express.js, and MongoDB. I am constantly striving to enhance user experience and performance by implementing best practices in UI design, state management, and performance optimization</p>
            </Card>
            <Chip className="my-3" radius="sm" variant="flat" color="secondary">MERN STACK Developer</Chip>
            <div className="space-x-2 mb-4">
                <Button href="https://www.linkedin.com/in/mahmoud-sayed-a51634226/" target="_blank" className="bg-[#0077B5] text-white" isIconOnly as={Link} radius="sm" size="md" startContent={<FaLinkedinIn />}></Button>
                <Button href="https://github.com/Mahmovdsayed" target="_blank" className="bg-[#0D1117] text-white" isIconOnly as={Link} radius="sm" size="md" startContent={<FaGithub />}></Button>
                <Button href="https://twitter.com/mahmovdsayed" target="_blank" className="bg-[#191919] text-white" isIconOnly as={Link} radius="sm" size="md" startContent={<FaXTwitter />}></Button>
                <Button href="https://www.instagram.com/mahmovdsayed" target="_blank" className="bg-[#E1306C] text-white" isIconOnly as={Link} radius="sm" size="md" startContent={<AiFillInstagram />}></Button>
            </div>
            <Projects />
        </div>
    </>;
};
export default About;
