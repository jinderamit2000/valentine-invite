let messageIndex = 0;

const messages = [
    "No",
    "Are you sure?",
    "Pookie please...",
    "Don't do this to me :(",
    "I'm gonna cry...",
    "You're breaking my heart;"
];

function handleNoClick() {
    const noButton = document.querySelector('#noButton');
    const yesButton = document.querySelector('#yesButton');
    
    // Change the text of the No button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make the Yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Redirect to a success page or change the content
    window.location.href = "yes_page.html"; 
}
