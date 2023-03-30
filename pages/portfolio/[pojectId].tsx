import { useRouter } from "next/router";

const PorjectBasePortfolioScreen = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return <h2>Welcome to Project based portfolio</h2>;
};
export default PorjectBasePortfolioScreen;
