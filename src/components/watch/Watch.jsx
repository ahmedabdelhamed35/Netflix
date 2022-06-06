import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import Trailer from "E:/myWork/REACT JS/NETFLIX/netflix/src/img/vide1.mp4"
import React from 'react'


export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video"  autoPlay progress controls src={Trailer}></video>

    </div>
    
  );
}