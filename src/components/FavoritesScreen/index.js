import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/actions";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <Header />
      <h2 className="heading-favorites">Favorite Repositories</h2>
      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        <ul className="favorite-ul">
          {favorites.map((repo) => (
            <li key={repo.id} className="favorite-li">
              <h3 className="favorite-repo-name">{repo.name}</h3>
              <p className="repo-description">{repo.description}</p>
              <button
                onClick={() => dispatch(toggleFavorite(repo))}
                className="remove-favorite-btn"
              >
                Remove Favorites
              </button>
              <Link to={`/details/${repo.id}`} className="repo-name">
                <button className="remove-favorite-btn view-more-btn">View Details</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesScreen;
