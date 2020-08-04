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
   let scroll =  new BScroll('.scroll-wrapper', {
      scrollX:true,
      click: true,
      pullDownRefresh: {
        threshold: 90,
            stop: 0
      },
      probeType: 0 // listening scroll hook
    });
    let val = document.getElementsByClassName('top')[0]
    scroll.on('scroll',(position)=>{
      console.log(position)
      if(position.y>=90){
        val.innerHTML='松手刷新'
      }
      else{
        val.innerHTML='下拉刷新'
      }
    })
    scroll.on('touchEnd',(position)=>{
      console.log(position,'aaaaaaa')
      if(position.y>=90){
       alert('数据刷新成功')
      }
    })
  });

  return (
    <div className="core-container">
      <div className="scroll-wrapper" ref={scroll}>
        <div className="scroll-content">
          <div className="top">下拉刷新</div>
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
