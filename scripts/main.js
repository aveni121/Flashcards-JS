const inputTitle = document.querySelector("#cardTitle");
const inputContent = document.querySelector("#cardContent");
const cardMainContainer = document.querySelector("#cardContainer");
const createCard = document.querySelector("#createCard");
createCard.addEventListener("click", createNewCard);

function createNewCard() {
  console.log("Hello there");
  var cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "col-6 pt-2");

  var card = document.createElement("div");
  card.setAttribute("class", "card");

  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  var cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = inputTitle.value;

  var cardContent = document.createElement("p");
  cardContent.setAttribute("class", "card-text hidden");
  cardContent.textContent = inputContent.value;

  var cardButton = document.createElement("button");
  cardButton.setAttribute("class", "btn btn-primary");
  cardButton.addEventListener("click", function () {
    displayContent(cardContent, cardTitle);
  });
  cardButton.textContent = "View Answer";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardContent);
  cardBody.appendChild(cardButton);
  card.appendChild(cardBody);

  cardContainer.appendChild(card);
  cardMainContainer.appendChild(cardContainer);
  console.log("Hello there End");

  inputTitle.value = "";
  inputContent.value = "";
}

function displayContent(cardContent, cardTitle) {
  var modal = document.createElement("div");
  modal.setAttribute(
    "class",
    "modal d-flex justify-content-center align-items-center"
  );
  modal.style.display = "block";

  var modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");

  var closeModal = document.createElement("span");
  closeModal.setAttribute("class", "close");
  closeModal.textContent = "X";
  closeModal.addEventListener("click", closeAndRemove);

  var modalTitle = document.createElement("h3");
  modalTitle.textContent = cardTitle.textContent;

  var modalPara = document.createElement("p");
  modalPara.textContent = cardContent.textContent;

  modalContent.appendChild(closeModal);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalPara);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}

function closeAndRemove() {
  this.parentNode.parentNode.remove();
}
