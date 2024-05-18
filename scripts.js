document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
    const scoreSpan = document.getElementById('score');
    let score = 0;

    image.addEventListener('click', function() {
        score++;
        scoreSpan.textContent = score;
    });
});
