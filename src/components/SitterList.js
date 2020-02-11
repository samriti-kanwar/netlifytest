import React from 'react';
import SitterCard from './SitterCard';

const SitterList = props => {
    const sitters = props.sitters.map(sitter => {
        return <SitterCard sitter={sitter} key={sitter.id} />
    })
    return <div className="ui four stackable cards">{sitters}</div>;
}
export default SitterList;