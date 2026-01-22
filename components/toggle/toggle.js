class Toggle {
    constructor(root, options = {}) {
        this.root = root;
        this.onActive = options.onActive ?? (() => {});
        this.onInactive = options.onInactive ?? (() => {});
        this.label = options.label ?? "Toggle button";
        this.value = false;
        
        this.render();
    }

    async render() {
        const res = await fetch('./components/toggle/toggle.html');
        const html = await res.text();
        this.root.innerHTML = html;

        const labelElement = this.root.querySelector('.toggle-label');
        labelElement.textContent = this.label;

        this.buttonElement = this.root.querySelector('.toggle-button');
        this.buttonElement.addEventListener('click', () => {
            this.value = !this.value;
            this.update();
            this.toggleCallback();
        });
    }

    update() {
        this.buttonElement.classList.toggle('active', this.value);
        this.buttonElement.setAttribute('aria-pressed', String(this.value));
    }

    toggleCallback() {
        if(this.value) {
            this.onActive();
        } else {
            this.onInactive();
        }
    }
}