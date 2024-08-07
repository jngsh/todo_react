import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList';
import { UserContext } from './store/user-context';

import {useState} from 'react';

function App() {

  // const UserContext = createContext('');

  const [name, setName] = useState('홍길동');

  return (
    <div className="App">
      <UserContext.Provider value={name}>
        <BoardList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
