import { BiSolidMap } from "react-icons/bi";

const ServiceCart = ({item}) => {
  const {  name,img, countryName,price,longDescription } = item;

  return (
    <div>
      <div className="card w-96 h-[480px] p-4 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="mt-2">
            <p className="text-2xl font-bold">{name}</p>
           <div className="flex  items-center gap-1">
            <BiSolidMap className="text-cyan-400 text-xl" />
           <p className="text-gray-500 text-lg">{countryName}</p>
           </div>
           <hr  className="border-2 m-3"/>
           <div className="flex justify-between items-center">
           <div className="">
           <p className="text-xl font-semibold">CLATURAL</p>
            <h2 className=" flex gap-3 font-semibold">
            RELEX
            <div className="badge bg-cyan-400">+1</div>
          </h2>
           </div>
          <p className="font-bold text-2xl">{price}</p>
           </div>
           <hr  className="border-2 m-3"/>
        </div>
        <div className="card-body">
          
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
