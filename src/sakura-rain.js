class SakuraRain extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.running = false;
  }

  connectedCallback() {
    if (this.running) return;
    this.running = true;

    this.shadow.innerHTML = `
      <style>
        .sakura {
          position: fixed;
          top: -20px;
          font-size: 18px;
          pointer-events: none;
          animation: fall linear forwards;
          opacity: 0.8;
        }

        @keyframes fall {
          to {
            transform: translateY(110vh)
              translateX(var(--drift))
              rotate(var(--rotation));
          }
        }
      </style>
    `;

    this.randomSakura();
  }

  disconnectedCallback() {
    this.running = false;
  }

  spawnSakura() {
    if (!this.running) return;

    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
    sakura.innerText = this.getAttribute("emoji") || "🌸";

    sakura.style.left = Math.random() * window.innerWidth + "px";
    sakura.style.animationDuration = Math.random() * 4 + 3 + "s";
    sakura.style.opacity = Math.random() * 0.5 + 0.3;

    const rotation = (Math.random() - 0.5) * 720;
    sakura.style.setProperty("--rotation", `${rotation}deg`);

    const drift = (Math.random() - 0.5) * 100;
    sakura.style.setProperty("--drift", `${drift}px`);

    document.body.appendChild(sakura);

    setTimeout(() => sakura.remove(), 10000);
  }

  randomSakura() {
    if (!this.running) return;

    this.spawnSakura();

    const nextSpawn = Math.random() * 3000 + 2000;
    setTimeout(() => this.randomSakura(), nextSpawn);
  }
}

customElements.define("sakura-rain", SakuraRain);
