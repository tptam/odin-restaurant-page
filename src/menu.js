import parseHtml from "./tools/parse-html.js"
import updateFooterAssets from "./tools/update-footer-assets.js";
import  menuItemsData from "./json/menu-items.json";
import ImgTables from './images/herbs.jpg';
import './style.css';

// Import all images for menu items
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images/menu', false, /\.(png|jpe?g|svg)$/));


function createMenuCard() {
    const menuCard = document.createElement("div");
    menuCard.id = "menu-card";
    menuCard.classList.add("main-card");
    const title = document.createElement("h1");
    title.textContent = "Menu"
    menuCard.appendChild(title);
    for (let sectionData of  menuItemsData) {
        const section = document.createElement("section");
        const category = document.createElement("h2");
        category.textContent = sectionData.category;
        section.appendChild(category);

        const list = document.createElement("ul");

        for (let item of sectionData.items) {
            const itemHtml = `
                <li>
                    <img src=${images[item.src]} alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price}</p>
                    <p class="description">${item.description}</p>
                </li>
            `
            const itemElement = parseHtml(itemHtml);
            list.appendChild(parseHtml(itemHtml));
        }

        section.appendChild(list);
        menuCard.appendChild(section);
    }
    return menuCard;
}


function menu(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "menu");

    const imgMain = new Image();
    imgMain.src = ImgTables;
    imgMain.alt = "A small bowl of olive oil, herbs, and garlic cloves on a plate";
    imgMain.classList.add("top");
    content.appendChild(imgMain);

    content.appendChild(createMenuCard());

    const assetTexts = [
        'Photo by <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Annie Spratt</a> on <a href="https://unsplash.com/photos/black-and-silver-tlr-camera-on-isle-of-wight-map-X_NiqkkzVgM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    ];
    updateFooterAssets(assetTexts);
}

export default menu;