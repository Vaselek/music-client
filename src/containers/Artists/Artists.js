import React, {Component, Fragment} from 'react';
import Artist from "../../components/Artist/Artist";
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import {getArtistName} from "../../store/actions/albumsActions";

class Artists extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    };

    getArtistName = (name) => {
        this.props.getArtistName(name)
    }

    render() {
        return (
            <Fragment>
                <h2>Artists</h2>
                {this.props.artists.map(artist => (
                    <Artist key={artist._id}
                            _id={artist._id}
                            name={artist.name}
                            photo={artist.photo}
                            getArtistName={this.getArtistName}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    getArtistName: (name) => dispatch(getArtistName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);