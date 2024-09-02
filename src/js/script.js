document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");

    // Additional JavaScript functionality can be added here

    // Example: Handling click event on an element
    const exampleButton = document.getElementById('exampleButton');
    if (exampleButton) {
        exampleButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});
