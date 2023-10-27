import video from "../../public/Vedio/waves_-_22183 (540p).mp4";
import { CiLocationOn } from "react-icons/ci";
import { BiFilterAlt } from "react-icons/bi";

const Banner = () => {
  return (
    <div>
      <section className="relative w-full">
        <video
          src={video}
          muted
          autoPlay
          loop
          className="w-full"
          type="video/mp4"
        ></video>
        <div className="text-white w-5/6 ml-[35px] md:ml-24 lg:ml-32 absolute top-10 md:top-40 ">
          <p>OUR PACKAGES</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Search your Holiday
          </h2>

          <div className="text-black bg-white p-4 mt-5 rounded-lg  flex md:flex-row flex-col justify-between items-center w-full  mx-auto">
          <div className="">
            <label htmlFor="city">Search your destination</label>
            <div className="flex justify-center items-center">
              <input type="text" placeholder="Enter name here.." className="relative rounded-lg p-1 border-2 bg-gray-100 border-gray-400" />
              <CiLocationOn className="text-2xl absolute text-red-600 left-56 md:left-44 lg:left-44" ></CiLocationOn>
            </div>
          </div>
          <div className="text-black">
            <label htmlFor="city">Select your data:</label>
            <div className="">
              <input type="date" name="" id="" className="rounded-lg p-1 border-2 bg-gray-100 border-gray-400 px-6" />
            </div>
          </div>
          <div className="p-6 bg-white text-black">
            <div className="text-black flex justify-between items-center">
              <label htmlFor="price" >Max price:</label>
              <h2>$5500</h2>
            </div>
            <div className="">
                <input type="range" max='5500' min='1000' name="" id="" className="rounded-lg p-1 border-2 bg-gray-200 border-gray-400"/>
            </div>
          </div>
          </div>
          <div className="ml-32 md:ml-64 lg:ml-[475px] ">
            <button className="btn absolute border-none -bottom-5 text-white bg-cyan-400"><BiFilterAlt className="text-2xl" /> more filters</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
