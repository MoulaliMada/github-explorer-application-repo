import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRepositories } from "../../redux/actions";
import Header from "../Header";
import { useParams } from "react-router-dom";
import DetailsScreen from "../DetailsScreen";
import "./index.css";

function HomeScreen() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);
  let { id } = useParams();
  if (id === undefined) {
    id = 1;
  }

  useEffect(() => {
    if (query === "") {
      dispatch(fetchRepositories("%7Bquery%7D"));
    }
    if (query) {
      dispatch(fetchRepositories(query));
    }
  }, [query, dispatch]);

  return (
    <div className="home-container">
      <Header />
      <div className="home-serach-details-container">
        <div className="home-serach-results-container">
          <input
            type="text"
            placeholder="Search repositories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="home-serach"
          />
          {repositories.length > 0 && (
            <>
                <ul className="repo_ul-mobile">
                  {repositories.map((repo) => (
                    <li key={repo.id}>
                      <Link to={`/details/${repo.id}`} className="repo-name">
                        {repo.name}
                      </Link>
                    </li>
                  ))}
                </ul>
             
              <ul className="repo_ul">
                {repositories.map((repo) => (
                  <li
                    key={repo.id}
                    className={
                      id.toString() === repo.id.toString()
                        ? "list-item-repo-name selected-repo-name"
                        : "list-item-repo-name"
                    }
                  >
                    <Link to={`/home/${repo.id}`} className="repo-name">
                      {repo.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="repo-details-container">
          <DetailsScreen />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
