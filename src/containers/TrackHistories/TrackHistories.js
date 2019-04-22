import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import TrackHistory from "../../components/TrackHistory/TrackHistory";
import {fetchTrackHistories} from "../../store/actions/trackHistoriesActions";

class TrackHistories extends Component {

    componentDidMount() {
        this.props.fetchTrackHistories();
    };

    render() {
        return (
            <Fragment>
                <h2>Your Track History</h2>
                {this.props.trackHistories.map(trackHistory => (
                    <TrackHistory key={trackHistory._id}
                           _id={trackHistory._id}
                           artist={trackHistory.artist.name}
                           title={trackHistory.track.title}
                           dateTime={trackHistory.dateTime}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    trackHistories: state.trackHistories.trackHistories
});

const mapDispatchToProps = dispatch => ({
    fetchTrackHistories: () => dispatch(fetchTrackHistories())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistories);

