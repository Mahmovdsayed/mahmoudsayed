import { Image } from "@nextui-org/react";
import About from "./About";

interface IProps {

}
const ProfileImage = ({ }: IProps) => {
    return <>
        <div className="relative top-[-100px] md:top-[-150px]">
            <Image className="w-32 h-32 md:w-48 md:h-48"  isBlurred src="https://i.pinimg.com/564x/0d/94/bd/0d94bd1c1bfec9157ff3323a43ff9cd3.jpg" />
           
        </div>
        
    </>;
};

export default ProfileImage;
