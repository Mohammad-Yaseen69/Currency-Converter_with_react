import { useEffect, useState } from "react";

export default async function useCurrency(currency) {
    const [data, setData] = useState({})
    useEffect(function () {
        const response = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        response.then(res => res.json())
            .then(dataP => setData(dataP[currency]))
    }, [currency])

    return data
}
