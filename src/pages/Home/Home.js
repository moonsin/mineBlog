import React, {
	Component
} from 'react';
import Banner from '../../components/Banner';

export default class Home extends Component {
    render(){
        return(
            <Banner {...this.props} /> 
        ) 
    }
}
