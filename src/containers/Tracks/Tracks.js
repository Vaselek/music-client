import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {addToHistory, fetchAlbumTracks, deleteTrack} from "../../store/actions/tracksActions";
import Track from "../../components/Track/Track";
import {getUser} from "../../store/actions/usersActions";
import {publish} from "../../store/actions/artistsActions";

class Tracks extends Component {

    componentDidMount() {
        this.props.match.params.id && this.props.fetchAlbumTracks(this.props.match.params.id);
    };

    addToHistory = (id) => {
        this.props.addToHistory(id)
    };

    isVisible = (track) => {
        return track.published || (this.props.user && this.props.user.role === 'admin')
    };

    deleteTrack = (trackId, albumId) => {
        this.props.deleteTrack(trackId, albumId)
    };

    publish = (trackId, albumId) => {
        this.props.publish(trackId, albumId)
    };

    render() {
        return (
            <Fragment>
                <h2>{this.props.artistName}</h2>
                <h5>{this.props.albumTitle}</h5>
                {this.props.tracks.map(track => (
                    this.isVisible(track) && (<Track key={track._id}
                           id={track._id}
                           title={track.title}
                           duration={track.duration}
                           sequence={track.sequence}
                           publish={()=>this.publish(track._id, track.album)}
                           published={track.published}
                           isAdminView={this.props.user && this.props.user.role === 'admin'}
                           deleteTrack={()=>this.deleteTrack(track._id, track.album)}
                           addToHistory={this.addToHistory}
                    />)
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks.tracks,
    artistName: state.tracks.artistName,
    albumTitle: state.tracks.albumTitle,
    user: state.users.user ? state.users.user : getUser()
});

const mapDispatchToProps = dispatch => ({
    fetchAlbumTracks: (albumId) => dispatch(fetchAlbumTracks(albumId)),
    addToHistory: (trackId) => dispatch(addToHistory(trackId)),
    deleteTrack: (trackId, albumId) => dispatch(deleteTrack(trackId, albumId)),
    publish: (trackId, albumId) => dispatch(publish(trackId, albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);

