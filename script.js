const audio = document.getElementById("bgm");
const toggleBtn = document.getElementById("audioToggle");
let isPlaying = true;

function toggleDemo() {
  const demoFlow = document.getElementById("demoFlow");
  const button = document.querySelector(".demo-button");

  if (demoFlow.style.display === "none" || demoFlow.style.display === "") {
    demoFlow.style.display = "block";
    button.textContent = "Sembunyikan Simulasi";

    const steps = demoFlow.querySelectorAll(".flow-step");
    steps.forEach((step, index) => {
      step.style.opacity = "0";
      step.style.transform = "translateX(-30px)";

      setTimeout(() => {
        step.style.transition = "all 0.5s ease-out";
        step.style.opacity = "1";
        step.style.transform = "translateX(0)";
      }, index * 300);
    });
  } else {
    demoFlow.style.display = "none";
    button.textContent = "Mulai Simulasi";
  }
}

// Dynamic speech bubble text change
const nurseSpeeches = [
  '"Selamat pagi, Pak Ahmad. Bagaimana perasaan Bapak hari ini?"',
  '"Apakah ada yang bisa saya bantu untuk Bapak?"',
  '"Saya mengerti kekhawatiran Bapak, mari kita bicarakan bersama."',
  '"Terima kasih sudah mempercayai kami untuk perawatan Bapak."',
];

const patientSpeeches = [
  '"Terima kasih Sus, saya merasa lebih baik..."',
  '"Saya masih agak khawatir tentang kondisi saya."',
  '"Kapan saya bisa pulang ke rumah, Sus?"',
  '"Keluarga saya juga ingin bertanya tentang perawatan."',
];

let speechIndex = 0;
setInterval(() => {
  const nurseElement = document.querySelector(".nurse-speech");
  const patientElement = document.querySelector(".patient-speech");

  nurseElement.innerHTML = `<strong>${
    nurseSpeeches[speechIndex % nurseSpeeches.length]
  }</strong>`;
  patientElement.innerHTML = `<em>${
    patientSpeeches[speechIndex % patientSpeeches.length]
  }</em>`;

  speechIndex++;
}, 4000);

// Animate cards on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".sedini-card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardVisible = 150;

    if (cardTop < window.innerHeight - cardVisible) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".sedini-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {
      card.style.transition = "all 0.8s ease-out";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200 + 1000);
  });
});

// Pastikan audio bisa autoplay di sebagian besar browser
window.addEventListener("DOMContentLoaded", () => {
  audio.volume = 0.5;
  audio.play().catch(() => {
    isPlaying = false;
    toggleBtn.textContent = "🔇";
  });
});

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    toggleBtn.textContent = "🔇";
  } else {
    audio.play();
    toggleBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});
