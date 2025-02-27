import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Supprimer le token d'authentification
        localStorage.removeItem("token");

        // Rediriger vers la page de connexion
        navigate("/login", { replace: true });
    }, [navigate]);

    return <p>Déconnexion en cours...</p>;
};

export default Logout;