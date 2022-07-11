const tl = gsap.timeline({ defaults: { duration: 1 } });

const containers = document.querySelectorAll(".input-container");

const start =
  "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const end =
  "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

containers.forEach((container) => {
  let input = container.querySelector(".input");
  let line = container.querySelector(".elastic-line");
  let label = container.querySelector(".placeholder");
  input.addEventListener("focus", () => {
    if (!input.value) {
      tl.to(line, { attr: { d: end }, ease: "Power1.easeOut", duration: 0.3 });
      tl.to(line, { attr: { d: start }, ease: "elastic.out(2,0.5)" });
      tl.to(
        label,
        { top: -15, left: 0, scale: 0.8, duration: 0.3, ease: "Power1.out" },
        "<15%"
      );
    }
  });
  document.addEventListener("click", () => {
    if (document.activeElement !== input) {
      if (!input.value) {
        tl.to(
          label,
          {
            top: 0,
            scale: 1,
            duration: 0.3,
            ease: "Power2.easeOut",
          },
          "<70%"
        );
      }
    }
  });
});

containers.forEach((container) => {
  let input = container.querySelector(".input");
  let line = container.querySelector(".elastic-line");
  let label = container.querySelector(".placeholder");
  input.addEventListener("input", (e) => {
    if (e.target.type == "text") {
      if (e.target.value.length > 2) {
        changeColor("#6090e8", line, label);
      } else {
        changeColor("#fe8c99", line, label);
      }
    }
    if (e.target.type == "email") {
      if (validateEmail(e.target.value)) {
        changeColor("#6090e8", line, label);
      } else {
        changeColor("#fe8c99", line, label);
      }
    }
    if (e.target.type == "tel") {
      if (validatePhone(e.target.value)) {
        changeColor("#6090e8", line, label);
      } else {
        changeColor("#fe8c99", line, label);
      }
    }
  });
});

// Validate email with regex
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// Validate phone number with regex
function validatePhone(phone) {
  var re = /^\d{10}$/;
  return re.test(String(phone));
}

// Change color to validate
function changeColor(color, line, label) {
  tl.to(line, { attr: { stroke: color }, duration: 0.3 });
  tl.to(label, { color: color, duration: 0.3 }, "<");
}

// Checkbox animation

const checkbox = document.querySelector(".checkbox");
const tl2 = gsap.timeline({ defaults: { duration: 0.5 } });
const tickMarkPath = document.querySelector(".tick-mark path");
const pathLength = tickMarkPath.getTotalLength();

gsap.set(tickMarkPath, {
  strokeDasharray: pathLength,
  strokeDashoffset: pathLength,
  scale: 0.7,
  transformOrigin: "center",
});

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    tl2.to(".checkbox-fill", { top: "0%", ease: "Power1.easeOut" });
    tl2.to(
      tickMarkPath,
      {
        strokeDashoffset: 0,
        ease: "Power1.easeOut",
      },
      "<50%"
    );
    tl2.to(".checkbox-label", { color: "#6090e8" }, "<");
  } else {
    tl2.to(".checkbox-fill", { top: "100%", ease: "Power1.easeOut" });
    tl2.to(
      tickMarkPath,
      {
        strokeDashoffset: pathLength,
        ease: "Power1.easeOut",
      },
      "<50%"
    );
    tl2.to(".checkbox-label", { color: "#777" }, "<");
  }
});

// Animate character
gsap.set("#eye", { transformOrigin: "center" });
gsap.fromTo(
  "#eye",
  { scaleY: 1 },
  { scaleY: 0.5, repeatDelay: 1, yoyo: true, repeat: -1, duration: 0.5 },
  "<"
);
gsap.fromTo(
  "#eyebrow",
  { y: 0 },
  { y: -1, repeat: -1, yoyo: true, repeatDelay: 1, duration: 0.5 },
  "<"
);

// Submitting the form
const btn = document.querySelector("button");
const tl3 = gsap.timeline({
  defaults: { duration: 0.5, ease: "Power2.easeOut" },
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  tl3.to("form", { scale: 0.8, duration: 0.5, ease: "Power2.easeOut" });
  tl3.to(
    ".left,.right",
    {
      opacity: 0,
      y: 30,
      pointerEvents: "none",
    },
    "<"
  );

  tl3.fromTo(
    ".submitted",
    {
      opacity: 0,
      y: 30,
    },
    { opacity: 1, y: 0, pointerEvents: "none" }
  );
  tl3.fromTo(
    "#hand",
    { rotation: 0, y: 0, transformOrigin: "left" },
    { rotation: -10, y: 5, ease: "elastic.out(4,0.2)", duration: 1.5 },
    "<50%"
  );
});
