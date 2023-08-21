import React from "react"
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <a
      href={result.Url} // Use the URL from the JSON data
      target="_blank"   // Open the link in a new tab
      rel="noopener noreferrer"
      className="search-result"
    >
      {result.name}    
    </a>
  );
};
