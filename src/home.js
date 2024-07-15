import parseHtml from "./tools/parse-html.js"
import updateFooterAssets from "./tools/update-footer-assets.js";
import assetsData from "./json/assets.json";
import ImgTables from './images/tables.jpg';
import './style.css';

function home(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "home");

    const imgMain = new Image();
    imgMain.src = ImgTables;
    imgMain.alt = "Restaurant interior with tables, chairs, and plants";
    imgMain.classList.add("background");
    content.appendChild(imgMain);

    const homeTextHtml = `
            <div id="home-text">
                <h1>Welcome to Tam's! </h1>
                <p>
                    Dine beneath a canopy of leaves, feeling as though you've discovered a secret garden in the heart of the city.
                </p>
            </div>
    `;
    const homeText = parseHtml(homeTextHtml);
    content.appendChild(imgMain);
    content.appendChild(homeText);

    const assetTexts = assetsData
        .filter(asset => asset.content === "home")
        .map(asset => asset.text);
    updateFooterAssets(assetTexts);

}

export default home;