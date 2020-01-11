import React from "react";
import NavBar from "../NavBar/navbar";
import FooterPage from "../NavBar/footer";
import "./about.css";
const AboutMe = props => {
    return(
        <div className="body">
        <div>
            <NavBar />
        </div>
        <div className="container">
            <h1>Troszkę o mnie</h1>
            <p>Nazywam się Adam Sypnik, pochodzę z Lidzbarka Welskiego, mała miejscowość pomiędzy Działdowiem, Brodnica i Żurominem. Urodziłem się 21 października 1995 w Żurominie. 
                Swoje pierwsze kroki z programowaniem zacząłem II drugiej klasie technikum. To tutaj zacząłem poznawać HTML, CSS oraz postawiłem swoje pierwsze kroki w programowaniu. 
                Swoją przygodę z programowaniem zacząłem na lekcji programowania. To tutaj poznałem pierwsze języki programowania TruboPascal oraz C++.
                 Po ukończeniu technikum dostałem się na Wydział Matematyki i Informatyki na Uniwersytecie Warmińsko-Mazurskim w Olsztynie, gdzie poznałem nowe języki programowania takie jak m.in.
                  Python oraz C#. Przez okres studiów udzielałem się w Radzie Wydziałowej Samorządu Studenckiego oraz byłem członkiem Rady Wydziałowej. 
                  Do RWSS dołączyłem pod koniec pierwszego roku. W kolejnych latach pełniłem rolę zastępcy przewodniczącego, a następnie zostałem członkiem prezydium.
                

            </p>
        </div>
        <div className="footer">
            <FooterPage />
        </div>
        </div>
        );
}
export default AboutMe;