import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-5xl border py-5">
            <h1>page to found</h1>
            <h1>404</h1>
            <Link className="text-red-500 underline" to="/">Home</Link>
        </div>
    );
};

export default Error;