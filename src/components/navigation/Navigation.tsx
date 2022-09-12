import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="home-introduce0 font-bold-100">
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/Videos'>VIDEOS</Link>
                    </li>
                    <li>
                        <Link to='/Company'>COMPANY</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation;