import React, { useState, useEffect } from "react";
import axios from 'axios'

function Home() {

  return (
    <div className="app">
      <div className="box">
        <h2>localStorage</h2>
      </div>
      <div className="box">
        <h2>sessionStorage</h2>
      </div>
    </div>

  );
}

export default Home;