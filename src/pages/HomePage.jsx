import { useEffect, useState } from "react";
import Game from "../components/Game.jsx";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    initializeGames(); // Initialize and merge default games if none exist
    getGames();

    function getGames() {
      const data = localStorage.getItem("games");
      let gamesData = [];

      if (data) {
        gamesData = JSON.parse(data);
      }

      const defaultGames = getDefaultGames(); // Get default games array
      // Merge default games with any existing games (prevent duplicates based on ID)
      const mergedGames = [...defaultGames, ...gamesData.filter(game => !defaultGames.some(defaultGame => defaultGame.id === game.id))];

      setGames(mergedGames);
    }

    function initializeGames() {
      const data = localStorage.getItem("games");

      // Initialize localStorage if it doesn't exist
      if (!data) {
        localStorage.setItem("games", JSON.stringify([])); // Start with an empty array
      }
    }

    function getDefaultGames() {
      return [
        {
          id: "1",
          gameName: "The Resistence - Avalon",
          timeOfPlay: "30",
          players: "4-10",
          age: "13",
          language: "EN",
          image: "https://www.thegamesteward.com/cdn/shop/products/resistance-avalon-retail-board-game-indie-boards-cards-3487789285420.jpg?v=1576232298&width=700",
          store: "Vestergade",
          shelfSpace: "B4",
        },
        {
          id: "2",
          gameName: "Monopoly",
          timeOfPlay: "60-180",
          players: "2-8",
          age: "8",
          language: "EN",
          image: "https://www.merlin.dk/Images/915x900/3200863_3f5be288447c.jpg",
          store: "Vestergade",
          shelfSpace: "D2",
        },        
        {
          id: "3",
          gameName: "Uno",
          timeOfPlay: "30",
          players: "2-10",
          age: "6",
          language: "EN/DK",
          image: "https://www.hyggeonkel.dk/static/grafik/produktbilleder/uno/cache/01-uno-2022-for-wm.jpg",
          store: "Vestergade",
          shelfSpace: "SMA",
        }
      ];
    }
  }, []);

  return (
    <div className="page">
      <section className="grid">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
}