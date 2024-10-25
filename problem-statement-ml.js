let currentStep = 1; // Track the current step in the flowchart

// Function to record the answer from the input field
function recordAnswer(answer) {
    if (answer) {
        const answersList = document.getElementById('answersList');
        const newAnswer = document.createElement('div');
        newAnswer.className = 'recorded-answer';
        newAnswer.textContent = answer;
        answersList.appendChild(newAnswer);

        // Clear the input field after recording
        document.getElementById('anonymizationTechnique').value = '';
    }
}

// Function to navigate to the next step
function nextStep(currentStepId, nextStepId) {
    const currentStepElement = document.getElementById(currentStepId);
    const nextStepElement = document.getElementById(nextStepId);

    // Hide the current step and show the next step
    currentStepElement.classList.remove('active');
    nextStepElement.classList.add('active');

    // Update the current step tracker
    currentStep++;
}

// Function to go back to the previous step
function goBack(currentStepId, previousStepId) {
    const currentStepElement = document.getElementById(currentStepId);
    const previousStepElement = document.getElementById(previousStepId);

    // Hide the current step and show the previous step
    currentStepElement.classList.remove('active');
    previousStepElement.classList.add('active');

    // Update the current step tracker
    currentStep--;
}

// Function to reset the flowchart to the first step
function resetFlowchart() {
    // Get all steps and hide them
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.classList.remove('active');
    });

    // Clear answers
    const answersList = document.getElementById('answersList');
    answersList.innerHTML = ''; // Clear recorded answers

    // Show the first step
    const firstStep = document.getElementById('step1');
    firstStep.classList.add('active');

    // Reset the current step tracker
    currentStep = 1;
}

// Function to handle the recording of the anonymization technique
function recordAnonymizationTechnique() {
    const technique = document.getElementById('anonymizationTechnique').value;

    // Check if the technique input is not empty
    if (technique.trim() === '') {
        alert("Please enter a technique before proceeding.");
        return; // Prevent moving to the next step if input is empty
    }

    // Record the answer
    recordAnswer(technique);

    // Proceed to the next step
    nextStep('step18', 'step20');
}

// Add event listeners for next and back buttons
document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', function () {
        const currentStepId = this.parentElement.parentElement.id;
        const nextStepId = this.getAttribute('data-next'); // Use data attributes to specify the next step
        nextStep(currentStepId, nextStepId);
    });
});

document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', function () {
        const currentStepId = this.parentElement.parentElement.id;
        const previousStepId = this.getAttribute('data-previous'); // Use data attributes to specify the previous step
        goBack(currentStepId, previousStepId);
    });
});

// Event listener for the reset button
document.getElementById('resetButton').addEventListener('click', resetFlowchart);
