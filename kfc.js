import foodData from "./dataFood.js";

const makeFoodCard = (data) => {
  const divEl = document.createElement("div");
  divEl.classList.add("div_product_card");
  divEl.style.width = "200px";

  const h3El = document.createElement("h3");
  h3El.textContent = data.name;

  const imageEl = document.createElement("img");
  imageEl.src = data.image;
  imageEl.alt = "Food image";
  imageEl.width = 200;

  const pDescEl = document.createElement("p");
  pDescEl.textContent = data.description;

  const pPriceEl = document.createElement("p");
  pPriceEl.textContent = `Price: ${data.price}`;

  const pQuantityEl = document.createElement("p");
  pQuantityEl.textContent = `Quantity: ${data.quantity}`;

  divEl.appendChild(h3El);
  divEl.appendChild(imageEl);
  divEl.appendChild(pDescEl);
  divEl.appendChild(pPriceEl);
  divEl.appendChild(pQuantityEl);

  return divEl;
};

const foodCards = foodData.map(makeFoodCard);

foodCards.forEach((fc) =>
  document.body.insertAdjacentElement("afterbegin", fc)
);
