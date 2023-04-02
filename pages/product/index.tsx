import fs from "fs/promises";
import path from "path";

const ProductPage = (props) => {
    const { products } = props;
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}> {product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    console.log("reganarate");
    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
};
export default ProductPage;
