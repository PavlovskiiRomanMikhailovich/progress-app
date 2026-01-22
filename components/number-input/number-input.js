class NumberInput {
    constructor(root, options = {}) {
        this.root = root;
        this.maxValue = options.maxValue ?? 100;
        this.minValue = options.minValue ?? 0;
        this.lable = options.lable ?? "Value";
    }

    async render() {
        const res = await fetch('./components/number-input/number-input.html');
        const html = await res.text();
        this.root.innerHTML = html;

        const lableElement = this.root.querySelector('.number-input-lable');
        lableElement.textContent = this.lable;

    }
}