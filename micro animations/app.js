const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "Power3.inOut" } });

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
gsap.set(".wave", { opacity: 0 });
document.querySelector(".home").addEventListener("click", () => {
  tl.to(".home-svg", { scale: 0.9, yoyo: true, repeat: 1 });
  tl.fromTo(
    ".feather",
    { scale: 0, y: 0 },
    { scale: 1.5, y: 20, duration: 1 },
    "<"
  );
  tl.fromTo(".right-feather", {}, { x: 5 }, "<");
});

document.querySelector(".notifications").addEventListener("click", () => {
  tl.fromTo(
    ".notification-svg",
    { rotation: 5, transformOrigin: "top center" },
    { rotation: 0, duration: 2, ease: "elastic.out(5,0.2)" }
  );
  tl.fromTo(
    ".ringer",
    { rotation: 5, x: 0.5, transformOrigin: "top center" },
    { rotation: 0, x: 0, duration: 1.5, ease: "elastic.out(5,0.2)" },
    "<"
  );
  tl.fromTo(
    ".wave",
    { opacity: 1, scale: 0.5, transformOrigin: "bottom" },
    { opacity: 0, scale: 1.5 },
    "<"
  );
});

gsap.set(".note", { transformOrigin: "center" });
document.querySelector(".messages").addEventListener("click", () => {
  tl.to(".messages-svg", { scale: 0.9, yoyo: true, repeat: 1 });
  tl.fromTo(".flap", { scale: 1, transformOrigin: "top" }, { scale: -1 }, "<");
  tl.fromTo(".note", { y: 0, opacity: 1 }, { y: -40, opacity: 0 }, "<50%");
  tl.fromTo(
    ".flap",
    { scale: -1, transformOrigin: "top" },
    { scale: 1, delay: 0.5 }
  );
});
