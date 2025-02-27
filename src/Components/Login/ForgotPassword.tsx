import { useState } from "react";

function ForgotPassword({ onClose }) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Un lien de réinitialisation a été envoyé à : ${email}`);
        onClose(); // Fermer la popup après soumission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Mot de passe oublié</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full p-2 border border-gray-200 rounded mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Envoyer
                    </button>
                    <button
                        type="button"
                        className="w-full mt-2 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        Annuler
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;