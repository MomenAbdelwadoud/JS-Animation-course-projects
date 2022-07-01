const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power1.out" },
});

tl.fromTo(
  ".cookie-container",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, ease: "elastic.out(1, 1)" }
);
tl.fromTo(".text", { x: 40, opacity: 0 }, { x: 0, opacity: 1 }, "<50%");
tl.fromTo(
  ".cookie",
  { x: -40, opacity: 0, rotation: "-60deg" },
  { x: 0, opacity: 1, rotation: "0" },
  "<"
);
tl.fromTo(".cookie", {}, { y: -10, rotation: -10, repeat: -1, yoyo: true });
tl.fromTo("#crumbs", {}, { y: -10, repeat: -1, yoyo: true }, "<");

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  gsap.to(".cookie-container", { y: 100, opacity: 0 });
});
