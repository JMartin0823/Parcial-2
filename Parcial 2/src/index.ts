import "./components/export";
import {bring_api} from "./components/data"
import Card, { Attribute } from "./components/card/card"
import Button, { Attribut } from "./components/Button/Button"

class AppContainer extends HTMLElement {
    ChuckList: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const dataChuck = await bring_api();
        dataChuck.forEach((data: any) => {
            console.log(data);
        });

        dataChuck.forEach((data: any) => {
            const ChuckCard = this.ownerDocument.createElement("my-card") as Card;
            ChuckCard.setAttribute(Attribute.icon_url, data.icon_url);
            ChuckCard.setAttribute(Attribute.value, data.value);
                this.ChuckList.push(ChuckCard);
        });
        this.render(this.ChuckList);
    }

    render(ChuckList:any) {
        const ChuckCards = this.ownerDocument.createElement("section")
        ChuckCards.className = "ChuckSection"
        this.ChuckList.forEach((ChuckCard) => {
            ChuckCards.appendChild(ChuckCard)
        });
        this.shadowRoot?.appendChild(ChuckCards);
    }
}

customElements.define("app-container", AppContainer);
