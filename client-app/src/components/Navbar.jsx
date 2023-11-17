import React from 'react';

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem('userData'));

  const handleLogout = () => {
    // Perform logout logic here, e.g., clear local storage, redirect, etc.
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sath Room
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            {currentUser ? (
              <div className="dropdown ms-auto">
                <button
                  className="btn btn-secondary dropdown-toggle" 
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i class="fa fa-user" aria-hidden="true"></i>  {currentUser.user.name}
                </button>
                <ul className="dropdown-menu" style={{marginLeft:'-100px'}}>
                  <li>
                    <a className="dropdown-item" href="#" >
                      Booking Screen
                    </a>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
