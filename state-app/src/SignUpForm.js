import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [showDiv, setShowDiv] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setShowDiv(true);
  }

  return (
    <div>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          Value={name.firstName}
        ></input>
        <br></br>
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          Value={name.lastName}
        ></input>
        <br></br>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setName({ ...name, email: e.target.value })}
          Value={name.email}
        ></input>
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setName({ ...name, password: e.target.value })}
          Value={name.password}
        ></input>
        <br></br>
        <label>confirmpassword:</label>
        <input
          type="password"
          onChange={(e) =>
            setName({ ...name, confirmpassword: e.target.value })
          }
          Value={name.confirmpassword}
        ></input>
        <br></br>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {showDiv && (
        <div>
          <p>Display Values:</p>
          <p>"FirstName" : {name.firstName}</p>
          <p>"lastName" : {name.lastName}</p>
          <p>"Email" : {name.email}</p>
          <p>"Password" : {name.password}</p>
          <p>"ConfirmPassword" : {name.confirmpassword}</p>
        </div>
      )}
    </div>
  );
}
