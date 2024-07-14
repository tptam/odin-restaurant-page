import parseHtml from './parseHtml';
import './style.css';
import ImgOpen from './images/map.jpg';

function contact(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "contact");

    const imgMain = new Image();
    imgMain.src = ImgOpen;
    imgMain.classList.add("background");
    content.appendChild(imgMain);

    const contactCardHtml = `        
        <div id="contact-card">
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

}

export default contact;
