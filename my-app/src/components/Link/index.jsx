import React from "react";
import './style.css';

export default function Card({mostrar}) {

    return (
        <>
        {mostrar && (
        <a className='link' href="#">Esse é o link</a>
        )}
        </>

    );
  }