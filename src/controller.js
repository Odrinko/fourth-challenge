export const controller = (element) => {
  const buttons = element.querySelectorAll(".faq-question_select");
  const img = element.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (button.nextElementSibling.style.display == "flex") {
        button.nextElementSibling.style.display = "none";
        img[button.id - 1].lastChild.src =
          "./../assets/images/icon-plus.svg";
      } else {
        button.nextElementSibling.style.display = "flex";
        img[button.id - 1].lastChild.src =
          "./../assets/images/icon-minus.svg";
      }
    });
  });
};
