import Image from "next/image";
import { Jumbotron } from "../../../assets";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="xl:w-[958px] md:w-[650px] lg:w-[750px] h-auto bg-color1 sm:w-[550px]  rounded-[10px] text-white absolute top-[180px] ">
        <div className="p-[57px]">
          <h1 className="text-[60px] font-black mb-4">WAYSBUCKS</h1>
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
            <div className="absolute  md:left-[625px] sm:left-[175px] sm:top-[-100px] md:w-[451px] md:h-[324px] md:top-[50px] sm:w-[35%] sm:h-[170px] ">
              <Image
                className="md:rounded-none sm:rounded-[100%]"
                src={Jumbotron}
                alt="Jumbotron"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
