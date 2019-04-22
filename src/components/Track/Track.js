import React from 'react';
import {Button, Card, CardBody} from "reactstrap";
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
                <Button onClick={()=>props.addToHistory(props.id)}>Add to history</Button>
            </CardBody>
        </Card>
    );
};

Track.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    addToHistory: PropTypes.func.isRequired,
};

export default Track;