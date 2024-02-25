import image from "./gg.png";

function HeroTwo() {
  return (
    <>
      <div className="flex justify-center items-center gap-20 h-screen">
        <div className="h-96">
          <img className="w-96 items-center" src={image} />
        </div>
        <div className="text-white items-start justify-start h-96 w-[29rem]">
          <p className="text-5xl font-bold  leading-tight">
            think outside of the sword space
          </p>
          <p className="text-xl mt-5 text-pink-700 font-semibold">
            — who we are
          </p>
          <p className="mt-3">
            do Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            neque amet, perspiciatis odit minus, animi cumque temporibus est
          </p>
          <br />
          <button className="bg-pink-800 w-24 h-10 text-center rounded-md text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-indigo-300 hover:text-black duration-300">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroTwo;
