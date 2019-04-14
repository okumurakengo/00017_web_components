window.customElements.define("count-element", class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.innerHTML = `
            <p class="count">0</p>

            <style>
            .count {
                font-size: 25px;
                margin: 10px;
            }
            </style>
        `;
    }

    count(countTyep) {
        const p = this.shadowRoot.querySelector("p");
        p.textContent = Number(p.textContent) + (countTyep === "up" ? 1 : -1);
    }
});
