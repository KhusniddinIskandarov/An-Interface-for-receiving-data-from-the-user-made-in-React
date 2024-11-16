import "./UserList.css";

function UserList({ users, userDelate }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  height="300"
                  width={300}
                />
                <h2>
                  {user.firstName} {user.lastName}, {user.age} age.
                </h2>
                <p>{user.from}</p>
                <p>{user.job}</p>
                <p>{user.gender}</p>
                <button onClick={() => userDelate(user.id)}>Delate</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
