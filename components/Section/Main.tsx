import About from "./About";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";

interface IProps {

}
const Main = ({ }: IProps) => {
    return <>
        <Banner />
        <div className="flex flex-col  justify-center items-center">
            <ProfileImage />
            <About />
        </div>
    </>;
};

export default Main;