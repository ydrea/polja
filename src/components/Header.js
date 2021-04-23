import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* {<p>wee {user.email} </p>} */}
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/kontakt">Kontakt</Link>
      </div>
      <div>
        <Link to="/adresar">Adresar</Link>
      </div>
      <div>
        <Link to="/kontakt/detalji">Detalji</Link>
      </div>
    </div>
  );
}
