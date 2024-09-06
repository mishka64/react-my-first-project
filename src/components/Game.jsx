export default function Game({ game }) {
    return (
      <article className="user-card">
        <img
          src={game.image || "https://placehold.co/600x400?text=No+image"}
          alt={game.gameName}
        />
        <h2>{game.gameName}</h2>
        <p>Time of Play: {game.timeOfPlay} mins</p>
        <p>Players: {game.players}</p>
        <p>Age: {game.age}+</p>
        <p>Language: {game.language}</p>
        <p>Store: {game.store}</p>
        <p>Shelf Space: {game.shelfSpace}</p>
      </article>
    );
  }
  