const React = require('react');
const Layout = require('./Layout');

function SignInForm({ user = {} }) {
  return (
    <Layout user={user}>
      <>
      <div className="title-login">
      <h2>Логин</h2>
      </div>
        
        <div className="cont">

          <form id="authSignInForm" action="/auth/signin" method="post">
            <label htmlFor="login-input">E-mail:</label>
            <input className="login-input" type="text" name="email" id="email" />
            <label htmlFor="login-input">Password:</label>
            <input className="login-input" type="password" name="password" id="password" />
            <button id="authSubmitBtn" className="button" type="submit">Login</button>
            <span className="login-input" id="errText">Wrong E-mail or Password</span>
          </form>
        </div>
      </>
      <script src="/js/signin.js" />
    </Layout>
  );
}
module.exports = SignInForm;
