import React from "react";
import NavBar from "../NavBar/navbar";
import FooterPage from "../NavBar/footer";
import {Link} from "react-router-dom";
import {Carousel,Button} from "react-bootstrap";
import aboutme from "../../img/aboutme.jpg";
import education from "../../img/education.jpg";
import experience from "../../img/experience.jpeg";
import "./home.css"

const Home = props => {
return(
    <div className="body">
        <div>
            <NavBar />
        </div>
        <div className="carousel-style">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={aboutme}
                    alt="first slide"/>
                    <Carousel.Caption>
                        <h1>O mnie</h1>
                        <p className="carousel-style-p">Kilka podstawowych infomracji o mnie<Button variant="link"><Link to="./experience">Więcej</Link></Button></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={education}
                    alt="first slide"/>
                    <Carousel.Caption>
                        <h1>O mojej edukacji</h1>
                        <p>Trochę o mojej edukacji<Button variant="link"><Link to="./experience">Więcej</Link></Button></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={experience}
                    alt="first slide"/>
                    <Carousel.Caption>
                        <h1>M moim doświadczeniu zawodowym</h1>
                        <p>Trochę o moim doświadczeniu zawodowym<Button variant="link"><Link to="./experience">Więcej</Link></Button></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="test">
            <FooterPage />
        </div>
    </div>
);
}
export default Home;
