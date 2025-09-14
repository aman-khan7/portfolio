import React from "react";

const Footer: React.FC = () => (
  <footer className="py-6 bg-green-800 text-white text-center">
    <p className="font-serifHeading">
      “Indeed, Allah is beautiful and loves beauty.”
    </p>
    <p className="mt-2 font-body">© {new Date().getFullYear()} Aman Khan</p>
  </footer>
);

export default Footer;
