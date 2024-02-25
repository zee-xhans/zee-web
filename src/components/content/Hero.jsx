import image from "./pedang.png";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-20 h-screen">
        <div className="text-white  h-96 w-[26rem]">
          <p className="text-5xl font-bold leading-tight">
            Think. make. solve.
          </p>
          <p className="text-xl mt-5 text-pink-700 font-semibold">
            — what we do
          </p>
          <p className="mt-3">
            do Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            neque amet, perspiciatis odit minus, animi cumque temporibus est
          </p>
          <br />
          <button className="bg-pink-800 w-24 h-10 text-center rounded-md text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 hover:text-black duration-300">
            learn more
          </button>
        </div>
        <div className="h-96">
          <img className="w-96" src={image} />
        </div>
      </div>
    </>
  );
}

export default Hero;
