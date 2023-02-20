import React from "react";
import SearchBar from "./components/SearchBar";
import { useFetchWeather } from "./hooks/useFetchWeather";
import "../index.css";
import LocationIcon from "./icons/LocationIcon";

function App() {
    const [searchInput, setSearchInput] = React.useState("");
    const [data, loading, error, executeFetch] = useFetchWeather(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=37620bae008a876d14f573cd2be1fb54&units=metric`
    );

    return (
        <main className="w-96 mx-auto bg-slate-50 mt-48">
            <section className="flex justify-start items-center">
                <LocationIcon />
                <SearchBar
                    executeFetch={executeFetch}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </section>
            <section>details here</section>
        </main>
    );
}

export default App;
