import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home({ title, themes, setThemes }) {
  const [showMenu, setShowMenu] = useState(false);

  const titleref = useRef(null);
  const second = useRef(null);
  const sixth = useRef(null);
  const seventh = useRef(null);

  useGSAP(() => {
    gsap.to(titleref.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.8,
    });
    
    gsap.to([second.current, sixth.current, seventh.current], {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      delay: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <div
      className={`transition-colors duration-500 ${
        themes ? "bg-white text-black" : "bg-black text-white"
      } h-auto w-full overflow-x-hidden top-0 left-0 right-0 z-10`}
    >
      <nav
        className={`transition-colors duration-500 ${
          themes ? "bg-white text-black" : "bg-black text-white"
        } flex items-center h-auto fixed w-full top-0 left-0 right-0 z-10 shadow-lg`}
      >
        <h1
          ref={titleref}
          className="lg:text-6xl text-5xl ml-3 opacity-0 font-bold basis-[55%] md:text-left mx-2 font-stretch-110% text-bl text-[#5305ee] hover:transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          {title}
        </h1>

        <div  className="basis-[45%] mb-4 mt-3 flex justify-end items-center flex-row">
          <button 
            className="lg:hidden mr-6 text-4xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>

          <ul className="items-center px-5 sm:hidden hidden lg:flex text-center text-2xl">
            <li ref={second} className="mx-10 opacity-0 hover:text-[cyan]">
                <Link to="/">Home</Link>
            </li>

            <li ref={sixth} className="mx-10 opacity-0 hover:text-[cyan]">
              <button onClick={() => setThemes(!themes)}>
                {themes ? "☀️" : "🌙"}
              </button>
            </li>

            <li
              ref={seventh}
              className="border-[5] opacity-0 rounded-2xl border-white px-3 py-1 hover:bg-white hover:text-black cursor-pointer"
            >
              <Link to="/registration">👤</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul
        className={`flex flex-col text-center lg:hidden text-3xl ${
          themes ? "bg-white text-black" : "bg-black text-white"
        } transition-all duration-500 ease-in-out mt-20 ${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li className="my-5 hover:text-cyan-400 cursor-pointer">
           <Link to="/">Home</Link>
          </li>

        <li
          className="my-5 hover:text-cyan-400 cursor-pointer"
          onClick={() => setThemes(!themes)}
        >
          {themes ? "🌙 Dark" : "☀️ Light"}
        </li>

        <li className="border-[5] rounded-2xl border-white px-3 py-1 hover:bg-white hover:text-black cursor-pointer">
          <Link to="/registration">👤</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

