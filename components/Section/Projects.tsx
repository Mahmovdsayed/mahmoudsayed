import { projects } from "@/functions/projects";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { FaCode } from "react-icons/fa";

interface IProps {

}
const Projects = ({ }: IProps) => {
    return <>
        <div className="mt-4">
            <Divider />
            <h2 className="text-2xl flex items-center justify-center font-bold uppercase my-3 text-default-600"><span className="me-2"> <FaCode /></span> Projects <span className="ms-2"> <FaCode /></span></h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {projects.map((pro) =>
                    <Card className="max-w-lg m-auto">
                        <CardHeader>{pro.title}</CardHeader>
                        <CardBody><Image className="object-cover h-[300px]" src={pro.ImageUrl} /></CardBody>
                        <CardFooter className="flex-col">
                            <p className="text-tiny text-start text-default-500">{pro.description}</p>
                            <Button as={Link} color="primary" showAnchorIcon href={pro.projectLink} target="_blank" className="mt-3 w-full">Project Link</Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    </>;
};

export default Projects;