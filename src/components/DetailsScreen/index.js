import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header";
import "./index.css";

const DetailsScreen = () => {
  const { id } = useParams();
  const repositories = useSelector((state) => state.repositories);

  let repository;

  if (id !== undefined && repositories.length > 0) {
    repository = repositories.find((repo) => repo.id.toString() === id);
  }

  console.log(repository);

  if (!repository) {
    return (
      <div className="details-container">
        <div className="Header-details-screen">
          <Header />
        </div>
        <h2 className="repo-not-found">Repository not found</h2>;
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
        <div className="repo-name-container">
          <h2 className="repo-details-name">{repository.name}</h2>
          <p className="repo-description">{repository.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
