import ImgTables from './images/tables.jpg';
import './style.css';

function home(){
    const content = document.querySelector("#content");

    const imgMain = new Image();
    imgMain.src = ImgTables;
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

function parseHtml(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    return doc.body.firstElementChild;
}

export default home;