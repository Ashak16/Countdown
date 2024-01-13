let countdown;

function initCountdown() {
    let giveawayEnd = new Date('2023-12-02T11:30:00');
    let currentTime = new Date();
    let remainingTime = giveawayEnd - currentTime;
    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

function startCountdown() {
    countdown = setInterval(initCountdown, 1000);
}

initCountdown();
startCountdown();