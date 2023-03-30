import { useRouter } from "next/router";

const ClientBaseProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    return <h2>Client based project</h2>;
};

export default ClientBaseProjectPage;
