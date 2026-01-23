const FULL = 339;          // длина окружности
const ARC_PERCENT = 25;   // длина дуги
const ARC_LENGTH = FULL * ARC_PERCENT / 100;

class Progress {
    constructor(root, options = {}){
        this.root = root;
        this.value = options.value ?? 0;
        this.isAnimating = false;

        this.render();
    }

    async render() {
        const res = await fetch('./components/progress/progress.html');
        const html = await res.text();
        this.root.innerHTML = html;

        this.barElement = this.root.querySelector('.progress-bar')
    }

    setValue(value) {
        if (value > 100 || value < 0) value = 0;
        const percent = Math.max(0, Math.min(100, value));
        const FULL = 339;
        const offset = FULL - (FULL * percent) / 100;
        this.barElement.style.strokeDashoffset = offset;
    }


    startAnimation() {
        this.isAnimating = true;
        this.root.classList.add('progress-animated');
    }

    stopAnimation() {
        this.isAnimating = false;
        this.root.classList.remove('progress-animated');
    }

    toggleHide() {
        this.root.classList.toggle('hidden')
    }
}