// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./SearchBar.css";

// export const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     // fetch("https://jsonplaceholder.typicode.com/users")
//     fetch("/recipe-name.json")
//       .then((response) => response.json())
//       .then((json) => {
//         const lowercaseValue = value.toLowerCase(); // Convert search value to lowercase
//         const results = json.filter((item) => {
//           return (
//             lowercaseValue &&
//             item &&
//             item.name && 
//             item.name.toLowerCase().includes(lowercaseValue)
//           );
//         });
//         setResults(results);
//       });
      
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" />
//       <input
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//     </div>
//   );
// };

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import jsonData from "/recipe-name.json"; // Import the JSON file directly
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const lowercaseValue = value.toLowerCase();
    const results = jsonData.filter((item) => {
      return (
        lowercaseValue &&
        item &&
        item.name &&
        item.name.toLowerCase().includes(lowercaseValue)
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

