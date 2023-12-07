import React, { Component } from 'react';

class Film extends Component {
    state = {
        showSummary: false,
    };

    toggleSummary = () => {
        this.setState((prevState) => ({
            showSummary: !prevState.showSummary,
        }));
    };

    render() {
        const { filmData } = this.props;

        if (!filmData || filmData.length === 0) {
            return null;
        }
        const firstFilm = filmData[0].show;
        return (
            <div className="card">
                <img src={firstFilm.image.medium} className="card-img-top" alt={firstFilm.name} />
                <div className="card-body">
                    <h5 className="film-title">{firstFilm.name}</h5>
                    <p className="film-score">Score: {firstFilm.rating.average}/10</p>
                    <p className="runtime">Average Runtime: {firstFilm.runtime} minutes</p>
                    <p className="film-premiere">Premiered in {firstFilm.premiered}</p>
                    <p className="film-end">Ended in {firstFilm.ended}</p>
                    <div className="summary">
                        <button onClick={this.toggleSummary} className="summary-toggle">
                            {this.state.showSummary ? 'Hide Summary' : 'Show Summary'}
                        </button>
                        {this.state.showSummary && (
                            <div dangerouslySetInnerHTML={{ __html: firstFilm.summary }} />
                        )}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Film;
