import Image from "next/image";
import { Jumbotron, slice1, slice2, slice3, slice4 } from "../../../assets";

const Banner = () => {
  return (
    <div className="container px-6 absolute mt-[180px] md:left-0 left-0 right-0  flex justify-center">
      <div className="xl:w-[958px] md:w-[650px]  lg:w-[750px] h-auto bg-color1 sm:w-[550px]  rounded-[10px] text-white top-[180px]">
        <div className="p-[57px]">
          <div className="absolute md:top-0 md:left-[161px] md:max-w-[100%] sm:top-0 sm:left-0 sm:max-w-[80px] left-3 top-0 max-w-[60px]">
            <Image src={slice4} alt="slice4" />
          </div>
          <div className="absolute sm:top-0 md:right-[310px] sm:right-[-10px] sm:max-w-[120px] md:max-w-[100%] right-0 top-0 max-w-[100px]">
            <Image src={slice3} alt="slice3" />
          </div>
          <p className="text-[40px] font-black mb-4 mt-8 md:mt-0 md:text-[60px]">
            WAYSBUCKS
          </p>
          <p className="mb-7 md:text-2xl font-light text-xl">
            Things are changing, but we’re still here for you
          </p>
          <div className="md:text-lg text-sm font-normal">
            <p>We have temporarily closed our in-store cafes, but select</p>
            <p>grocery and drive-thru locations remaining open.</p>
            <p>
              <b>Waysbucks</b>&nbsp; Drivers is also available.
            </p>
            <br />
            <p>Let’s Order...</p>
            <div className="absolute md:max-w-[100%] md:bottom-[-8px] md:left-[955px] sm:bottom-[-10px] sm:left-[220px] sm:max-w-[80px] right-0 bottom-[-10px] max-w-[90px]">
              <Image src={slice2} alt="slice2" />
            </div>
            <div className="absolute  md:left-[800px] sm:left-[175px] sm:top-[-100px] md:w-[451px] md:h-[324px] md:top-[50px] sm:w-[35%] sm:h-[180px] w-[33%] h-[130px] top-[-60px]  left-[140px] ">
              <Image
                className="md:rounded-none rounded-full"
                src={Jumbotron}
                alt="Jumbotron"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="absolute md:max-w-[100%] md:bottom-[-8px] md:left-[650px] sm:bottom-[-10px] sm:left-[220px] sm:max-w-[80px] left-[180px] bottom-[-10px] max-w-[50px]">
              <Image src={slice1} alt="slice1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
