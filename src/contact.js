import parseHtml from './parseHtml';
import updateFooterAssets from "./update-footer-assets.js";
import './style.css';
import ImgOpen from './images/map.jpg';

function contact(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "contact");

    const imgMain = new Image();
    imgMain.src = ImgOpen;
    imgMain.alt = "Leaves, a map, and a vintage camera on the wood floor";
    imgMain.classList.add("top");
    content.appendChild(imgMain);

    const contactCardHtml = `        
        <div id="contact-card" class="main-card">
            <h1>Contact Us</h1>
            <section>
                <h2>Opening Hours</h2>
                <div class="table-wrapper">
                <table id="opening-hours">
                    <tr>
                        <th scope="row">Mon</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Tue</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Wed</th>
                        <td>11 AM to 15 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Thu</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Fri</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Sat</th>
                        <td>11 AM to 20 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Sun</th>
                        <td>Closed</td>
                    </tr>
                </table>
                </div>
            </section>
            <section>
                <h2>Contact Info</h2>
                <h3>Address</h3>
                <p>16918 Ambrose St., Kier, PE 01234</p>
                <h3>Phone</h3>
                <p>1-720-499-8760</p>
                <h3>Email</h3>
                <p>
                    <a href="mailto:customer@tamsdiner.com">
                        customer@tamsdiner.com
                    </a>
                </p>
            </section>
        </div>
    `;
    const contactCard = parseHtml(contactCardHtml);

    content.appendChild(contactCard);

    const assetTexts = [
        'Photo by <a href="https://unsplash.com/@joannakosinska?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joanna Kosinska</a> on <a href="https://unsplash.com/photos/flat-lay-photography-of-spices-on-plate-i0IvwAhhGZM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    ];
    updateFooterAssets(assetTexts);
}

export default contact;
