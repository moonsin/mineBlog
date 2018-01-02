import React, {
    Component
} from 'react';
import './Banner.css';
import {
	Router,
	Route,
	Link,
	IndexRoute
} from 'react-router-dom';


export default class Banner extends Component {
    render() {
    console.log(this.props.match);
        return (
            <div className="banner">
                <h2 className="banner__title">Welcome to Ernest's Blog</h2>
                <Link to={`${this.props.match.url}/login`} className='banner__link' > Login </Link> 
            </div>
        )
    }
}
