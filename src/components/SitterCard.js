import React from 'react';
import faker from 'faker';

const SitterCard = props => {
    return (
        <div class="ui card">
            <div class="image">
                <img alt={props.sitter.firstName} src={faker.image.avatar()} />
            </div>
            <div class="content">
                <a href="# " class="header">{props.sitter.firstName} {props.sitter.lastName}</a>
                <div class="meta">
                <span class="date">Working since {props.sitter.yearStarted}</span>
                </div>
                <div class="description">
                    {props.sitter.jobTitle}
                </div>
            </div>
            <div class="extra content">
                <a href="# ">
                <i class="map marker alternate icon"></i>
                {props.sitter.location}
                </a>
            </div>
        </div>
    )
}

export default SitterCard;