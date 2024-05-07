import { Image } from "@nextui-org/react";
import About from "./About";

interface IProps {

}
const ProfileImage = ({ }: IProps) => {
    return <>
        <div className="relative top-[-100px] md:top-[-150px]">
            <Image className="w-32 h-32 md:w-48 md:h-48" isZoomed isBlurred src="https://i.pinimg.com/564x/bf/e5/d0/bfe5d09a73014e4c4452d33c614ae3ee.jpg" />
           
        </div>
        
    </>;
};

export default ProfileImage;