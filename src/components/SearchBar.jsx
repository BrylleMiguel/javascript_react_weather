import React from "react";

export default function SearchBar({
    executeFetch,
    searchInput,
    setSearchInput,
}) {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();

                await executeFetch();
            }}
            className="max-w-xs"
        >
            <input
                type="text"
                value={searchInput}
                onChange={({ target: { value } }) => {
                    setSearchInput(value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
            />
            <button type="submit"></button>
        </form>
    );
}
