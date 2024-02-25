import gg from "./rengo.png";

function HeroThree() {
  return (
    <>
      <div className="flex justify-center items-center gap-20 h-screen">
        <div className="text-white h-96 w-[29rem]">
          <p className="text-5xl font-bold text-pink-700"> web development</p>
          <br />
          <p className="text-5xl font-bold stroke-red-900 text-stroke">
            {" "}
            web development
          </p>
          <br />
          <p className="text-5xl font-bold stroke-red-900 text-stroke">
            {" "}
            web development
          </p>
          <br />
          <p className="text-5xl font-bold stroke-red-900 text-stroke">
            {" "}
            web development
          </p>
          <br />
          <p className="text-5xl font-bold stroke-red-900 text-stroke">
            {" "}
            web development
          </p>
        </div>
        <div className="h-96">
          <img className="w-96 items-center" src={gg} />
        </div>
      </div>
    </>
  );
}

export default HeroThree;
