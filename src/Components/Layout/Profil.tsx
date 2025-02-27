import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
    UserIcon,
    BellIcon,
    Cog6ToothIcon,
    ClockIcon,
    ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

const ProfileMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // Gestion de la déconnexion
    const handleLogout = () => {
        localStorage.removeItem("token"); // Supprimer le token d'auth
        navigate("/logout"); // Rediriger vers la page de déconnexion
    };

    // Liste des options du menu
    const menuItems = [
        {name: "Mon Profil", icon: <UserIcon className="w-5 h-5"/>, path: "/app/profile"},
        {name: "Notifications", icon: <BellIcon className="w-5 h-5"/>, path: "/app/profile/notifications"},
        {name: "Paramètres du compte", icon: <Cog6ToothIcon className="w-5 h-5"/>, path: "/app/profile/settings"},
        {name: "Historique des connexions", icon: <ClockIcon className="w-5 h-5"/>, path: "/app/profile/activity-log"},
    ];

    return (
        <div className="relative">
            {/* Bouton Avatar */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 p-2 rounded-full"
            >
                <img src="/img/profil.jpg" alt="User Avatar" className="w-12 h-12 rounded-full"/>
            </button>

            {/* Menu déroulant */}
            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                    {/* Liens du menu */}
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 transition"
                            onClick={() => setOpen(false)}
                        >
                            {item.icon}
                            <span className="ml-3">{item.name}</span>
                        </Link>
                    ))}

                    {/* Bouton de Déconnexion */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-red-500 hover:bg-red-100 transition"
                    >
                        <ArrowRightOnRectangleIcon className="w-5 h-5"/>
                        <span className="ml-3">Déconnexion</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;