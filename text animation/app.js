const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.out" },
});

tl.fromTo(
  ".hero",
  { scale: 1.5, borderRadius: "0rem" },
  { scale: 1, borderRadius: "2rem", duration: 2, ease: "elastic.out(1.5,1)" }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(
  ".cta-btn",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: "linear" },
  "<"
);

// Split letters

let title = document.querySelector(".title");
let letters = title.textContent.split("");
title.textContent = "";
letters.forEach((letter) => {
  title.innerHTML += `<span class="letter">${letter}</span>`;
});
gsap.set(".letter", { display: "inline-block" });

tl.fromTo(
  ".letter",
  { y: "100%" },
  { y: 0, stagger: 0.05, ease: "back.out(2)" }
);
