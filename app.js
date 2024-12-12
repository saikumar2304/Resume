let submitButton = document.querySelector(".cv1");
submitButton.addEventListener("click", function (event) {
  let name1 = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  if (name1 === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  } else {
    alert(
      `Thank you ${name1} for your submission! We will contact you at ${email} shortly.`
    );
    clear();
  }
});

function clear() {
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".message").value = "";
}

function clear2() {
  document.querySelector(".email2").value = "";
}

let submitButton2 = document.querySelector(".cv2");

submitButton2.addEventListener("click", function (event) {
  let email2 = document.querySelector(".email2").value;
  if (email2 === "") {
    alert("Please enter an email address.");
    return;
  } else {
    alert(
      `Thank you for subscribing to our Newsletter! from now on you will receive updates at ${email2}.`
    );
    clear2();
  }
});
