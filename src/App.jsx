import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserForm from "./components/newuser/NewUserForm";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=1",
      firstName: "Khusniddin",
      lastName: "Iskandarov",
      age: 29,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=2",
      firstName: "Khusniddin",
      lastName: "Iskandarov",
      age: 29,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300?random=3",
      firstName: "Khusniddin",
      lastName: "Iskandarov",
      age: 29,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
  ]);

  // addUser
  const addUser = (user) => {
    setUsers((users) => {
      return [...users, user];
    });
    setShowModal(false);
  };

  const userDelate = (id) => {
    setUsers((users) => {
      return users.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key == "Escape") setShowModal(false);
  };

  return (
    <div className="App" onClick={closeModal} onKeyDown={closeModal}>
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <div>No Users</div>}
        </div>
        <UserList users={users} userDelate={userDelate} />
      </main>
      {showModal && <NewUserForm addUser={addUser} closeModal={closeModal} />}
      <div onClick={() => setShowModal(true)} className="create-user">
        Create-User
      </div>
      <Footer />
    </div>
  );
}

export default App;
