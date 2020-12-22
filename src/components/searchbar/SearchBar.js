import React from "react";

export default function SearchBar(props) {

  return (
    <form className={props.className}>

      {/* User search text input */}
      <input
        className="min-w-0 h-8 p-1 pl-3 placeholder-gray-400 text-gray-700 text-sm outline-none"
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="search"
        maxLength="12"
        max="12"
        onChange={props.onChange}
      />

      {/* Clear input button */}
      <input
        className="min-w-0 px-2 text-gray-700 text-xs"
        type="reset"
        defaultValue="clear"
        onClick={props.onChange}
      />

    </form>
  );
}


