import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="06f7ce5b-a185-4f95-b2f2-93348be735ed"
            userName="jsm"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
        />
    );
}

export default App;