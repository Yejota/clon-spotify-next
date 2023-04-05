const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navigation-icon-container">
          <img src="/media/icons/go-back.png" />
          <img src="/media/icons/go-forward.png" />
        </div>
        <div className="auth-container">
          <span className="sign-up">Sign up</span>
          <div className="login-button">
            <span>Log in</span>
          </div>
        </div>
      </nav>
    </div>
  )
  
};

export {Navbar};