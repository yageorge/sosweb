import React from "react";

export default function SearchBar(props) {

  return (
    <form className={props.className} autocomplete="off">

      {/* User search text input */}
      <input
        className="min-w-0 h-8 p-1 pl-3 text-sm outline-none placeholder-gray-400 text-gray-400 bg-gray-700"
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="search ..."
        maxLength="12"
        max="12"
        onChange={props.onChange}
      />

      {/* Clear input button */}
      <input
        className="min-w-0 px-2 outline-none text-gray-400 text-sm bg-gray-700"
        type="reset"
        defaultValue="clear"
        onClick={props.onChange}
      />

    </form>
  );
}


