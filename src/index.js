import home from "./home.js"
import contact from "./contact.js"
import menu from "./menu.js"


const content = document.querySelector("#content");
document.querySelectorAll("nav>button").forEach(
    button => {
        button.addEventListener(
            "click",
            e => {
                content.textContent = "";
                switch(button.id) {
                    case "home":
                        home();
                        break;
                    case "menu":
                        menu();
                        break;
                    case "contact":
                        contact();
                        break;
                }
                document.querySelector("nav>.selected")
                    .classList.remove("selected");
                button.classList.add("selected");
            }
        )
    }
)
content.textContent = "";

home();