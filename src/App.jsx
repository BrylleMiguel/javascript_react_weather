import React from "react";
import SearchBar from "./components/SearchBar";
import { useFetchWeather } from "./hooks/useFetchWeather";

function App() {
    const [searchInput, setSearchInput] = React.useState("");
    const [data, loading, error, executeFetch] = useFetchWeather(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=37620bae008a876d14f573cd2be1fb54&units=metric`
    );

    console.log(data);

    return (
        <>
            <div>
                <SearchBar
                    executeFetch={executeFetch}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <div>
                    <p>{data.name}</p>
                    <p>{data?.main?.temp}</p>
                </div>
            </div>
        </>
    );
}

export default App;
