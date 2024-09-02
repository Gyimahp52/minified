document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");

    const exampleButton = document.getElementById('exampleButton');
    if (exampleButton) {
        exampleButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});
