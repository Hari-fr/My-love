// Create blooming lilies
function createLily(x, y, size, delay) {
  const lily = document.createElement('div');
  lily.className = 'lily';
  lily.style.left = x + '%';
  lily.style.top = y + '%';
  lily.style.width = size + 'px';
  lily.style.height = size + 'px';
  lily.style.animationDelay = delay + 's';
  
  lily.innerHTML = `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="petalGrad${delay}" cx="50%" cy="30%">
          <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
          <stop offset="40%" style="stop-color:#ffb3d9;stop-opacity:0.95" />
          <stop offset="100%" style="stop-color:#ff8ec4;stop-opacity:0.9" />
        </radialGradient>
        <radialGradient id="petalGrad2${delay}" cx="50%" cy="30%">
          <stop offset="0%" style="stop-color:#fff5f8;stop-opacity:1" />
          <stop offset="40%" style="stop-color:#ffc2e0;stop-opacity:0.95" />
          <stop offset="100%" style="stop-color:#ffb3d9;stop-opacity:0.9" />
        </radialGradient>
      </defs>
      <g transform="translate(100, 100)">
        <!-- Layer 1: Outer petals (3 petals) -->
        <g transform="rotate(0)">
          <path class="petal" d="M 0,-45 Q -15,-35 -18,-15 Q -15,-5 0,0 Q 15,-5 18,-15 Q 15,-35 0,-45 Z" 
                fill="url(#petalGrad${delay})" stroke="#ffb3d9" stroke-width="0.5" 
                style="animation-delay: ${delay}s">
            <animate class="petal-inner" attributeName="d" dur="4s" fill="freeze" begin="${delay}s"
                     from="M 0,-45 Q -15,-35 -18,-15 Q -15,-5 0,0 Q 15,-5 18,-15 Q 15,-35 0,-45 Z"
                     to="M 0,-50 Q -20,-38 -22,-12 Q -18,-3 0,0 Q 18,-3 22,-12 Q 20,-38 0,-50 Z"/>
          </path>
        </g>
        <g transform="rotate(120)">
          <path class="petal" d="M 0,-45 Q -15,-35 -18,-15 Q -15,-5 0,0 Q 15,-5 18,-15 Q 15,-35 0,-45 Z" 
                fill="url(#petalGrad2${delay})" stroke="#ffcce6" stroke-width="0.5"
                style="animation-delay: ${delay + 0.3}s">
            <animate class="petal-inner" attributeName="d" dur="4s" fill="freeze" begin="${delay + 0.3}s"
                     from="M 0,-45 Q -15,-35 -18,-15 Q -15,-5 0,0 Q 15,-5 18,-15 Q 15,-35 0,-45 Z"
                     to="M 0,-50 Q -20,-38 -22,-12 Q -18,-3 0,0 Q 18,-3 22,-12 Q 20,-38 0,-50 Z"/>
          </path>
        </g>
        <g transform="rotate(240)">
          <path class="petal" d="M 0,-45 Q -15,-35 -18,-15 Q -15,-5 0,0 Q 15,-5 18,-15 Q 15,-35 0,-45 Z" 
                fill="url(#petalGrad${delay})" stroke="#ffb3d9" stroke-width="0.5"
                style="animation-delay: ${delay + 0.6}s">
            <animate class="petal-inner" attributeName="d" dur="4s" fill="freeze" begin="${delay + 0.6}s"
                     from="M 0,-45 Q -15,-35 -18,-15 Q -15,-5 0,0 Q 15,-5 18,-15 Q 15,-35 0,-45 Z"
                     to="M 0,-50 Q -20,-38 -22,-12 Q -18,-3 0,0 Q 18,-3 22,-12 Q 20,-38 0,-50 Z"/>
          </path>
        </g>
        
        <!-- Layer 2: Inner petals (3 petals, offset) -->
        <g transform="rotate(60)">
          <path class="petal" d="M 0,-42 Q -13,-33 -15,-13 Q -13,-4 0,0 Q 13,-4 15,-13 Q 13,-33 0,-42 Z" 
                fill="url(#petalGrad2${delay})" stroke="#ffd9ec" stroke-width="0.5"
                style="animation-delay: ${delay + 0.9}s">
            <animate class="petal-inner" attributeName="d" dur="4s" fill="freeze" begin="${delay + 0.9}s"
                     from="M 0,-42 Q -13,-33 -15,-13 Q -13,-4 0,0 Q 13,-4 15,-13 Q 13,-33 0,-42 Z"
                     to="M 0,-48 Q -18,-36 -20,-10 Q -16,-2 0,0 Q 16,-2 20,-10 Q 18,-36 0,-48 Z"/>
          </path>
        </g>
        <g transform="rotate(180)">
          <path class="petal" d="M 0,-42 Q -13,-33 -15,-13 Q -13,-4 0,0 Q 13,-4 15,-13 Q 13,-33 0,-42 Z" 
                fill="url(#petalGrad${delay})" stroke="#ffb3d9" stroke-width="0.5"
                style="animation-delay: ${delay + 1.2}s">
            <animate class="petal-inner" attributeName="d" dur="4s" fill="freeze" begin="${delay + 1.2}s"
                     from="M 0,-42 Q -13,-33 -15,-13 Q -13,-4 0,0 Q 13,-4 15,-13 Q 13,-33 0,-42 Z"
                     to="M 0,-48 Q -18,-36 -20,-10 Q -16,-2 0,0 Q 16,-2 20,-10 Q 18,-36 0,-48 Z"/>
          </path>
        </g>
        <g transform="rotate(300)">
          <path class="petal" d="M 0,-42 Q -13,-33 -15,-13 Q -13,-4 0,0 Q 13,-4 15,-13 Q 13,-33 0,-42 Z" 
                fill="url(#petalGrad2${delay})" stroke="#ffd9ec" stroke-width="0.5"
                style="animation-delay: ${delay + 1.5}s">
            <animate class="petal-inner" attributeName="d" dur="4s" fill="freeze" begin="${delay + 1.5}s"
                     from="M 0,-42 Q -13,-33 -15,-13 Q -13,-4 0,0 Q 13,-4 15,-13 Q 13,-33 0,-42 Z"
                     to="M 0,-48 Q -18,-36 -20,-10 Q -16,-2 0,0 Q 16,-2 20,-10 Q 18,-36 0,-48 Z"/>
          </path>
        </g>
        
        <!-- Center pistil with stamens -->
        <circle cx="0" cy="0" r="8" fill="#ffd700" opacity="0" style="animation: fadeInCenter 1s ease forwards; animation-delay: ${delay + 2}s"/>
        
        <!-- Stamens (the little stems that stick out) -->
        <g class="stamen" style="animation-delay: ${delay + 2.2}s">
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#e8b923" stroke-width="1.5"/>
          <circle cx="0" cy="-15" r="2.5" fill="#8b4513"/>
        </g>
        <g class="stamen" style="animation-delay: ${delay + 2.3}s" transform="rotate(72)">
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#e8b923" stroke-width="1.5"/>
          <circle cx="0" cy="-15" r="2.5" fill="#8b4513"/>
        </g>
        <g class="stamen" style="animation-delay: ${delay + 2.4}s" transform="rotate(144)">
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#e8b923" stroke-width="1.5"/>
          <circle cx="0" cy="-15" r="2.5" fill="#8b4513"/>
        </g>
        <g class="stamen" style="animation-delay: ${delay + 2.5}s" transform="rotate(216)">
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#e8b923" stroke-width="1.5"/>
          <circle cx="0" cy="-15" r="2.5" fill="#8b4513"/>
        </g>
        <g class="stamen" style="animation-delay: ${delay + 2.6}s" transform="rotate(288)">
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#e8b923" stroke-width="1.5"/>
          <circle cx="0" cy="-15" r="2.5" fill="#8b4513"/>
        </g>
      </g>
    </svg>
  `;
  
  return lily;
}

// Add multiple lilies at different positions
const lilyContainer = document.getElementById('lily-container');
const lilyPositions = [
  {x: 10, y: 15, size: 200, delay: 0},
  {x: 85, y: 25, size: 180, delay: 0.5},
  {x: 5, y: 60, size: 220, delay: 1},
  {x: 90, y: 70, size: 190, delay: 1.5},
  {x: 15, y: 85, size: 210, delay: 2},
  {x: 80, y: 90, size: 170, delay: 2.5},
  {x: 50, y: 50, size: 150, delay: 1.2},
];

lilyPositions.forEach(pos => {
  lilyContainer.appendChild(createLily(pos.x, pos.y, pos.size, pos.delay));
});

// Scrapbook photos with captions
const photos = [
  { src: 'images/photo1.jpg', caption: 'Our first hangout💗', rotation: -3 },
  { src: 'images/photo2.jpg', caption: 'When you made me laugh so hard 😊', rotation: 2 },
  { src: 'images/photo3.jpg', caption: 'Our first bike ride🏍️', rotation: -2 },
  { src: 'images/photo6.jpg', caption: 'Our first adventure together 💕', rotation: 4 },
  { src: 'images/photo5.jpg', caption: 'Our first photobooth 📸', rotation: -4 },
  { src: 'images/photo4.jpg', caption: 'Forever my happy place 🌈', rotation: 3 },
  { src: 'images/photo7.jpg', caption: 'Love this memory 💫', rotation: -1 },
  { src: 'images/photo8.jpg', caption: 'Us being silly (as always) 😄', rotation: 2 },
  { src: 'images/photo9.jpg', caption: 'You light up my world 🌟', rotation: -3 },
  { src: 'images/photo10.jpg', caption: 'First pottery date💞', rotation: 1 }
];

const scrapbookGrid = document.getElementById('scrapbook-grid');
const stickers = ['💕', '⭐', '🌸', '💗', '✨', '🌺'];

photos.forEach((photo, index) => {
  const polaroid = document.createElement('div');
  polaroid.className = 'polaroid';
  polaroid.style.setProperty('--rotation', photo.rotation + 'deg');
  
  const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
  const stickerPosition = Math.random() > 0.5 ? 'sticker-heart' : 'sticker-star';
  
  polaroid.innerHTML = `
    <img src="${photo.src}" alt="Memory ${index + 1}">
    <div class="polaroid-caption">${photo.caption}</div>
    <div class="sticker ${stickerPosition}">${randomSticker}</div>
  `;
  
  scrapbookGrid.appendChild(polaroid);
});

// Typing effect
const letterText = `From the moment you walked into my life,
everything felt softer, warmer, and more beautiful.
Loving you feels effortless,
like it was always meant to be.

You are my sunshine on cloudy days,
my comfort when the world feels heavy,
and my reason to smile every single day.

Forever grateful that I get to love you. ❤️`;

let index = 0;
const speed = 50;
const letterElement = document.getElementById("typed-letter");

function typeLetter() {
  if (index < letterText.length) {
    letterElement.innerHTML += letterText.charAt(index);
    index++;
    setTimeout(typeLetter, speed);
  }
}

setTimeout(typeLetter, 500);

// Theme toggle
const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = () => {
  document.body.classList.toggle("night");
  themeBtn.textContent = document.body.classList.contains("night") ? "☀️ Day" : "🌙 Night";
};

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Name reveal
const name = "Lekhana";
const nameEl = document.getElementById("name-reveal");
let n = 0;

function revealName() {
  if (n < name.length) {
    nameEl.innerHTML += name.charAt(n);
    n++;
    setTimeout(revealName, 120);
  }
}
revealName();

// Reasons I love you
const reasons = [
  "I was sure with from the moment I met you 💖",
  "Your smile lights up my entire world 🌟",
  "You make ordinary moments feel magical ✨",
  "Your eyes tell stories I never want to stop reading 👀",
  "You make me want to be a better person every day 🌷",
  "Your very presence gives me a warmth and comfort🌼",
  "Every moment with you feels like home 🏡",
  "You are my best friend and my true love 💕"
];

let reasonIndex = 0;
const reasonText = document.getElementById("reason-text");
const reasonBtn = document.getElementById("reason-btn");

reasonBtn.onclick = () => {
  reasonText.style.opacity = "0";
  setTimeout(() => {
    reasonText.textContent = reasons[reasonIndex];
    reasonText.style.transition = "opacity 1s ease";
    reasonText.style.opacity = "1";
    reasonIndex = (reasonIndex + 1) % reasons.length;
  }, 500);
};

// No button that runs away
const noBtn = document.getElementById("no-btn");
let noClickCount = 0;

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

noBtn.onclick = () => {
  noClickCount++;
  if (noClickCount >= 3) {
    noBtn.textContent = "Fine, Yes! 💕";
    noBtn.classList.remove("no");
    noBtn.classList.add("yes");
    setTimeout(() => triggerYes(), 500);
  }
};

// Yes button effect
function triggerYes() {
  for (let i = 0; i < 100; i++) {
    const conf = document.createElement("div");
    conf.className = Math.random() > 0.3 ? "confetti heart" : "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    if (!conf.classList.contains("heart")) {
      conf.style.background = ["#ff9dbb", "#ffe6ee", "#ff6b9d", "#ffc2d4"][Math.floor(Math.random() * 4)];
      conf.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    }
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3000);
  }

  const msg = document.getElementById("yes-message");
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("show"), 300);

  if (!music.paused) {
    music.volume = 0.8;
  }
}

document.querySelectorAll(".yes").forEach(btn => {
  btn.onclick = triggerYes;
});

// Music control
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    btn.textContent = "▶ Play Music";
  }
};

document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => {
      btn.textContent = "⏸ Pause Music";
    }).catch(() => {});
  }
}, { once: true });

// Floating petals
for (let i = 0; i < 20; i++) {
  let petal = document.createElement("div");
  petal.className = "petal-float";
  petal.textContent = ["🌸", "🌻", "🌷", "🌹", "💕"][Math.floor(Math.random() * 5)];
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 10 + Math.random() * 15 + "s";
  petal.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(petal);
}
