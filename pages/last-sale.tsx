import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalePage = () => {
    const [sales, setSales] = useState();
    const [loading, setLoading] = useState(false);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        "https://next-first-app-5f201-default-rtdb.firebaseio.com/sales.json",
        fetcher
    );

    useEffect(() => {
        console.log(data);
        if (data) {
            const transformedData = [];

            for (const key in data) {
                transformedData.push({
                    id: data[key],
                    username: data[key].username,
                    volume: data[key].volume,
                });
            }
            setSales(transformedData);
        }
    }, [data]);

    // useEffect(() => {
    //     setLoading(false);
    //     fetch(
    //         "https://next-first-app-5f201-default-rtdb.firebaseio.com/sales.json"
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const transformedData = [];

    //             for (const key in data) {
    //                 transformedData.push({
    //                     id: data[key],
    //                     username: data[key].username,
    //                     volume: data[key].volume,
    //                 });
    //             }

    //             setLoading(false);
    //             setSales(transformedData);
    //         });
    // }, []);

    if (error) {
        return <p>Failed to load</p>;
    }

    // if (loading) {
    //     return <p>Loading....</p>;
    // }
    if (isLoading) {
        return <p>Loading....</p>;
    }
    if (!sales || !data) {
        return <p>No sales data</p>;
    }
    return (
        <div>
            <ul>
                {sales.map((sale) => (
                    <li key={sale.id}>
                        {sale.username} - {sale.volume}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LastSalePage;
