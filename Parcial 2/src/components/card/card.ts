export enum Attribute {
    "icon_url"="icon_url",
    "value"="value",

}

class Card extends HTMLElement {
    icon_url?: string;
    value?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            icon_url: null,
            value: null,

        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {

                this.shadowRoot.innerHTML += `
                <section class = "card">
                <img src="${this.icon_url}" alt="">
                <h2>${this.value}</h2>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
