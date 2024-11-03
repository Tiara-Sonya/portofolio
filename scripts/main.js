// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Toggle Project Descriptions
const toggleDescriptions = () => {
  const toggleButtons = document.querySelectorAll(".toggle-description");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const shortDesc = button.previousElementSibling.previousElementSibling;
      const fullDesc = button.previousElementSibling;

      if (fullDesc.style.display === "none") {
        fullDesc.style.display = "inline";
        shortDesc.style.display = "none";
        button.innerText = "Show Less";
      } else {
        fullDesc.style.display = "none";
        shortDesc.style.display = "inline";
        button.innerText = "Detail";
      }
    });
  });
};

// Initialize the toggle function for descriptions
toggleDescriptions();
