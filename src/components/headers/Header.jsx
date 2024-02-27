function Header() {
  return (
    <>
      <div className="flex justify-center w-full h-14 p-[15px] gap-5 items-center">
        <div>
          <p className="text-2xl  text-white font-thin items-center mr-5">
            Z swords
          </p>
        </div>
        <div className="flex justify-start items-start gap-5 text-white">
          <a href="">home</a>
          <a href="">studio</a>
          <a href="/profile">profile</a>
          <a href="">contact</a>
        </div>

        <div className="flex justify-items-end items-end pl-[40rem] gap-4">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
            </svg>
          </button>
          <button className="bg-pink-600 w-20 h-8 text-center rounded-md text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-indigo-300 hover:text-black duration-300">
            Hire now
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
