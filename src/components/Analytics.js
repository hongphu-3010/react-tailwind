import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

function Analytics() {
  return (
    <div id="company" className="w-full bg-white py-6 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col gap-2">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="font-medium">
            Officia ex consequat duis fugiat incididunt amet esse ullamco nulla
            anim cupidatat cillum. Exercitation voluptate Lorem ea fugiat
            reprehenderit pariatur. Amet quis aliqua in laboris aute. In mollit
            exercitation aliquip incididunt.
          </p>
          <Button
            content="Get Started"
            bgColor="bg-black"
            textColor="text-[#00df9a]"
            mx="md:mx-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
