import React from "react";
import "./footer.css"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'

const FooterPage = () => {
  return (
    
    <MDBFooter  className="footer-style" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Info</h5>
            <p>
              Strona zawierająca podstaowe informacje o mnie.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Podstrony</h5>
            <ul>
            <li className="list-unstyled">
                <a href="./about">O mnie</a>
              </li>
              <li className="list-unstyled">
                <a href="./education">Edukacja</a>
              </li>
              <li className="list-unstyled">
                <a href="./experience">Doświadczenie</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  Adam Sypnik 
        </MDBContainer>
      </div>
    </MDBFooter>

  );
}

export default FooterPage;