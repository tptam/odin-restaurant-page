import parseHtml from "./parseHtml.js"
import ImgTables from './images/tables.jpg';
import './style.css';

function updateFooterAssets(){
    const assetTexts = [
        'Photo by <a href="https://unsplash.com/@ferhadd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Farhad Ibrahimzade</a> on <a href="https://unsplash.com/photos/a-room-filled-with-lots-of-green-plants-K8OPYyAEtvI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
        ];
    
    const assets = document.querySelector("footer .assets");
    for (let text of assetTexts) {
        const assetHtml = `
            <span class="asset-item">${text}</span>
        `;
        const asset = parseHtml(assetHtml);
        assets.appendChild(asset);
    }
}

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

    updateFooterAssets();
}

export default home;