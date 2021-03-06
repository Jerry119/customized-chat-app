import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username'))
        return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="b31043dc-1ad8-47d2-ac77-a27b10705c89"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;