import UseHook from "../CustomHook/UseHook";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [data] = UseHook();
//   console.log(data);
console.log(data)

  return (
    <div className="m-10">
        <h2 className="text-2xl font-semibold mb-8">Most visited destination</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
            data?.map((item)=><ServiceCart key={item.id} item={item}></ServiceCart>)
        }
     
    </div>
    </div>
  );
};

export default Services;
