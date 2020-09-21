import React, { Component } from 'react';
import '../Css/SearchMovie.css'
import { searchMovie } from '../api/apiService'

class SearchMovie extends Component {

    name = ""
    constructor(props) {
        super(props);
        this.state = {
            childComponent:[]
        }
        this.name = props.match.params.name
        this.moveToDetails = this.moveToDetails.bind(this)
    }

    componentDidMount() {
        this.getSearchData(this.name)
    }

    getSearchData(name){
        searchMovie(name).then((data)=>{
            this.setState({
                childComponent: data
            })
        })
    }

    moveToDetails(event){
        const id = event.target.id;
        this.props.history.push(`/details/${id}`)        
    }

    getrDivList() {
        return this.state.childComponent.map((data) => 
            <div><img id={data.id} src={data.imageLink} onClick={this.moveToDetails} style={{width:'300px',height:'300px'}}/></div>
        )
    }
    
    render() {
        return (
            <div class="mainbody">
                <div>
                    <label class="labelclassSearch">Movies</label>
                </div>
                <div class="outer1">
                    { this.getrDivList() }
                </div>
            </div>
        )
    }
}

export default SearchMovie;