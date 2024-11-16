import { useState } from "react";
import "./NewUserForm.css";

import { v4 as uuidv4 } from "uuid";

function NewUserForm({ addUser, closeModal }) {
  const [user, setUser] = useState({
    id: uuidv4(),
    image: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h1>New Create User</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image:</span>
              <input
                required
                type="url"
                onChange={(e) => {
                  setUser((user) => {
                    return { ...user, image: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>FirstName:</span>
              <input
                required
                type="text"
                onChange={(e) => {
                  setUser((user) => {
                    return { ...user, firstName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>LastName:</span>
              <input
                required
                type="text"
                onChange={(e) => {
                  setUser((user) => {
                    return { ...user, lastName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Age</span>
              <input
                required
                type="number"
                onChange={(e) => {
                  setUser((user) => {
                    return { ...user, age: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>From</span>
              <input
                required
                type="text"
                onChange={(e) => {
                  setUser((user) => {
                    return { ...user, from: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                required
                type="text"
                onChange={(e) => {
                  setUser((user) => {
                    return { ...user, job: e.target.value };
                  });
                }}
              />
            </label>
            <div className="gender">
              <label>
                <small>Male</small>
                <input
                  required
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => {
                    setUser((user) => {
                      return { ...user, gender: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  required
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => {
                    setUser((user) => {
                      return { ...user, gender: e.target.value };
                    });
                  }}
                />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
