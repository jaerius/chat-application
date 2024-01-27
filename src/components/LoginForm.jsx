import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID':  "06f7ce5b-a185-4f95-b2f2-93348be735ed", 'User-Name': username, 'User-secret': password   }
    
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch(error){
            setError('oops, incorrect credentials')
        }
    
    }

    return (
        <div className="wrapper">
            <div classNmae="form">
                <h1 className="title">Chat Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username"></input>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password"></input>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>start chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>

        </div>
    )
}
export default LoginForm