import React, { Component } from 'react';
import Card from './card';

class ContentBase extends Component {
    state = {  } 
    render() { 
        return (
            <Card style={{marginTop:"20px"}}>
                {this.props.children}
            </Card>
        );
    }
}
 
export default ContentBase;