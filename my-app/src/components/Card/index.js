import React from "react";
import './style.css';

export default function Card({ string1, string2, bolleano }) {
  return (
    <div className="card">
      <p>{string1}</p>
      {bolleano && <p>{string2}</p>}
    </div>
  );
}
