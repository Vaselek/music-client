import React, {Component, Fragment} from 'react';
import AlbumForm from "../../components/AlbumForm/AlbumForm";
import {createAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";

class NewAlbum extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    createAlbum = albumData => {
        this.props.createAlbum(albumData).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h2>New album</h2>
                <AlbumForm
                    onSubmit={this.createAlbum}
                    artists={this.props.artists}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    artists: state.artists.artists
})

const mapDispatchToProps = dispatch => ({
    createAlbum: albumData => dispatch(createAlbum(albumData)),
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAlbum);
