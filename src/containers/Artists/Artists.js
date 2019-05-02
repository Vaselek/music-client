import React, {Component, Fragment} from 'react';
import Artist from "../../components/Artist/Artist";
import {connect} from "react-redux";
import {fetchArtists, deleteArtist, publish} from "../../store/actions/artistsActions";
import {getArtistName} from "../../store/actions/albumsActions";
import {getUser} from "../../store/actions/usersActions";

class Artists extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    };

    getArtistName = (name) => {
        this.props.getArtistName(name)
    };

    isVisible = (artist) => {
        return artist.published || (this.props.user && this.props.user.role === 'admin')
    };

    deleteArtist = (artistId) => {
        this.props.deleteArtist(artistId)
    };

    publish = (artistId) => {
        this.props.publish(artistId)
    };

    render() {
        return (
            <Fragment>
                <h2>Artists</h2>
                {this.props.artists.map(artist => (
                    this.isVisible(artist) && (<Artist key={artist._id}
                            _id={artist._id}
                            name={artist.name}
                            photo={artist.photo}
                            publish={()=>this.publish(artist._id)}
                            published={artist.published}
                            isAdminView={this.props.user && this.props.user.role === 'admin'}
                            deleteArtist={()=>this.deleteArtist(artist._id)}
                            getArtistName={this.getArtistName}
                    />)
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists,
    user: state.users.user ? state.users.user : getUser()
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    getArtistName: (name) => dispatch(getArtistName(name)),
    deleteArtist: (artistId) => dispatch(deleteArtist(artistId)),
    publish: (artistId) => dispatch(publish(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);