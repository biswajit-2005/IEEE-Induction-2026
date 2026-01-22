function Footer({ themes }) {
  return (
    <>
      {" "}
      <footer
        className={`h-16 mt-40 flex items-center justify-center transition-colors  ${
          themes ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <p>© 2026 IEEE. All rights reserved.</p>
        <a href="https://ieee-vssut-sb.netlify.app/" className="ml-4 underline">
          learn more
        </a>
      </footer>
    </>
  );
}
export default Footer;
