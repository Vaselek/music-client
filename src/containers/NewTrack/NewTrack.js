import React, {Component, Fragment} from 'react';
import TrackForm from "../../components/TrackForm/TrackForm";
import {createTrack} from "../../store/actions/tracksActions";
import {connect} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumsActions";

class NewTrack extends Component {

    componentDidMount() {
        this.props.fetchAlbums();
    }

    createTrack = trackData => {
        this.props.createTrack(trackData).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h2>New track</h2>
                <TrackForm
                    onSubmit={this.createTrack}
                    albums={this.props.albums}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    albums: state.albums.allAlbums
})

const mapDispatchToProps = dispatch => ({
    createTrack: trackData => dispatch(createTrack(trackData)),
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTrack);
