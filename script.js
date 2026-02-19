const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke() {
    const jokeBox = document.getElementById('jokeBox');
    jokeBox.textContent = "Laadimine...";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        jokeBox.textContent = `${data.setup} 😂 ${data.punchline}`;
    } catch (error) {
        jokeBox.textContent = "Nalja laadimisel tekkis viga 😢";
        console.error(error);
    }
}
