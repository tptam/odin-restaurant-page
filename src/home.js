import parseHtml from "./parseHtml.js"
import ImgTables from './images/tables.jpg';
import './style.css';

function home(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "home");

    const imgMain = new Image();
    imgMain.src = ImgTables;
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
}

export default home;