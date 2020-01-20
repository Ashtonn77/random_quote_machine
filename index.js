const btn = document.querySelector('#new-quote');
btn.addEventListener('click', function () {
    let colors = [
        `linear-gradient(to left, aqua, lightblue)`,
        `linear-gradient(to left, green, lightgreen)`,
        `linear-gradient(to left, pink, salmon)`,
        `linear-gradient(to left, black, grey)`,
        `linear-gradient(to left, red, maroon)`
    ];
    const changeBg = document.querySelector('#quote-box');
    const footer = document.querySelector('.footer');
    changeBg.parentElement.style.background = colors[generateRandom(colors.length - 1)];
    apiCall();
    if( changeBg.parentElement.style.background === `linear-gradient(to left, black, grey)`){ footer.style.color = 'white' };
    if( changeBg.parentElement.style.background !== `linear-gradient(to left, black, grey)`){ footer.style.color = 'black' }
});

function generateRandom(max) {
    return Math.floor((Math.random() * max) + 1)
};

async function apiCall() {
    await fetch('https://api.quotable.io/quotes')
        .then(response => response.json())
        .then(data => { displayQuote(data); });
};

function displayQuote(x) {
    const quote = document.querySelector('#text');
    const author = document.querySelector('#author');
    let length = x.results.length - 1;
    quote.textContent = `"${x.results[generateRandom(length)].content}"`;
    author.textContent = `- ${x.results[generateRandom(length)].author}`;
};
window.addEventListener('load', apiCall);