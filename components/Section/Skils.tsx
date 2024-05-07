import { skills } from "@/functions/skils";
import { Button, Divider } from "@nextui-org/react";
import { FaCode } from "react-icons/fa6";

interface IProps {

}

const Skils = ({ }: IProps) => {
    return <>
        <div className="mt-4">
            <Divider />
            <h2 className="text-2xl flex items-center justify-center font-bold uppercase my-3 text-default-600"><span className="me-2"> <FaCode /></span> Skils <span className="ms-2"> <FaCode /></span></h2>
            <div className="space-y-2 space-x-2 md:w-1/2 m-auto">
                {skills.map((sk)=>
                <Button key={sk.colors} size="sm" className={`uppercase bg-[#E1306C] w-auto`}>{sk.title}</Button>
                )}
            </div>
        </div>

    </>;
};

export default Skils;