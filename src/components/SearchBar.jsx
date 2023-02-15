import React from "react";

export default function SearchBar({
    executeFetch,
    searchInput,
    setSearchInput,
}) {
    return (
        <>
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
