import { useState } from "react";
import "./App.css";

const account = {
  email: "",
  password: "",
  new_password: "",
  isJoin: false,
};

function App() {
  const [form, setForm] = useState(account);
  const [data, setData] = useState(form);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData(form);
  };

  return (
    <div className="sign-up">
      <div className="box">
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="form-input"
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
          />
          <input
            onChange={handleChange}
            className="form-input"
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
          />
          <input
            onChange={handleChange}
            className="form-input"
            type="password"
            name="new_password"
            placeholder="Confirm password"
            id="new_password"
          />
          <p className="pass_alert">
            {data.password !== data.new_password && `Password didnt match`}
          </p>
          <div className="box-marketing">
            <input
              onChange={handleChange}
              className="form-subs"
              type="checkbox"
              name="isJoin"
              id="isJoin"
              checked={form.isJoin}
            />
            <label htmlFor="isJoin">I want to join the newslater</label>
          </div>
          <input className="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
