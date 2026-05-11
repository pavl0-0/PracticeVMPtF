import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedUsers = data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          group: 'Інші'
        }));
        
        setUsers(formattedUsers);
        setLoading(false);
      })
      .catch(error => {
        console.error("Помилка завантаження даних:", error);
        setLoading(false);
      });
  }, []); 

  const handleGroupChange = (id, newGroup) => {
    const updatedUsers = users.map(user => 
      user.id === id ? { ...user, group: newGroup } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>Керування списком користувачів</h1>
      
      {loading ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>Завантаження даних з сервера...</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Email</th>
              <th>Група</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.group.toLowerCase().replace(/\s/g, '-')}`}>
                    {user.group}
                  </span>
                </td>
                <td>
                  <select 
                    value={user.group} 
                    onChange={(e) => handleGroupChange(user.id, e.target.value)}
                  >
                    <option value="ЦА">ЦА</option>
                    <option value="Постійні клієнти">Постійні клієнти</option>
                    <option value="Інші">Інші</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;