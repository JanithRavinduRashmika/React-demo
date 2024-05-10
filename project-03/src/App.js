import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import {useState} from 'react'

function App() {

  const [userList, setUserList] = useState([])

  const addUserHandle = (uName, uAge) =>{
    setUserList((prevUserList) =>{
      return [...prevUserList, {name:uName, age:uAge, id:Math.random().toString()} ]
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandle} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
