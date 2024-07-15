import parseHtml from "./parse-html.js";

function updateFooterAssets(assetTexts) {
    const assets = document.querySelector("footer .assets");
    assets.textContent = "";
    for (let text of assetTexts) {
        const assetHtml = `
            <span class="asset-item">${text}</span>
        `;
        const asset = parseHtml(assetHtml);
        assets.appendChild(asset);
    }
}

export default updateFooterAssets;