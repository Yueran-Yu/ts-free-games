import React, {ReactElement} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './Home/Home';
import {ErrorBoundary} from './ErrorBoundary';

const App = (): ReactElement => {
	return (
			<BrowserRouter>
				<Switch>
					<Route path="/">
						<ErrorBoundary>
							<Home/>
						</ErrorBoundary>
					</Route>
				</Switch>
			</BrowserRouter>
	);
}

export default App;
