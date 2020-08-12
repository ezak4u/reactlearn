import React from 'react'

// function MyCard(props){
//     return (<div style={{padding:50,backgroundColor:"#FFEE00",color:"#001155",fontSize:20}}> {props.name} <hr></hr></div>)        
    
// }

class MyCard extends React.Component{
    render(){
        return (<div style={{padding:50,backgroundColor:"#FFEE00",color:"#001155",fontSize:20}}> {this.props.name} <hr></hr></div>);
    }
}
export default MyCard;