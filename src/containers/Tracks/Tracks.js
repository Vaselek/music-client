import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {addToHistory, fetchAlbumTracks} from "../../store/actions/tracksActions";
import Track from "../../components/Track/Track";

class Tracks extends Component {

    componentDidMount() {
        this.props.match.params.id && this.props.fetchAlbumTracks(this.props.match.params.id);
    };

    addToHistory = (id) => {
        this.props.addToHistory(id)
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.artistName}</h2>
                <h5>{this.props.albumTitle}</h5>
                {this.props.tracks.map(track => (
                    <Track key={track._id}
                           id={track._id}
                           title={track.title}
                           duration={track.duration}
                           sequence={track.sequence}
                           addToHistory={this.addToHistory}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks.tracks,
    artistName: state.tracks.artistName,
    albumTitle: state.tracks.albumTitle
});

const mapDispatchToProps = dispatch => ({
    fetchAlbumTracks: (albumId) => dispatch(fetchAlbumTracks(albumId)),
    addToHistory: (trackId) => dispatch(addToHistory(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);

