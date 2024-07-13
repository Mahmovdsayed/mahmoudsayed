import { projects } from "@/functions/projects";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { FaCode } from "react-icons/fa";

interface IProps {

}
const Projects = ({ }: IProps) => {
    return <>
        <div className="mt-4">
            <Divider />
            <h2 className="text-4xl flex items-center justify-center font-bold uppercase my-4 text-default-600">Projects</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((pro) =>
                    <Card shadow="none" className="w-full border bg-[#f0f0f0] m-auto">
                        <CardHeader className="w-full p-0"><Image removeWrapper className="object-cover rounded-b-none object-center h-[200px] w-full" src={pro.ImageUrl} /></CardHeader>
                        <CardBody className="text-2xl font-bold uppercase">{pro.title}</CardBody>
                        <CardFooter className="flex-col">
                            <p className="text-tiny text-start text-default-500">{pro.description}</p>
                            <Button as={Link} color="secondary" showAnchorIcon href={pro.projectLink} target="_blank" className="mt-3 w-full">Project Link</Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    </>;
};

export default Projects;
