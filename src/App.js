import React from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      
        {/**calling the UserList component */}
      <h1>List of Users</h1>
      <UserList></UserList>
    </div>
  );
}

export default App;
