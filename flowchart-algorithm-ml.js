function toggleContent(stepId) {
    const content = document.getElementById(stepId);
    if (content) {
        // Toggle the 'active' class to handle visibility and styles through CSS
        content.classList.toggle('active');
        // Update aria-hidden attribute for accessibility
        content.setAttribute('aria-hidden', !content.classList.contains('active'));
    }
}

function showChoices(showId, hideId) {
    // Hide the element with hideId
    const hideElement = document.getElementById(hideId);
    if (hideElement) {
        hideElement.classList.remove('active');
        hideElement.setAttribute('aria-hidden', 'true');
    }
    
    // Show the element with showId
    const showElement = document.getElementById(showId);
    if (showElement) {
        showElement.classList.add('active');
        showElement.setAttribute('aria-hidden', 'false');
    }
}
