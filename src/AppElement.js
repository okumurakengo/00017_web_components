import "./CountElement";
import "./BtnElement";

window.customElements.define("app-element", class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = `      
            <div class="container">
                <count-element></count-element>
                <btn-element class="blue">up</btn-element>
                <btn-element class="green">down</btn-element>
            </div>

            <style>        
            .container {
                width: 200px;
                text-align: center;
                font-family: Verdana, sans-serif;
            }
            </style>
        `;
    }

    connectedCallback() {
        this.addEventListener("count", e => {
            this.shadowRoot.querySelector("count-element")
              .count(e.detail.countType);
        });
    }
});

export default document.createElement("app-element");
