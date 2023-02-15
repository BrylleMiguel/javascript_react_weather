import React from "react";
import axios from "axios";

export const useFetchWeather = (ENDPOINT) => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, hasError] = React.useState(false);

    const executeFetch = React.useCallback(async () => {
        setIsLoading(true);
        try {
            setData(await (await axios.get(ENDPOINT)).data);
        } catch (E) {
            hasError(E);
        }

        setIsLoading(false);
        hasError(false);
        return [data, isLoading, error];
    }, [ENDPOINT, data, isLoading, error]);

    React.useEffect(() => {
        executeFetch();
    }, []);

    return [data, isLoading, error, executeFetch];
};
