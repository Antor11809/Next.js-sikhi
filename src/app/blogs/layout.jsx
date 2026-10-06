

const postlayout = ({children}) => {
    return (
        <div>
            <h2>fixed portion</h2>
            <div>{children}</div>
        </div>
    );
};

export default postlayout;