import React from "react";
import { SearchSvg } from "../ReusableSvgs";
import { useVideos } from "../../context";
import "./SearchBar.css";

export const SearchBar = () => {
  const {
    data: { searchedKeyword },
    videosDispatch,
  } = useVideos();

  return (
    <span className="search-field">
      {<SearchSvg />}
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={searchedKeyword}
        onChange={(e) =>
          videosDispatch({ type: "SEARCH_VIDEO", payload: e.target.value })
        }
      />
    </span>
  );
};
