import React, { Component } from 'react'

import '../style/skeleton.css'

export default class Skeleton extends Component {
    render() {
        return (
            <div>
                <li className="person">
                    <div className="skeleton-container">
                        <div className="skeleton-img"></div>
                    </div>
                    <div className="skeleton-info">
                        <div className="skeleton-name"></div>
                        <div className="skeleton-email"></div>
                    </div>
                </li>
            </div>
        )
    }
}
