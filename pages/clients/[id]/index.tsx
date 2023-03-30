import { useRouter } from "next/router";

const ClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query);

    const navigateScreenHandler = () => {
        router.push({
            pathname: "/clients/[id]/[clientProjectId]",
            query: { id: "mubeen", clientProjectId: "testProject" },
        });
    };
    return (
        <div>
            <h2>client project</h2>
            <button onClick={navigateScreenHandler}>Client project ID</button>
        </div>
    );
};

export default ClientProjectPage;
