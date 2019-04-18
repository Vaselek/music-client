import React from 'react';
import Thumbnail from "../Thumbnail/Thumbnail";
import {Link} from "react-router-dom";
import {Card, CardBody} from "reactstrap";
import PropTypes from 'prop-types';

const Artist = (props) => {
    return (
        <Card style={{marginBottom: '10px'}}>
            <CardBody>
                <Thumbnail image={props.photo}/>
                <Link to={'/artists/' + props._id} onClick={(e) => props.getArtistName(props.name)}>
                    {props.name}
                </Link>
            </CardBody>
        </Card>
    );
};

Artist.propTypes = {
    image: PropTypes.string,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string
};

export default Artist;