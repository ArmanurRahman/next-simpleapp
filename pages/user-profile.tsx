const UserProfile = (props) => {
    return <div>{props.userId}</div>;
};

export const getServerSideProps = async (context) => {
    const { params, req, res } = context;
    console.log(req);
    console.log(res);
    return {
        props: {
            userId: "ARMAN",
        },
    };
};
export default UserProfile;
