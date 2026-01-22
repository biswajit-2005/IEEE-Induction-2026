import Home from "./home";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "./footer";

function Middle({ themes, setThemes }) {
  const welcome = useRef(null);
  const paragraph = useRef(null);
  const button = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      welcome.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 2.5 },
    );
    tl.fromTo(
      paragraph.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );
    tl.fromTo(
      button.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "bounce.out" },
    );
  }, []);

  return (
    <>
      {/* Pass theme props to Home */}
      <Home title="ANWESHAN" themes={themes} setThemes={setThemes} />

      <div
        className={`flex flex-col items-center justify-center min-h-screen px-0 ${
          themes ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1 ref={welcome} className="text-5xl font-bold mb-6 mt-24">
          Welcome to IEEE
        </h1>
        <p ref={paragraph} className="text-2xl mb-6 text-center px-4">
          Join us in advancing technology for humanity. Explore our events,
          publications, and membership benefits.
        </p>
        <Link
          to="/registration"
          ref={button}
          className="bg-blue-600 text-white mt-5 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Register Now
        </Link>

        <Footer themes={themes} />
      </div>
    </>
  );
}

export default Middle;
