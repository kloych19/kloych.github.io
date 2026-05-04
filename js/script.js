// Footer
function signup() {
  let email = document.getElementById("emailInput").value;
  if (email === "") {
    document.getElementById("signupMessage").innerText = "Please enter an email.";
  } else {
    document.getElementById("signupMessage").innerText = "Thanks for signing up!";
  }
}

// About
function fadeInSequence() {
  const items = document.querySelectorAll(".fade-in");
  items.forEach(function(el, i) {
    setTimeout(function() {
      el.classList.add("show");
    }, i * 1000);
  });
}

// Order Form
function showTemp(bubbleId) {
  const bubbles = document.querySelectorAll(".tempBubble");
  bubbles.forEach(function(b) {
    b.style.display = "none";
  });
  document.getElementById(bubbleId).style.display = "block";
}

// Thank You
function submitDrink() {
    let drink = document.getElementById("drinkInput").value;
    if (drink === "") {
        document.getElementById("drinkResult").innerHTML =
            "Please type a drink!";
    } else {
        document.getElementById("drinkResult").innerHTML =
            "Your input will be put to good use!";
    }
}




