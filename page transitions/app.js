// Create timelines
const tlLeave = gsap.timeline({
  defaults: { duration: 0.75, ease: "power2.inOut" },
});
const tlEnter = gsap.timeline({
  defaults: { duration: 0.75, ease: "power2.inOut" },
});

const leaveAnimation = (current, done) => {
  const product = current.querySelector(".image-container");
  const text = current.querySelector(".showcase-text");
  const circles = current.querySelectorAll(".circle");
  const arrow = current.querySelector(".showcase-arrow");
  return (
    tlLeave.to(arrow, { opacity: 0, y: 200 }),
    tlLeave.to(
      circles,
      {
        opacity: 0,
        y: -50,
        stagger: 0.2,
        ease: "back.out(1.7)",
        duration: 1,
        onComplete: done,
      },
      "<"
    ),
    tlLeave.to(product, { opacity: 0, y: 100 }, "<"),
    tlLeave.to(text, { opacity: 0, y: 100 }, "<")
  );
};

const enterAnimation = (current, gradient) => {
  const product = current.querySelector(".image-container");
  const text = current.querySelector(".showcase-text");
  const circles = current.querySelectorAll(".circle");
  const arrow = current.querySelector(".showcase-arrow");
  return (
    tlLeave.from(arrow, { opacity: 0, y: 200 }),
    tlLeave.to("body", { background: gradient }, "<"),
    tlLeave.from(
      circles,
      {
        opacity: 0,
        y: -100,
        stagger: 0.2,
        ease: "back.out(1.7)",
        duration: 1,
      },
      "<"
    ),
    tlLeave.fromTo(product, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<"),
    tlLeave.fromTo(text, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<")
  );
};

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "fade",
      from: { namespace: ["handbag", "hat", "boot", "product"] },
      to: { namespace: ["handbag", "hat", "boot"] },
      once(data) {
        let done = this.async();
        let next = data.next.container;
        let gradient = setGradient(data.next.namespace);
        gsap.set("body", { background: gradient });
        enterAnimation(next, gradient);
        done();
      },
      leave(data) {
        let done = this.async();
        leaveAnimation(data.current.container, done);
      },
      enter(data) {
        let gradient = setGradient(data.next.namespace);
        enterAnimation(data.next.container, gradient);
      },
    },
    {
      name: "product-transition",
      from: { namespace: ["handbag", "boot", "hat"] },
      to: { namespace: ["product"] },
      enter(data) {
        let next = data.next.container;
        productEnterAnimation(next);
      },
    },
    {
      name: "product-transition-out",
      sync: true,
      from: { namespace: ["product"] },
      to: { namespace: ["handbag", "boot", "hat"] },
      enter(data) {
        let next = data.next.container;
        enterAnimation(next);
      },
      leave(data) {
        let done = this.async();
        let cur = data.current.container;
        productLeaveAnimation(cur, done);
      },
    },
  ],
});

function productEnterAnimation(next, done) {
  tlEnter.fromTo(next, { y: "100%" }, { y: "0%", duration: 1 });
  tlEnter.fromTo(
    ".card",
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.2, onComplete: done },
    "<50%"
  );
}
function productLeaveAnimation(cur, done) {
  tlEnter.fromTo(cur, { y: "0%" }, { y: "100%", duration: 0.5 });
  tlEnter.fromTo(
    ".card",
    { y: 0, opacity: 1 },
    { y: 10, opacity: 0, stagger: 0.2, onComplete: done },
    "<50%"
  );
}

function setGradient(name) {
  switch (name) {
    case "handbag":
      return "linear-gradient(260deg, #b75d62, #754d4f)";
    case "boot":
      return "linear-gradient(260deg, #5d8cb7, #4c4f70)";
    case "hat":
      return "linear-gradient(260deg, #b27a5c, #7f5450)";
  }
}
