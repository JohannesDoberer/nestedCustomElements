class CustomBtn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <button style="color:red" onclick="alert('Hello!!')">
                Say hello
            </button>
    `;
    }
}

customElements.define('custom-btn', CustomBtn);