import React from 'react';

class Hello extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		// const element = <div>Hello {this.props.name}</div  >;
		// return <div className='hello'>{element}</div>;
		return (
			<div className='Welcome'>
				<h1 id='logo'>Hello</h1>
				{/* <h1 className='Hello'>Hello</h1> */}
				Welcome to my personal website. I am a Software Engineer who
				graduated Bates College in May 2020. My Sophomore year of
				college I decided to enroll in Fullstack Academy's Javascript
				Bootcamp.
			</div>
		);
	}
}

export default Hello;
