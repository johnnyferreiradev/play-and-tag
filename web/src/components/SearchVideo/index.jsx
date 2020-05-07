import React, { useState } from "react";

import "./styles.css";

export default function SearchVideo({set}) {
  const [urlLocal, setUrlLocal] = useState("");

  return (
    <div className="search">
      <input
        value={urlLocal}
        onChange={(e)=>{setUrlLocal(e.target.value)}}
        type="text"
        placeholder="Insira a URL do seu video. Ex: https://video.mp4"
      />
      <div className="button">
        <button onClick={()=>set(urlLocal)} type="button">
          Buscar
        </button>
      </div>
    </div>
  );
}
