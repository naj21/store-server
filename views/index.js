import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import store from '../reducers/store';

//components
import Main from './components/main'

class Lappy extends React.Component{ 
	render(){
	//var main = ReactDOMServer.renderToString(<Main/>)

		return(
			<div>
				{/*<div dangerouslySetInnerHTML={{__html: main}}/>*/}
				<Provider store={store}>
					<Main/>
				</Provider>
			</div>
		)
	}
}

export default Lappy;