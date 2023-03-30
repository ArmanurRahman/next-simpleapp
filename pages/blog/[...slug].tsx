import { useRouter } from "next/router";

const BlogPostPage = () => {
    const router = useRouter();

    console.log(router.query);
    return <h2> Welcome blog post screen</h2>;
};

export default BlogPostPage;
