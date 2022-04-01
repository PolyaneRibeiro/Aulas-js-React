import React from "react";
import './style.css';

export default function Card({texto}) {

    return (
      <div className='card'>
          {texto}
      </div>
    );
  }