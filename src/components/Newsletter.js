import Button from "./Button";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 mt-5">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & trick to optimize your flow?
          </h1>
          <p>Sign up to out newsletter and state up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-3 sm:mr-3 rounded-md text-black w-full"
            />
            <Button content="Notify Me" />
          </div>
          <p>
            We care bout the protection of your data. Read out{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
