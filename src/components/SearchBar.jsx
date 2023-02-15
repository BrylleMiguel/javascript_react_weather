import React from "react";

export default function SearchBar({
    executeFetch,
    searchInput,
    setSearchInput,
}) {
    return (
        <>
            <p>{searchInput}</p>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();

                    await executeFetch();
                }}
            >
                <input
                    type="text"
                    value={searchInput}
                    onChange={({ target: { value } }) => {
                        setSearchInput(value);
                    }}
                />
                <button>search</button>
            </form>
        </>
    );
}
