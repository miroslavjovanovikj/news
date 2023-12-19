import { NavLink } from "react-router-dom";
const MainNavgation = () => {
    const liStyle = "inline-block mr-8 ";
    const active = "text-sky-400 ";
    const inActive = "text-white";

    return (
        <div className="h-14 bg-cyan-900 ">
            <header className="w-3/5 mx-auto p-3 text-slate-50">
                <ul>
                    <div className="inline-block mr-4 tracking-wider font-medium">
                        <li>
                            <NavLink to="" className="text-white">
                                Best News
                            </NavLink>
                        </li>
                    </div>
                    <div className="float-right tracking-wider font-medium">
                        <li className={liStyle}>
                            <NavLink
                                to=""
                                className={({ isActive }) => (isActive ? active : inActive)}>
                                HOME
                            </NavLink>
                        </li>
                        <li className={liStyle}>
                            <NavLink
                                to="sport"
                                className={({ isActive }) => (isActive ? active : inActive)}>
                                SPORT
                            </NavLink>
                        </li>
                        <li className={liStyle}>
                            <NavLink
                                to="health"
                                className={({ isActive }) => (isActive ? active : inActive)}>
                                HELATH
                            </NavLink>
                        </li>
                        <li className={liStyle}>
                            <NavLink
                                to="viral"
                                className={({ isActive }) => (isActive ? active : inActive)}>
                                VIRAL
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </header>
        </div>
    );
};
export default MainNavgation;
