import React from "react";
import Home from "./home";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Dashboard({ themes, setThemes }) {
  const udates = useRef(null);
  const wpgroup = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      wpgroup.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 },
    );
    tl.fromTo(
      udates.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 },
    );
  }, []);

  return (
    <>
      <Home title="IEEE Dashboard" themes={themes} setThemes={setThemes} />

      <div
        className={`min-h-screen px-4 pt-28 ${
          themes ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {/* Welcome */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Registration Succesfully Completed <br />
          🎉🎉
        </h1>

        {/* WhatsApp Section */}
        <div
          ref={wpgroup}
          className=" max-w-3xl mx-auto bg-blue-500 text-white rounded-2xl p-6 mb-8 shadow-lg"
        >
          <h2 className=" flex justify-center text-2xl font-semibold mb-3">
            📩Check Your Email for whatsapp group link <br />
            📢 Join Our WhatsApp Group
          </h2>
          <p className="mb-4 flex justify-center">
            Stay updated with events, meetings, and announcements.
          </p>
          {/* <div className="flex justify-center flex-col sm:flex-row gap-4 mb-4">
            <a
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-xl hover:scale-105 transition"
            >
              Join Technical WhatsApp Group
            </a>
            <a
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-xl hover:scale-105 transition"
            >
              Join Non-Technical WhatsApp Group
            </a>
          </div> */}
          <p className="text-sm">
            *Clicking the group link will redirect you to WhatsApp.
          </p>
        </div>

        <div
          ref={udates}
          className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">📌 Latest Updates</h2>

          <ul className="space-y-3">
            <li className="border-b border-gray-600 pb-2">
              💡 IEEE Quiz Exam –{" "}
              <span className="text-cyan-400">31st Jan-2 Feb</span>
            </li>
            <li className="border-b border-gray-600 pb-2">
              👨‍🎓 PI (Online)– <span className="text-cyan-400">5th-7th Feb</span>
            </li>
            <li>
              🏆 PI (Offline)- <span className="text-cyan-400">9th-10 Feb</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
