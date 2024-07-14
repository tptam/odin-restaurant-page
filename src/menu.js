import parseHtml from "./parseHtml.js"
import ImgTables from './images/herbs.jpg';
import './style.css';

const menuData = [
    {
        "category": "Salads",
        "items": [
            {
                "name": "Garden Harvest Bowl",
                "price": 12,
                "description": "Mixed greens, roasted seasonal vegetables, quinoa, herb vinaigrette",
                "src": "garden_harvest_bowl.jpg"
            },
            {
                "name": "Herb-Crusted Goat Cheese Salad",
                "price": 14,
                "description": "Arugula, beets, candied walnuts, balsamic reduction",
                "src": "herb_crusted_goat_cheese_salad.jpg"
            },
            {
                "name": "Zesty Citrus & Avocado Salad",
                "price": 13,
                "description": "Spinach, grapefruit segments, avocado, cilantro-lime dressing",
                "src": "zesty_citrus_avocado_salad.jpg"
            }
        ]
    },
    {
        "category": "Sandwiches",
        "items": [
            {
                "name": "The Green Goddess",
                "price": 11,
                "description": "Grilled zucchini, eggplant, roasted peppers, pesto, focaccia",
                "src": "green_goddess_sandwich.jpg"
            },
            {
                "name": "Herb-Roasted Chicken Panini",
                "price": 13,
                "description": "Free-range chicken, sun-dried tomatoes, mozzarella, basil aioli",
                "src": "herb_roasted_chicken_panini.jpg"
            },
            {
                "name": "Portobello Steak Sandwich",
                "price": 12,
                "description": "Marinated portobello, caramelized onions, Swiss cheese, garlic aioli",
                "src": "portobello_steak_sandwich.jpg"
            }
        ]
    },
    {
        "category": "House Specials",
        "items": [
            {
                "name": "Vegetable Quiche of the Day",
                "price": 14,
                "description": "Served with a side salad (Ask your server for today's selection)",
                "src": "vegetable_quiche.jpg"
            },
            {
                "name": "Herbed Quinoa Stuffed Bell Peppers",
                "price": 15,
                "description": "Served with tomato sauce and mixed greens",
                "src": "herbed_quinoa_stuffed_peppers.jpg"
            },
            {
                "name": "Seasonal Vegetable Frittata",
                "price": 13,
                "description": "With goat cheese and fresh herbs, served with toast",
                "src": "seasonal_vegetable_frittata.jpg"
            }
        ]
    },
    {
        "category": "Soups",
        "items": [
            {
                "name": "Roasted Tomato Basil Soup",
                "price": 7,
                "description": "Served with a grilled cheese crouton",
                "src": "roasted_tomato_basil_soup.jpg"
            },
            {
                "name": "Vegetable Minestrone",
                "price": 6,
                "description": "Seasonal vegetables, herbs, small pasta",
                "src": "vegetable_minestrone.jpg"
            }
        ]
    },
    {
        "category": "Drinks",
        "items": [
            {
                "name": "Fresh Herb Lemonade",
                "price": 4,
                "description": "Choice of basil, rosemary, or mint",
                "src": "fresh_herb_lemonade.jpg"
            },
            {
                "name": "Green Goddess Smoothie",
                "price": 6,
                "description": "Spinach, kale, banana, pineapple, coconut water",
                "src": "green_goddess_smoothie.jpg"
            },
            {
                "name": "Iced Hibiscus Tea",
                "price": 3,
                "description": "Naturally caffeine-free, slightly tart and sweet",
                "src": "iced_hibiscus_tea.jpg"
            },
            {
                "name": "Urban Oasis Cold Brew",
                "price": 4,
                "description": "House-made, smooth and refreshing",
                "src": "urban_oasis_cold_brew.jpg"
            }
        ]
    },
    {
        "category": "Desserts",
        "items": [
            {
                "name": "Lavender Honey Panna Cotta",
                "price": 8,
                "description": "With fresh berries",
                "src": "lavender_honey_panna_cotta.jpg"
            },
            {
                "name": "Herb-Infused Fruit Crumble",
                "price": 7,
                "description": "Seasonal fruit, thyme, rosemary (Ask for today's selection)",
                "src": "herb_infused_fruit_crumble.jpg"
            },
            {
                "name": "Lemon Basil Sorbet",
                "price": 6,
                "description": "Light and refreshing",
                "src": "lemon_basil_sorbet.jpg"
            }
        ]
    }
];

function createMenuCard(menuData) {
    const menuCard = document.createElement("div#menu-card");
    for (let section in menuData) {
        const section = document.createElement("section");
        const category = document.createElement("h2");
        category.textContent = section.category;
        section.appendChild(category);

        const list = document.createElement("ul");

        for (let item in section.items) {
            const itemHtml = `
                <li>
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <p class="description">${item.description}</p>
                </li>
            `
            list.appendChild(parseHtml(itemHtml));
        }

        section.appendChild(list);

        return menuCard;
    }
}


function menu(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "menu");

    const imgMain = new Image();
    imgMain.src = ImgTables;
    imgMain.classList.add(".background");
    content.appendChild(imgMain);

    content.appendChild(createMenuCard(menuData));
}

export default menu;