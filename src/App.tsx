import { useEffect, useState } from 'react';
import './App.css';
import { UserAPI } from './services/user';
import { User } from './types/user';
import List from './components/List';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const users = await UserAPI.getUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <List
        data={users}
        itemContent={(index, item: User) => <div key={index}>{item.name}</div>}
      />
    </div>
  );
}

export default App;
