class NumberInput {
    constructor(root, options = {}) {
        this.root = root;
        this.maxValue = options.maxValue ?? 100;
        this.minValue = options.minValue ?? 0;
        this.lable = options.lable ?? "Value";
        this.onChange = options.onChange ?? (() => {});
    }

    async render() {
        const res = await fetch('./components/number-input/number-input.html');
        const html = await res.text();
        this.root.innerHTML = html;

        const lableElement = this.root.querySelector('.number-input-label');
        lableElement.textContent = this.lable;

        this.inputElement = this.root.querySelector('.number-input-field');
        this.inputElement.min = this.minValue;
        this.inputElement.max = this.maxValue;
        this.inputElement.inputMode = 'numeric';

        this.addListner();
    }

    addListner() {
        this.inputElement.addEventListener('input', () => {
            this.inputElement.value = this.inputElement.value.replace(/\D/g, '').slice(0, 3);
            const currentValue = Number(this.inputElement.value)
            if (currentValue > this.maxValue || currentValue < this.minValue) {
                this.onChange(0);
                this.inputElement.classList.add('error');
                return;
            } else {
                this.inputElement.classList.remove('error');
                this.onChange(Number(this.inputElement.value));
            }
        });
    }

    getValue() {
        return Number(this.inputElement.value);
    }
}