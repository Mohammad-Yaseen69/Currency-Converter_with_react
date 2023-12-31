import { useEffect, useState } from "react";

export default function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                const dataP = await response.json();
                setData(dataP[currency]);
            } catch (error) {
                console.error('Error fetching currency:', error);
            }
        };

        fetchData();
    }, [currency]);

    return data;
}
