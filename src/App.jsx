import React from "react";
import SearchBar from "./components/SearchBar";
import { useFetchWeather } from "./hooks/useFetchWeather";
import "../index.css";

function App() {
    const [searchInput, setSearchInput] = React.useState("");
    const [data, loading, error, executeFetch] = useFetchWeather(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=37620bae008a876d14f573cd2be1fb54&units=metric`
    );

    return (
        <main>
            <section>
                <SearchBar
                    executeFetch={executeFetch}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </section>
            <section>
                <h1>
                    {loading ? "loading" : error ? "error occured" : data.name}
                </h1>
            </section>
        </main>
    );
}

export default App;
