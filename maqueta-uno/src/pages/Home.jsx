import Article from "../components/Article";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Img from "../components/Img";
import Main from "../components/Main";
import Section from "../components/Section";
import "./Home.css";

export default function Home(){
    return(
        <div className="bigContainer">
            <div className="containerHeader">
                <Header/>
                <Img/>
            </div>
            <div className="containerMain">
                <Main/>
                <div className="containerSecciones">
                    <Section/>
                    <Section/>
                </div>
            </div>
            <div className="containerFooter">
                <Article/>
                <Article/>
                <Footer/>
            </div>
        </div>

    )
}