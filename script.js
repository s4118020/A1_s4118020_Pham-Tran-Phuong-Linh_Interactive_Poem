window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY < 2000) return;

  const layers = document.querySelectorAll("img[data-speed]");

  layers.forEach(layer => {
    const speed = parseFloat(layer.getAttribute("data-speed"));
    const direction = ["mid", "midhouse", "lamps"].some(cls => layer.classList.contains(cls)) ? -1 : 1;
    const yOffset = (scrollY - 2000) * (speed / 5) * direction;

    const xTransform = layer.dataset.x === "center" ? "translateX(-50%) " : "";

    layer.style.transform = `${xTransform}translateY(${yOffset}px)`;
  });
});

const toggle = document.querySelector(".audiotoggle");
const audio = document.getElementById("bg-audio");
let isPlaying = false;

toggle.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;

  } else {
    audio.play();
    isPlaying = true;
  }
});

const eyeBox = document.querySelector(".eye-box");
const eyeball = document.getElementById("eyeball");

document.addEventListener("mousemove", (e) => {
  const eyeRect = eyeBox.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;


  const dx = e.clientX - eyeCenterX;
  const dy = e.clientY - eyeCenterY;

  const angle = Math.atan2(dy, dx);
  const maxOffset = 18; 

  const offsetX = Math.cos(angle) * maxOffset;
  const offsetY = Math.sin(angle) * maxOffset;

  eyeball.style.left = `${25 + offsetX}px`;
  eyeball.style.top = `${25 + offsetY}px`;
});

const devil = document.querySelector(".thedevil");

const scrollStart = 200;      
const scrollDistance = 830;  
const fixedTop = 297;        

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY < scrollStart) {
    
    devil.style.position = "absolute";
    devil.style.top = fixedTop + "px";
  } else if (scrollY < scrollStart + scrollDistance) {
    
    devil.style.position = "fixed";
    devil.style.top = (fixedTop + scrollY - scrollStart) + "px";
  } else {
    
    devil.style.position = "absolute";
    devil.style.top = (fixedTop + scrollDistance) + "px";
  }
});

const falling = document.querySelector(".falling");
  const endSection = document.getElementById("end-section");

  const stopTop = 1000; 
  const originalTop = parseInt(falling.style.top); 

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const endTop = endSection.offsetTop;

    if (scrollY >= endTop) {
      
      const offset = Math.min(scrollY - endTop, stopTop - originalTop);
      falling.style.top = `${originalTop + offset}px`;
    } else {
      
      falling.style.top = `${originalTop}px`;
    }
  });

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("click-video");

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });