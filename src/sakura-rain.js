class SakuraRain extends HTMLElement {
  constructor() {
    super();
    this.running = false;
    this.injectStyles();
  }

  injectStyles() {
    if (document.getElementById('sakura-rain-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'sakura-rain-styles';
    style.textContent = `
      sakura-rain {
        display: block;
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9999;
      }
      .sakura {
        position: fixed;
        top: -20px;
        font-size: 18px;
        pointer-events: none;
        animation: fall linear forwards;
        opacity: 0.8;
        z-index: 9999;
      }
      @keyframes fall {
        to {
          transform: translateY(110vh)
            translateX(var(--drift))
            rotate(var(--rotation));
        }
      }
    `;
    document.head.appendChild(style);
  }

  connectedCallback() {
    if (this.running) return;
    this.running = true;
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
    
    const randomLeft = Math.random() * 100;
    sakura.style.left = randomLeft + '%';
    
    sakura.style.animationDuration = Math.random() * 4 + 3 + "s";
    sakura.style.opacity = Math.random() * 0.5 + 0.3;
    
    const rotation = (Math.random() - 0.5) * 720;
    sakura.style.setProperty("--rotation", `${rotation}deg`);
    
    const drift = Math.random() * 200 - 100;
    sakura.style.setProperty("--drift", `${drift}px`);
    
    document.body.appendChild(sakura);
    setTimeout(() => sakura.remove(), 10000);
  }

  randomSakura() {
    if (!this.running) return;
    this.spawnSakura();
    const nextSpawn = Math.random() * 2000 + 1000;
    setTimeout(() => this.randomSakura(), nextSpawn);
  }
}

customElements.define("sakura-rain", SakuraRain);