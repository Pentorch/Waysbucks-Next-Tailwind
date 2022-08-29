import Image from "next/image";
import { Jumbotron, slice1, slice2, slice3, slice4 } from "../../../assets";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="xl:w-[958px] md:w-[650px] lg:w-[750px] h-auto bg-color1 sm:w-[550px]  rounded-[10px] text-white absolute top-[180px] ">
        <div className="p-[57px]">
          <div className="absolute md:top-0 md:left-0 md:max-w-[100%] sm:top-0 sm:left-0 sm:max-w-[80px]">
            <Image src={slice4} alt="slice4" />
          </div>
          <div className="absolute sm:top-0 md:right-[170px] sm:right-[-10px] sm:max-w-[120px] md:max-w-[100%]">
            <Image src={slice3} alt="slice3" />
          </div>
          <p className="text-[60px] font-black mb-4">WAYSBUCKS</p>
          <p className="mb-7 text-2xl font-light">
            Things are changing, but we’re still here for you
          </p>
          <div className="text-lg font-normal">
            <p>We have temporarily closed our in-store cafes, but select</p>
            <p>grocery and drive-thru locations remaining open.</p>
            <p>
              <b>Waysbucks</b>&nbsp; Drivers is also available for delivery.
            </p>
            <br />
            <p>Let’s Order...</p>
            <div className="absolute md:max-w-[100%] md:bottom-[-8px] md:right-0 sm:bottom-[-8px] sm:right-0 sm:max-w-[130px]">
              <Image src={slice2} alt="slice2" />
            </div>
            <div className="absolute  md:left-[625px] sm:left-[175px] sm:top-[-100px] md:w-[451px] md:h-[324px] md:top-[50px] sm:w-[35%] sm:h-[180px] ">
              <Image
                className="md:rounded-none sm:rounded-[100%]"
                src={Jumbotron}
                alt="Jumbotron"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="absolute md:max-w-[100%] md:bottom-[-8px] md:left-[450px] sm:bottom-[-10px] sm:left-[220px] sm:max-w-[80px]">
              <Image src={slice1} alt="slice1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
