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
                            className={"w-screen h-[200px] lg:h-[300px]  object-contain object-center"}
                            radius="none"
                            isBlurred
                            src={`https://i.pinimg.com/564x/cb/be/53/cbbe53813cb8c0c85ddeda0d23de874d.jpg`}
                            alt={'banner'}
                        />
                    </ScrollShadow>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;
