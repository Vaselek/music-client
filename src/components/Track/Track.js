import React from 'react';
import {Card, CardBody } from "reactstrap";
import PropTypes from 'prop-types';


const Track = (props) => {
    return (
        <Card style={{marginBottom: '10px'}}>
            <CardBody>
                <div>
                    <p><b>{props.title}</b></p>
                    <p>Duration: {props.duration}</p>
                    <p>Track Number: {props.sequence}</p>
                </div>
            </CardBody>
        </Card>
    );
};

Track.propTypes = {
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};

export default Track;