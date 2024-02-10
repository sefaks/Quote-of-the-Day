const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        quote.textContent = data.content;
        author.textContent = data.author;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
    }
}

getQuote(api_url);
