import React from 'react';

function Navbar() {
  return (
    <div>
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand mb-1 h1">
                    <h1 style={{fontSize: 50, fontWeight: 'bolder', marginLeft: 150}}>CI/CD Testing</h1>
                </span>
            </div> 
        </nav>
    </div>
  )
}

export default Navbar;