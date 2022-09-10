import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Button from "./Button";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 gap-y-16">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single}></img>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="p-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="p-2 border-b mx-8">1 Granted User</p>
            <p className="p-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <Button content={"Start Trial"} />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double}></img>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="p-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="p-2 border-b mx-8">1 Granted User</p>
            <p className="p-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <Button
            content={"Start Trial"}
            bgColor="bg-black"
            textColor="text-[#00df9a]"
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple}></img>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="p-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="p-2 border-b mx-8">1 Granted User</p>
            <p className="p-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <Button content={"Start Trial"} />
        </div>
      </div>
    </div>
  );
}

export default Cards;

// 58:39
