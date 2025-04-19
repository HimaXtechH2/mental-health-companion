// Smooth Scroll for Links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Send message to chatbot
function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() === '') {
        alert("Please type a message.");
        return;
    }

    document.getElementById('chatResponse').innerText = "Loading...";

    fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userMessage),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('chatResponse').innerText = "AI: " + data;
    })
    .catch(error => {
        document.getElementById('chatResponse').innerText = "Error: Please try again later.";
    });
}

// Track mood
function trackMood() {
    const mood = document.getElementById('moodInput').value;
    if (mood.trim() === '') {
        alert("Please share your mood.");
        return;
    }

    document.getElementById('moodResponse').innerText = "Saving...";

    fetch('http://localhost:8080/api/trackMood', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mood),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('moodResponse').innerText = "Mood tracked: " + mood;
    })
    .catch(error => {
        document.getElementById('moodResponse').innerText = "Error: Please try again later.";
    });
}

// Get self-care tips
function getSelfCareTips() {
    document.getElementById('selfCareTips').innerText = "Loading tips...";

    fetch('http://localhost:8080/api/selfCareTips')
    .then(response => response.text())
    .then(data => {
        document.getElementById('selfCareTips').innerText = data;
    })
    .catch(error => {
        document.getElementById('selfCareTips').innerText = "Error: Please try again later.";
    });
}
