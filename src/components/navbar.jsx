import React, { Component } from 'react';
import Axios from 'axios';
import Film from './film.jsx'; 

class Navbar extends Component {
    state = {
        searchQuery: '',
        filmData: null, 
        dataLenght:null
       
    };
    
    getFilm = (event) => {
        event.preventDefault();
        Axios.get(`https://api.tvmaze.com/search/shows?q=${this.state.searchQuery}`)
            .then(response => {
                this.setState({ filmData: response.data }); 
                this.setState({dataLenght: response.data.lenght});
                console.log(response.data);
                
                
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    handleInputChange = (event) => {
        this.setState({
            searchQuery: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand">PopCorner</a>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={this.state.searchQuery}
                                onChange={this.handleInputChange}
                            />
                            <button onClick={this.getFilm} className="search" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                {this.state.filmData && <Film filmData={this.state.filmData} />} {}
            </div>
        );
    }
}

export default Navbar;