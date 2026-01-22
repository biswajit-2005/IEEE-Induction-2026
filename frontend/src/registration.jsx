import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Home from "./home.jsx";
import Dashboard from "./dashboard.jsx";

function Registration({ themes, setThemes }) {
  const heading = useRef(null);
  const full_name = useRef(null);
  const email_ref = useRef(null);
  const regd_ref = useRef(null);
  const branch_ref = useRef(null);
  const year_ref = useRef(null);
  const section_ref = useRef(null);
  const phone_ref = useRef(null);
  const submit = useRef(null);
  const tech_ref = useRef(null);
  const nontech_ref = useRef(null);

  const [entername, setEntername] = useState("");
  const [email, setEmail] = useState("");
  const [regd, setRegd] = useState("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [technical, setTechnical] = useState("");
  const [nonTechnical, setNonTechnical] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://ieee-induction-2026.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: entername,
            email: email,
            registration_number: regd,
            phone_number: phone,
            Branch: branch,
            Year: year,
            section: section,
            technical: technical,
            nontechnical: nonTechnical,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      toast.success("Registration Successful!");
      console.log("Response:", data);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        heading.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" },
      )
      .fromTo(full_name.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(email_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(regd_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(branch_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(year_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(section_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(tech_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(nontech_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(phone_ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(
        submit.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" },
      );
  }, []);

  return (
    <>
      <Home title="IEEE" themes={themes} setThemes={setThemes} />

      <div
        className={`min-h-screen flex flex-col items-center justify-center px-4 ${
          themes ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1 ref={heading} className="text-4xl font-bold mb-6">
          Registration
        </h1>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div ref={full_name} className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input
              value={entername}
              onChange={(e) => setEntername(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black shadow-black "
            />
          </div>

          <div ref={email_ref} className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            />
          </div>

          <div ref={regd_ref} className="mb-4">
            <label className="block mb-2">Registration Number</label>
            <input
              value={regd}
              onChange={(e) => setRegd(e.target.value)}
              type="phone"
              placeholder="Enter your Regd.no"
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            />
          </div>

          <div ref={branch_ref} className="mb-4">
            <label className="block mb-2">Branch</label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            >
              <option value="" disabled>
                Select your branch
              </option>
              <option value="CSE">CSE</option>
              <option value="CSE_AIML">CSE AIML</option>
              <option value="ETC">ETC</option>
              <option value="EEE">EEE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
              <option value="FS">FS</option>
              <option value="BM">BM</option>
              <option value="PE">PE</option>
            </select>
          </div>

          <div ref={year_ref} className="mb-4">
            <label className="block mb-2">Year</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            >
              <option value="" disabled>
                Select your year
              </option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          <div ref={section_ref} className="mb-4">
            <label className="block mb-2">Section</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            >
              <option value="" disabled>
                Select your section
              </option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              <option value="D">Section D</option>
            </select>
          </div>

          <div ref={tech_ref} className="mb-4">
            <label className="block mb-2">Technical Domain</label>
            <select
              value={technical}
              onChange={(e) => setTechnical(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            >
              <option value="" disabled>
                Choose your technical domain
              </option>
              <option value="Computer">Computer Society</option>
              <option value="Electronics">Electronics and electrical</option>
            </select>
          </div>
          <div ref={nontech_ref} className="mb-4">
            <label className="block mb-2">Non-Technical Domain</label>
            <select
              value={nonTechnical}
              onChange={(e) => setNonTechnical(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            >
              <option value="" disabled>
                Choose your Non-Technical domain
              </option>
              <option value="GD">GD</option>
              <option value="Video_editing">Video Editing</option>
              <option value="Content">Content</option>
            </select>
          </div>

          <div ref={phone_ref} className="mb-4">
            <label className="block mb-2">Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Enter Your Phone Number"
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
            />
          </div>

          <ToastContainer />

          <button
            type="submit"
            ref={submit}
            disabled={loading}
            className={`rounded-2xl px-6 mt-5 py-2 text-white w-full font-semibold transition-all ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
