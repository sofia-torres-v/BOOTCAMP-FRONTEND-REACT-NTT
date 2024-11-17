// Renderizar los productos en la card
export function renderAllData(products, container) {
    products.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = element.thumbnail;
        image.alt = element.description;
        image.classList.add("card-img");
        card.appendChild(image);

        const title = document.createElement("h3");
        title.textContent = element.title;
        card.appendChild(title);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        card.appendChild(cardInfo);

        const contentCategorie = document.createElement("div");
        const textRosa = document.createElement("span");
        textRosa.classList.add("text-rosa");
        textRosa.textContent = "Categoría";
        contentCategorie.appendChild(textRosa);

        const buttonCategory = document.createElement("a");
        buttonCategory.classList.add("button-category");
        buttonCategory.textContent = element.category;
        contentCategorie.appendChild(buttonCategory);
        cardInfo.appendChild(contentCategorie);

        const textPrice = document.createElement("p");
        textPrice.classList.add("text-price");
        textPrice.textContent = "Precio: S/";
        cardInfo.appendChild(textPrice);

        const spanPrice = document.createElement("span");
        spanPrice.classList.add("span-price");
        spanPrice.textContent = element.price;
        textPrice.appendChild(spanPrice);

        const buttonAdd = document.createElement("button");
        buttonAdd.classList.add("button-add");
        buttonAdd.textContent = "Agregar ";
        card.appendChild(buttonAdd);

        const iconCartButton = document.createElement("img");
        iconCartButton.classList.add("icon-cart-button");
        iconCartButton.src = "./src/assets/cart-button.png";
        buttonAdd.appendChild(iconCartButton);

        container.appendChild(card);
    });
}
