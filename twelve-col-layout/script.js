class WebComponent extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'})
  }
  connectedCallback(){
    this.shadowRoot.innerHTML = `
    <style>
      .wrapper{
        margin: 20px;
      }
    </style>
      <div class="wrapper">
        <slot></slot>
      </div>
    `
  }
  disconnectedCallback(){}
  attributeChangedCallback(name,oldVal,newVal){}
  static get observedAttributes(){return ['dummy']}
}


customElements.define('web-component',WebComponent)