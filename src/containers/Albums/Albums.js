import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchArtistAlbums, getArtistName} from "../../store/actions/albumsActions";
import {getAlbumTitle} from "../../store/actions/tracksActions";
import Album from "../../components/Album/Album";

class Albums extends Component {

    componentDidMount() {
        this.props.match.params.id && this.props.fetchArtistAlbums(this.props.match.params.id);
    };

    getAlbumTitle = (albumTitle) => {
        this.props.getAlbumTitle(albumTitle)
    };

    render() {
        return (
            <Fragment>
                <h2>{this.props.artistName}</h2>
                {this.props.albums.map(album => (
                    <Album key={album._id}
                            _id={album._id}
                            title={album.title}
                            image={album.image}
                            issuedAt={album.issuedAt}
                            getAlbumTitle={this.getAlbumTitle}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.albums,
    artistName: state.albums.artistName
});

const mapDispatchToProps = dispatch => ({
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
    getAlbumTitle: (albumTitle) => dispatch(getAlbumTitle(albumTitle)),
    getArtistName: (artistName) => dispatch(getArtistName(artistName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);

