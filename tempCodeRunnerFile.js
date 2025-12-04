const input = document.getElementById("username");

input.addEventListener("input", (event) => {
    event.preventDefault();
  console.log("You typed:", input.value);
});