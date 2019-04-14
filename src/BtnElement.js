window.customElements.define("btn-element", class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.innerHTML = `
            <button type="button" class="${this.className}" >
                <slot></slot>
            </button>

            <style>
            button {
                border-radius: 5px;
                cursor: pointer;
                font-size: 15px;
                height: 35px;
                width: 70px;
                color: #fff;
                transition: opacity .15s;
            }
            button:hover {
                opacity: .8;
            }

            button.blue {
                background-color: #007bff;
                border-color: #007bff;
            }
            button.green {
                background-color: #28a745;
                border-color: #28a745;
            }
            </style>
        `;
    }

    connectedCallback() {
        this.addEventListener("click", e => {
            this.count(e.target.textContent);
        });
    }

    count(countType) {
        this.dispatchEvent(new CustomEvent("count", { 
            bubbles: true,
            composed: true,
            detail: { countType },
        }));
    }
});
