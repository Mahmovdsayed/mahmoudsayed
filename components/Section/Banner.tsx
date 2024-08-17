import { Image, ScrollShadow } from "@nextui-org/react";

interface IProps {

}
const Banner = ({ }: IProps) => {
    return <>
        <div className=" min-h-full overflow-hidden relative pb-6 md:pb-12">
            <div className=" z-0">
                <div>
                    <ScrollShadow
                        hideScrollBar
                        visibility="bottom"
                        size={250}
                        className="overflow-hidden"
                    >
                        <Image
                            
                            className={"w-screen h-[200px] lg:h-[300px]  object-cover object-center"}
                            radius="none"
                            isBlurred
                            src={`https://i.pinimg.com/564x/f6/8c/c4/f68cc450c1b586c1224c0460c78dd30b.jpg`}
                            alt={'banner'}
                        />
                    </ScrollShadow>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;
