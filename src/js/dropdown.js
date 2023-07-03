let selectContainers = document.querySelectorAll(".select-container");

selectContainers.forEach((selectContainer) => {
  let select = selectContainer.querySelector(".select");
  let input = selectContainer.querySelector("input");
  let options = selectContainer.querySelectorAll(".option");

  select.onclick = () => {
    selectContainer.classList.toggle("active");
  };

  options.forEach((option) => {
    option.addEventListener("click", () => {
      input.value = option.innerText;
      selectContainer.classList.remove("active");
      options.forEach((opt) => {
        opt.classList.remove("selected");
      });
      option.classList.add("selected");
    });
  });
});
