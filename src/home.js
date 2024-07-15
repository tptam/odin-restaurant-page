import parseHtml from "./parse-html.js"
import updateFooterAssets from "./update-footer-assets.js";
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

    const assetTexts = [
        'Photo by <a href="https://unsplash.com/@ferhadd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Farhad Ibrahimzade</a> on <a href="https://unsplash.com/photos/a-room-filled-with-lots-of-green-plants-K8OPYyAEtvI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    ];
    updateFooterAssets(assetTexts);
}

export default home;