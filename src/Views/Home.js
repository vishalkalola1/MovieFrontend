import React, { Component } from 'react';
import '../Css/Home.css'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.searchSubmit = this.searchSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    searchSubmit(event){
        event.preventDefault();
        this.props.history.push(`/search/${this.state.search}`)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            
            <div class="mainbody">
                <br/>
                <div id="wrapper">
                    <div id="c1">
                        <label class="labelclass">Movies</label>
                    </div>
                    <div id="c2">
                        <div id="wrapper">
                            <div id="c1" style={{width:"70%"}}>
                                <input class="oneSub" type="text" value={this.state.search} name="search" style={{marginTop:'10px',height:'50px'}}  placeholder="Search movie" onChange={this.handleInputChange} required/>
                            </div>
                            <div id="c2" style={{width:"30%"}}>
                                <button style={{height:'50px'}} onClick={this.searchSubmit}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            <br/>
            <div>
            <AliceCarousel autoPlay autoPlayInterval="2000" fadeOutAnimation={true} buttonsDisabled={true} controlsStrategy="responsive">
                <img src={img1} className="sliderimg"/>
                <img src={img2} className="sliderimg"/>
                <img src={img3} className="sliderimg"/>
            </AliceCarousel>
            </div>
            <h3 class="htag">Recommended Movies</h3>
            <div class="outer">
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
            </div>
            <h3 class="htag">New Movies</h3>
            <div class="outer">
            <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
            </div>
            <h3 class="htag">Last Seen</h3>
            <div class="outer">
            <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
                <div class="zoom">
                    <img src={require('../Images/background.jpg')} style={{ width:'200px', height:'200px'}}></img>
                </div>
            </div>
            
            </div>
        )
    }
}

export default Home;