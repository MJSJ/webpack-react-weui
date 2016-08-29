import React from "react"
export default class Wrap extends React.Component{
	render(){
		return(<div className= "we_wrapper">
			{this.props.children}
			</div>)
	}
}