import React, {useState} from "react";
import NavBar from "../NavBar/navbar";
import FooterPage from "../NavBar/footer";
import "./education.css";
import {Button} from "react-bootstrap";
import {Expand,ExpandBoxes,BoxExpand} from "react-expand-animated";

const Education = props => {
    const [state, setState] = useState(false);
    const toggle = async () => {
        this.ListeningStateChangedEvent(prevState => ({open: !prevState.open}));
    }
return(
    <div>
        <div>
            <NavBar />
        </div>
        <div className="container">
            <h1>Szkoły</h1>
            <div>
                <h2>Technikum Informatyczne im. Stanisława Staszica nr 1 w Działdowie
                    <h3>2011-2015</h3>
                    <p>We wrześniu 2011 roku rozpocząłem naukę w Technikum w Działdowie. Wybrałem tę szkołę ze względu na to, że była to najbliższe technikum o profilu informatycznym.
                         To tutaj rozpocząłem swoją przygodę z programowaniem.
                         Technikum zakończyłem w kwietniu 2015.
                    </p>
                    <h2>
                        Wydział Matematyki i Informatyki Uniwersytetu Warmińsko-Mazurskiego w Olsztynie
                        <h3>2015-2019</h3>
                        <h4>Kierunek Informatyka. Specjalność Inżynieria Systemów Infromatycznych.</h4>
                        <p>W październiku 2015 roku rozpocząłem naukę na UWM. To podczas studiów rozwinąłem swoje umiejętnośći programistyczne. W czerwcu 2019 uzyskałem absolutorium z Kierunku Informatyka</p>
                    </h2>
                </h2>
            </div>
        </div>
        <div class="footer">
            <FooterPage />
        </div>
    </div>
);
}
export default Education;
