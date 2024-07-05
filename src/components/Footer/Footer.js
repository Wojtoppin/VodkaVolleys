/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
            <NavLink>
              *Miejsce dla sponsora*
            </NavLink>
        </Nav>
        <div className="copyright"  style={{fontSize:"110%"}}>
          {new Date().getFullYear()} Stronę napisał: 
          <a
            href="https://github.com/Wojtoppin"
            target="_blank"
          >
            {" "}Wojciech Polit
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
