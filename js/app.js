// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  let counter = 0;

  let size = pictures.length - 1;

  // get image container
  const imageContainer = document.querySelector(".img-container");

  // get next and back buttons
  const buttons = document.querySelectorAll(".btn");

  // handle previous / next navigation
  function handlenavigation(event) {
    let control = event.target;
    // check if it the previous button
    if (control.classList.contains("btn-left")) {
      // decrement counter by 1
      counter--;
      // check counter < 0 == pictures array length
      if (counter < 0) {
        counter = size;
      }
      // set the background image
      imageContainer.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
    }
    if (control.classList.contains("btn-right")) {
      // increment counter by 1
      counter++;
      // check counter > pictures array length
      if (counter > size) {
        counter = 0;
      }
      // set the background image
      imageContainer.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", handlenavigation);
  });
})();
