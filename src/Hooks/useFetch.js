import { useEffect, useState } from "react";


function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(url);
                const response2 = await response.json();
                setData(response2)
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }

        }

        fetchData();
    }, [url])

    return { data, loading, error };
}

export default useFetch;