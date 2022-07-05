import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorite-context";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);
  let context;

  if (favoriteCtx.totalFavorites === 0) {
    context = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    context = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {context}
    </section>
  );
}

export default FavoritesPage;
