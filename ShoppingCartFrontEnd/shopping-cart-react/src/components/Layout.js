import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                <div className="container mt-3">
                    <div className="mt-4 p-5 bg-light text-black rounded">
                        <h2>Available products</h2>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;