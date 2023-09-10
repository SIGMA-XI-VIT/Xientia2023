import React, { useState } from 'react';
import '../styles/logreg.scss';
function LoginForm({ switchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <div className="card login">
      <h2><i className="fas fa-key"></i> Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="input"
            name="email"
            type="text"
            placeholder='Enter e-mail ID'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="input"
            name="password"
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button11" type="submit">Sign In</button>
      </form>
      <p className="link-login">
        Don't have an account yet?  
        <span className="switchText" onClick={switchToSignUp}>Sign up!</span>
      </p>
    </div>
  );
}

function SignupForm({ switchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  return (
    <div className="card signup">
      <h2><i className="fas fa-user"></i> New account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="input"
            name="email"
            type="text"
            placeholder='Enter e-mail ID'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="input"
            name="password"
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-repeat">Password repeat:</label>
          <input
            className="input"
            name="password-repeat"
            type="password"
            placeholder='Repeat password'
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </div>
        <button className="button11" type="submit">Create</button>
      </form>
      <p className="link-signUp">
        Already have an account?
        <span className="switchText" onClick={switchToLogin}> Sign in!</span>
      </p>
    </div>
  );
}

function Logreg() {
  const [showLogin, setShowLogin] = useState(true);

  const switchToSignUp = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className='body'>
      {showLogin ? (
        <LoginForm switchToSignUp={switchToSignUp} />
      ) : (
        <SignupForm switchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default Logreg;
