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

    console.log(data);

    return (
        <main className="w-96 mx-auto bg-neutral-900 bg-opacity-60 mt-48">
            {/* search bar */}
            <section className="flex justify-center items-center">
                <LocationIcon />
                <SearchBar
                    executeFetch={executeFetch}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </section>

            {/* weather icon */}
            <section className="flex justify-center items-center flex-col">
                <div className="mt-10">
                    {data?.main && (
                        <div className="flex justify-center items-center w-28 h-28 rounded-full">
                            <img
                                src={
                                    data?.weather?.[0]?.icon &&
                                    `http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`
                                }
                                alt={data?.weather?.[0]?.main}
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* details */}
            {data?.main?.temp ? (
                <p className="text-6xl">{data?.main?.temp.toFixed()}&#8451;</p>
            ) : null}
            <div>
                <p className="text-lg">{data?.name}</p>
                <p>{data?.weather?.[0]?.main}</p>
                <p>{data?.weather?.[0]?.description}</p>
            </div>
        </main>
    );
}

export default App;
