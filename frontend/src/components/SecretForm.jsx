import { useState } from 'react';
import { createLink } from '../api';


export default function SecretForm() {
    const [secret, setSecret] = useState('');
    const [link, setLink] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!secret) return alert("Escribe un mensaje primero");
        
        try {
            const data = { message: secret };
            
            const response = await createLink(data);
            setLink(`/reveal/${response.key}`);
            setSecret('');
        } catch (error) {
            console.error(error);
            alert("Hubo un error al generar el enlace");
        }
    };
    
    return (
    <form onSubmit={handleSubmit}>
        <textarea
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="Escribe tu mensaje secreto..."
        rows="5"
        />
        <button type="submit">Generar enlace secreto</button>
        
        {link && (
            <div>
                <p>Tu enlace secreto:</p>
                <a href={link}>{window.location.origin + link}</a>
            </div>
        )}
    
    </form>
    );
}
