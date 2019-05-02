import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchArtistAlbums, getArtistName, deleteAlbum} from "../../store/actions/albumsActions";
import {getAlbumTitle} from "../../store/actions/tracksActions";
import Album from "../../components/Album/Album";
import {getUser} from "../../store/actions/usersActions";
import {publish} from "../../store/actions/artistsActions";

class Albums extends Component {

    componentDidMount() {
        this.props.match.params.id && this.props.fetchArtistAlbums(this.props.match.params.id);
    };

    getAlbumTitle = (albumTitle) => {
        this.props.getAlbumTitle(albumTitle)
    };

    isVisible = (album) => {
        return album.published || (this.props.user && this.props.user.role === 'admin')
    };

    deleteAlbum = (albumId, artistId) => {
        this.props.deleteAlbum(albumId, artistId)
    };

    publish = (albumId, artistId) => {
        this.props.publish(albumId, artistId)
    };

    render() {
        return (
            <Fragment>
                <h2>{this.props.artistName}</h2>
                {this.props.albums.map(album => (
                    this.isVisible(album) && (<Album key={album._id}
                            _id={album._id}
                            title={album.title}
                            image={album.image}
                            publish={()=>this.publish(album._id, album.artist)}
                            issuedAt={album.issuedAt}
                            published={album.published}
                            isAdminView={this.props.user && this.props.user.role === 'admin'}
                            deleteAlbum={()=>this.deleteAlbum(album._id, album.artist)}
                            getAlbumTitle={this.getAlbumTitle}
                    />)
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.albums,
    artistName: state.albums.artistName,
    user: state.users.user ? state.users.user : getUser()
});

const mapDispatchToProps = dispatch => ({
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
    getAlbumTitle: (albumTitle) => dispatch(getAlbumTitle(albumTitle)),
    getArtistName: (artistName) => dispatch(getArtistName(artistName)),
    deleteAlbum: (albumId, artistId) => dispatch(deleteAlbum(albumId, artistId)),
    publish: (albumId, artistId) => dispatch(publish(albumId, artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);

