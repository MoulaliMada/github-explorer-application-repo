import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import { toggleFavorite } from "../../redux/actions";
import "./index.css";

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const favorites = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isAddedFavorite = favorites.find((repo) => repo.id.toString() === id);
    if (isAddedFavorite) {
      setIsFavorite(true);
    }
  }, [id]);

  const repositories = useSelector((state) => state.repositories);
  let repository;

  if (id !== undefined && repositories.length > 0) {
    repository = repositories.find((repo) => repo.id.toString() === id);
  }

  if (!repository) {
    return (
      <div className="details-container">
        <div className="Header-details-screen">
          <Header />
        </div>
        <h2 className="repo-not-found">Welcome to Github Explorer</h2>;
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="Header-details-screen">
        <Header />
      </div>
      <div className="avatar-description-container">
        <div className="avatar-container">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            width={100}
            className="details-avatar"
          />
          <div className="repo-name-container2">
            <h2 className="repo-details-name">{repository.name}</h2>
            <p className="repo-description">{repository.description}</p>
          </div>
          <p>⭐ Stars: {repository.stargazers_count}</p>
          <p>🍴 Forks: {repository.forks_count}</p>
          <p>📝 Language: {repository.language}</p>
          <p>👤 Owner: {repository.owner.login}</p>
        </div>
        <div className="repo-name-btn-container">
          <div className="repo-name-container">
            <h2 className="repo-details-name">{repository.name}</h2>
            <p className="repo-description">{repository.description}</p>
          </div>
          <button
            onClick={() => {
              dispatch(toggleFavorite(repository));
              setIsFavorite(!isFavorite);
            }}
            className="remove-favorite-btn favorite-btn"
          >
            {isFavorite ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
