// 🌙 Dark mode toggle
const moonIcon = document.querySelector(".fa-moon");
const moonIcon2 = document.querySelector("#ass");

moonIcon.addEventListener("click", () => {
  moonIcon2.setAttribute("fill", "currentColor");
  moonIcon2.setAttribute(
    "d",
    "M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3"
  );
  document.body.classList.toggle("dark-mode");
});

// 🖼️ Banner slider images
const images = [
  "assets/watches.png",
  "assets/card.png",
  "assets/card1.png",
  "assets/shirt.jpg",
];

let currentIndex = 0;
const bannerImagesDiv = document.querySelector(".banner-images"); // empty div for images

// ➡️ Banner navigation buttons
const nextBtn = document.querySelector(".circle-btn.right");
const prevBtn = document.querySelector(".circle-btn.left");

// 🔄 Update banner with current image
function updateBanner() {
  bannerImagesDiv.innerHTML = `<img src="${images[currentIndex]}" alt="banner" />`;
}

// 👉 Next button (go to next image)
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  updateBanner();
});

// 👈 Previous button (go to previous image)
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  updateBanner();
});

// 🚀 Show first image on page load
updateBanner();

// 🎡 Horizontal scroll logic for each offers section
document.querySelectorAll(".ofers").forEach((section) => {
  const ofersContainer = section.querySelector(".container");
  const leftBtn = section.querySelector(".circle-btn2.left");
  const rightBtn = section.querySelector(".circle-btn2.right");

  // Skip if section doesn't have container or buttons
  if (!ofersContainer || !leftBtn || !rightBtn) return;

  // 🔍 Check if buttons should be visible or hidden
  function updateButtons() {
    // Hide left button if no content on the left
    if (ofersContainer.scrollLeft <= 0) {
      leftBtn.classList.add("hidden");
    } else {
      leftBtn.classList.remove("hidden");
    }

    // Hide right button if no content on the right
    if (
      ofersContainer.scrollLeft + ofersContainer.clientWidth >=
      ofersContainer.scrollWidth - 5
    ) {
      rightBtn.classList.add("hidden");
    } else {
      rightBtn.classList.remove("hidden");
    }
  }

  // 👈 Scroll left when clicking left button
  leftBtn.addEventListener("click", () => {
    ofersContainer.scrollBy({
      left: -ofersContainer.clientWidth,
      behavior: "smooth",
    });
  });

  // 👉 Scroll right when clicking right button
  rightBtn.addEventListener("click", () => {
    ofersContainer.scrollBy({
      left: ofersContainer.clientWidth,
      behavior: "smooth",
    });
  });

  // 🎯 Update button visibility while scrolling
  ofersContainer.addEventListener("scroll", updateButtons);

  // ⚡ Initial check on page load
  updateButtons();
});
