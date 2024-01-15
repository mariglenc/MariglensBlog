import { useState } from "react";
import classes from "./contact-form.module.css";  
import { signIn, getCsrfToken } from "next-auth/react";
import { getSession } from "next-auth/react";
function AdminPageForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  
  async function loginHandler(event) {
    event.preventDefault();
    console.log("enteredEmail", enteredEmail);
    console.log("enteredPassword", enteredPassword);
    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });
    console.log("result", result);
    const session = await getSession();
    console.log("session", session);
  }

  return (
    <section className={classes.contact}>
      <h1>Log in to admin page</h1>
      <form className={classes.form} onSubmit={loginHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.actions}>
          <button>Log in</button>
        </div>
      </form>
    </section>
  );
}

export default AdminPageForm;
