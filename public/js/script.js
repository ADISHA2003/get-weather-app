document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    window.location.href = `/weather?city=${city}`;
});

document.getElementById('cityInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const city = document.getElementById('cityInput').value;
        window.location.href = `/weather?city=${city}`;
    }
});
