const progressRoot = document.querySelector('.progress-root');
const ProgressCicle = new Progress(progressRoot, {});


const numberRoot = document.getElementById('number-root');
const numberInput = new NumberInput(numberRoot, {onChange: (value) => {
      ProgressCicle.setValue(value);
    }
});
numberInput.render();

const animateRoot = document.querySelector('.animate-toggle');
const animateButton = new Toggle(animateRoot, {label: "Animate",   
    onActive: () => ProgressCicle.startAnimation(),
    onInactive: () => {
        ProgressCicle.stopAnimation();
        ProgressCicle.setValue(numberInput.getValue());
    }
});

const hiddenRoot = document.querySelector('.hidden-toggle');
const hiddenButton = new Toggle(hiddenRoot, {label: "Hide",
    onActive: () => ProgressCicle.toggleHide(),
    onInactive: () => ProgressCicle.toggleHide()
});
