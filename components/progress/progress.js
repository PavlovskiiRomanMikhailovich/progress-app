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
        const percent = Math.max(0, Math.min(100, value));
        const FULL = 339;
        const offset = FULL - (FULL * percent) / 100;
        this.barElement.style.strokeDashoffset = offset;
    }

    startAnimation() {
        this.isAnimating = true;
        this.root.classList.add('progress-animated');
        let current = 0;

        this.timerId = setInterval(() => {
            this.setValue(current);
            current = current >= 100 ? 0 : current + 1;
        }, 20);
    }

    stopAnimation() {
        this.isAnimating = false;
        this.root.classList.remove('progress-animated');
        clearInterval(this.timerId);
        this.timerId = null;
    }

    toggleHide() {
        this.root.classList.toggle('hidden')
    }
}