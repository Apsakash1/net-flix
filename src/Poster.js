import './poster.css';

function Poster(props){
    //Stranger things small box size poster
    //const posterUrl = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWHAw8GRpjqx-WDNjkqz6CW4oUedkMSbBh10x6NTxwnolB7U5SEY4SzlnsRqAQKWkYidOlpxUo3359QKKJutzIYbl5aXhDu1KtpVBUkkyIZov4us9fREG9Ff1vqUbNcbjLK54oikGlA4dq_iWIR2iLw44NAZe2xc9SzTe6kPM7EwQXtQ1uMLhjHAeHwbFNI.jpg?r=033";
    const posterUrl = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYRzKL9GGh3nhWPcm9FTQ3jBWuXTEtjd6cQYb3mYuaye4nTEBI09QXmW3WAloaVuAkunapvxK4WCzctrTZXxqsRRjlkhKd8Zsh9G.jpg?r=fb7";
    const titleUrl = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeXs8nt79MPpu_P1JLYfcjPywzWm98BuCrafsNOVcFyEWnmziMPY1eHFbyNyHvPcx_X_1tLJFxKFYs7Y4vj7ZUQ9T6J6-afeYNf70SFpOzZXjWZ8Qa5msAw3qJdN-Ktb27kb0o85Inozs5QNxUzDGuvRupZIImjYHC33nK6RrwLT0m-x276B3w.png?r=827";
    const description = "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin known as The Man from Toronto in hopes of staying alive.";

    const highlightedMovie = new Map();
    highlightedMovie.set("name", titleUrl);
    highlightedMovie.set("title", "Man From Toronto");
    highlightedMovie.set("desc", description);
    highlightedMovie.set("poster", posterUrl);

    return (
        <div className="poster" style={{ 
            backgroundImage: `url(${highlightedMovie.get("poster")})` 
          }}>
            <div className="movie-details">
                <img className="title-pic" src={highlightedMovie.get("name")} alt={highlightedMovie.get("title")}></img>
                {/* <h1>{highlightedMovie.get("title")}</h1> */}
                <h3 className="desc">{highlightedMovie.get("desc")}</h3>
                <button className="play-button">Play</button>
                <button className="info-button">More Info</button>
            </div>
        </div>
      );
}

export default Poster;