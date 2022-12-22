// NEWSLETTER MODAL

const modal = document.getElementById("thankYouModal");
const btn = document.getElementById("newsletterButton");
const span = document.getElementsByClassName("closeModal")[0];
const emailInput = document.getElementById("Subscripe");
const modalContent = document.getElementById("modalContent");

// Check if email input has valid email address
emailInput.addEventListener("input", (event) => {
  emailValid = emailInput.checkValidity();

  if (emailValid) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

// Display thank you message for a valid email address
btn.addEventListener("click", function (event) {
  emailValid = emailInput.checkValidity();
  if (emailValid) {
    modal.ariaHidden = false;
    modal.classList.add("visible");
    document.body.style.overflow = "hidden";
  } else {
    alert("Please provide an email address!");
  }
});
// close modal when press close
span.onclick = function () {
  modal.classList.remove("visible");
  modal.ariaHidden = true;
  document.body.style.overflow = "";
};
// close modal when press outside of modal
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("visible");
    modal.ariaHidden = true;
    document.body.style.overflow = "";
  }
};

// MOBILE NAVIGATION DROPDOWN MENU
function mobileMenuDropdownToggle() {
  document.getElementById("dropdownButton").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// ANIMATED NUMBERS COUNT UP WHEN IN VIEW
const counters = document.querySelectorAll(".animatedNumber");
const counter = document.querySelector("#number1");

function isInViewport(counter) {
  const rect = counter.getBoundingClientRect();
  // console.log(rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// checks if number showcases are in view to start count up animation
var executedOnce = false;
const checkVisibility = () => {
  const counter = document.querySelector("#number3");
  if (isInViewport(counter)) {
    startCountup();
    executedOnce = true;
  }
};
document.addEventListener("scroll", checkVisibility);

// Main function for number animation
function startCountup() {
  if (executedOnce == false) {
    for (let n of counters) {
      const updateCount = () => {
        const target = +n.getAttribute("data-target");
        const count = +n.innerText;
        const speed = 100; // animation speed
        const inc = target / speed;
        if (count < target) {
          n.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          n.innerText = target;
        }
      };
      updateCount();
    }
  } else {
    return;
  }
}
