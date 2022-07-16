// Pin first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    pin: true,
    pinSpacing: false,
  },
});
// Highlight text
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-20%",
    end: "40%",
    scrub: true,
  },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.4)" },
  { color: "rgba(255,255,255,1)", stagger: 1 }
);
const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "0%",
    end: "80%",
    scrub: true,
  },
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

// Third page
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-40%",
    end: "20%",
    scrub: true,
  },
});
tlSplit.fromTo(".large-phone", { x: "50%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-50%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
  ".third-text-left",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);
tlSplit.fromTo(
  ".third-text-right",
  { x: -50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);
const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
  },
});

// Colors
const swatches = document.querySelectorAll(".swatch");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".gallery-container");

let topIndex = 3;
let current_swatch = ".blue";

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let name = "." + e.target.getAttribute("swatch");
    if (name !== current_swatch) {
      current_swatch = name;
      gsap.set(name, { zIndex: topIndex });
      gsap.fromTo(name, { opacity: 0 }, { opacity: 1, duration: 1 });
      topIndex++;
      gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
    }
  });
});

// Video animation
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    scrub: true,
    pin: true,
    end: "150%",
  },
});
tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
tlVideo.fromTo(
  ".fifth-left h3, .fifth-right h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  "<"
);

// Sixth page
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-25%",
    end: "30%",
    scrub: true,
  },
});
tlParallax.fromTo(".photo-description", { y: 0 }, { y: -100, duration: 0.5 });
tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -50 }, "<");
tlParallax.fromTo(".photo-video", { y: 0 }, { y: -250 }, "<");
