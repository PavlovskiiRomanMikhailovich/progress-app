class NumberInput {
    constructor(root, options = {}) {
        this.root = root;
        this.maxValue = options.maxValue ?? 100;
        this.minValue = options ?? 0;
        this.lable = options ?? this.lable;
    }

    async render() {
        const res = await fetch('./components/number-input/number-input.html');
        const html = await res.text();
        this.root.innerHTML = html;
    }
}