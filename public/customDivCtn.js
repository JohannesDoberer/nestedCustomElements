class CustomDivCtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }
  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div width="500px" height="500px" style="background-color:green; width:500px; height: 500px;">
        Put any button inside this container
        <slot name="anyButton">content</slot>
      </div>`;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('custom-div-container', CustomDivCtn);