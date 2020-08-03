import React, { useRef, useEffect } from "react";
// import "./styles.css";
import BScroll from "@better-scroll/core";
import PullDown from '@better-scroll/pull-down'
import './App.css'
const data = [
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  "😀 😁 😂 🤣 😃😄 😅 😆 😉 😊😄 😅 😆 😉 😊😄 😅 😆 😉 😊",
  
];
BScroll.use(PullDown)
export default function App() {
  const scroll = useRef(null);
 
  useEffect(() => {
    new BScroll('.scroll-wrapper', {
      scrollX:true,
      scrollY: true,
      click: true,
      pullDownRefresh: {
        threshold: 90,
            stop: 0
      },
      probeType: 3 // listening scroll hook
    });
  });
  return (
    <div class="core-container">
      <div class="scroll-wrapper" ref={scroll}>
        <div class="scroll-content">
          {data.map((item, i) => {
            return (
              <div className="scroll-item" key={i}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
