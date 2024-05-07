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
                            isZoomed
                            className={"w-screen h-[200px] lg:h-[300px]  object-cover object-center"}
                            radius="none"
                            isBlurred={true}
                            src={`https://i.pinimg.com/originals/c8/f5/37/c8f5372e4e5b3e340050d7c9daf48db4.gif`}
                            alt={'banner'}
                        />
                    </ScrollShadow>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;