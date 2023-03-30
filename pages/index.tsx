import Link from "next/link";

export default function Home() {
    const clients = [
        {
            id: "arman",
            name: "Arman",
        },
        {
            id: "mubeen",
            name: "Mubeen",
        },
    ];
    return (
        <div>
            <Link href='/about'> About </Link>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: "clients/[id]",
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
}
