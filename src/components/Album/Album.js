import React from 'react';
import Thumbnail from "../Thumbnail/Thumbnail";
import {Link} from "react-router-dom";
import {Card, CardBody, CardText} from "reactstrap";
import PropTypes from 'prop-types';

const getYear = (timestamp) => {
    const date = new Date(timestamp);
    return date.getFullYear();
}

const Album = (props) => {
    return (
        <Card style={{marginBottom: '10px'}}>
            <CardBody style={{ display: 'flex' }}>
                <Thumbnail image={props.image}/>
                <div>
                    <Link to={'/albums/' + props._id} onClick={(e) => props.getAlbumTitle(props.title)}>
                        {props.title}
                    </Link>
                    <CardText>Issued at: {getYear(props.issuedAt)}</CardText>
                </div>
            </CardBody>
        </Card>
    );
};

Album.propTypes = {
    title: PropTypes.string,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    photo: PropTypes.string,
    issuedAt: PropTypes.string
};

export default Album;