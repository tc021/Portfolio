import React from "react";
import NavBar from "../NavBar/navbar";
import FooterPage from "../NavBar/footer";

const Experience = props => {
return(
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <div className="container">        
                <h1>Doświadczenie</h1>
                    <h2>Process Team sp. z o.o.</h2>
                        <h3>Maj 2018 - Październik 2018</h3>
                            <p>Tutaj pracowałem jako rekruter na szkolenie z dotacji unijnych. Do moich obowiązków nalerzało administrowanie dokumentacją uczetników szkoelń, utrzymywanie kontaktu z klientami,
                                prowadzenie prac organizacyjnych oraz wykonywanie prac administracyjnych, logistycznych oraz porządkowych.
                            </p>
                    <h2>Multikino</h2>
                        <h3>Czerwiec 2019 - </h3>
                            <p>W Multikinie pracuję jako Persolnel Obsługi Klienta, do moich obowiązków należy obsługa kilenta oraz utrzymywanie czystości obiektu.</p>
            </div>
        </div>
        <div className="footer">
            <FooterPage />
        </div>
    </div>
);
}
export default Experience;
