import React from "react";
import { useVideos } from "../../context";
import { EmptySearch } from "../EmptySearch/EmptySearch";
import { Spinner } from "../Spinner/Spinner";

export const SpinnerOrEmptySearch = () => {
  const {
    data: { searchedKeyword },
  } = useVideos();

  return !searchedKeyword ? (
    <div className="spinner-area">
      <Spinner size={60} />
    </div>
  ) : (
    <EmptySearch />
  );
};
