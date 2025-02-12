import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRepositories } from "../../redux/actions";
import Header from "../Header";
import "./index.css";

function HomeScreen() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);

  useEffect(() => {
    if (query === "") {
      dispatch(fetchRepositories("%7Bquery%7D"));
    }
    if (query) {
      dispatch(fetchRepositories(query));
      console.log(query);
    }
  }, [query, dispatch]);

  console.log("repositories");

  return (
    <div className="home-container">
      <Header />
      <input
        type="text"
        placeholder="Search repositories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="home-serach"
      />
      <ul className="repo_ul">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <Link to={`/details/${repo.id}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
