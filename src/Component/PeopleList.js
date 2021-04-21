import React, { Component } from 'react'

import '../style/peopleList.css'
import Skeleton from './Skeleton'
import './Skeleton.js'

export default class PeopleList extends Component {


    render() {
        if (this.props.isloading) {
            return <ul className="people-list">
                {this.props.people.map((person) => {
                    return (
                        <Skeleton key={person.id} />
                    )
                })
                }
            </ul>
        } else {
            return <ul className="people-list">
                {this.props.people.map((person) => {
                    return (
                        <li key={person.id} className="person">
                            <div className="container-image">
                                <img className="img" src={person.avatar} alt="" />
                            </div>
                            <div className="info">
                                <p className="full-name">
                                    <strong>
                                        {person.first_name} {person.last_name}
                                    </strong>
                                </p>
                                <p className="email">{person.email}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        }

    }
}
