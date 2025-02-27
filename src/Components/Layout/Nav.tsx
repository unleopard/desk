import React, { Component } from "react";
import { Link, Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import {
    ChartBarIcon,
    HomeIcon,
    UsersIcon,
    RectangleGroupIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";

// Définition des props pour injecter `navigate`
interface NavProps {
    location: Location;
    navigate: NavigateFunction;
}

// Définition de l'état
interface NavState {
    activePath: string;
}

class Nav extends Component<NavProps, NavState> {
    constructor(props: NavProps) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
        };
    }

    componentDidUpdate(prevProps: NavProps) {
        // Mettre à jour le `activePath` si l'URL change
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ activePath: this.props.location.pathname });
        }
    }

    handleMenuClick = (path: string): void => {
        this.setState({ activePath: path });
    };

    handleLogout = () => {
        localStorage.removeItem("token");
        this.props.navigate("/logout");
    };

    render() {
        const { activePath } = this.state;
        const menuItems = [
            { name: "Tableau de bord", icon: HomeIcon, path: "/app/dashboard" },
            { name: "Tickets", icon: RectangleGroupIcon, path: "/app/leads" },
            { name: "Clients", icon: UsersIcon, path: "/app/customers" },
            { name: "Centre d’aide", icon: DocumentTextIcon, path: "/app/help" },
            { name: "Rapports", icon: ChartBarIcon, path: "/app/analytics" },
            { name: "Paramètres", icon: Cog6ToothIcon, path: "/app/settings" },
        ];

        return (
            <div id="nav" className="flex justify-between flex-col w-[70px] h-full border-r border-gray-200 bg-[#f9f9f9]">
                <div>
                    <div className="header h-16 flex justify-center items-center mb-[30px]">
                        <a href="#" className="flex h-16 justify-center items-center text-gray-400 no-underline">
                            <img src="/img/logo.png" alt="logo" className="logo max-h-[45px]" />
                        </a>
                    </div>
                    <div className="body">
                        <nav>
                            {menuItems.map((item, i) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        onClick={() => this.handleMenuClick(item.path)}
                                        className={`flex h-16 justify-center items-center text-gray-400 no-underline hover:text-white hover:bg-black transition-all duration-300 ease-in-out ${
                                            activePath === item.path ? "active" : ""
                                        }`}
                                    >
                                        <IconComponent className="w-[25px]" />
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        );
    }
}

// HOC pour injecter `location` et `navigate`
function withRouter(Component: any) {
    return function (props: any) {
        const location = useLocation();
        const navigate = useNavigate();
        return <Component {...props} location={location} navigate={navigate} />;
    };
}

export default withRouter(Nav);