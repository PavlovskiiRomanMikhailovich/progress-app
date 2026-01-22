const numberRoot = document.getElementById('number-root');
const numberInput = new NumberInput(numberRoot, {});
numberInput.render();

const animateRoot = document.querySelector('.animate-toggle');
const animateButton = new Toggle(animateRoot, {label: "Animate"});

const hiddenRoot = document.querySelector('.hidden-toggle');
const hiddenButton = new Toggle(hiddenRoot, {label: "Hide"});
