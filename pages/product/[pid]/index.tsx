import fs from "fs/promises";
import path from "path";

const ProductDetailsPage = (props) => {
    const { loadedProduct } = props;
    console.log(loadedProduct);

    if (!loadedProduct) {
        return <p>loading...</p>;
    }
    return <div>{loadedProduct.description}</div>;
};

const getData = async () => {
    const fileName = path.join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs.readFile(fileName);
    const data = JSON.parse(jsonData);
    return data;
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const productId = params.pid;
    const data = await getData();

    const product = data.products.find((product) => product.id === productId);
    if (!product) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            loadedProduct: product,
        },
    };
};

export const getStaticPaths = async () => {
    const data = await getData();

    const ids = data.products.map((product) => ({
        params: { pid: product.id },
    }));

    return {
        paths: ids,
        fallback: true,
    };
};
export default ProductDetailsPage;
