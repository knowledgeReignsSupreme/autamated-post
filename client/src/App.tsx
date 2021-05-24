import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Parcels from './Parcels';
import Items from './Items';
import { GlobalStyle } from './GlobalStyle';
import Appbar from './shared/components/Appbar';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Appbar />
        <Switch>
          <Route path='/parcels' exact component={Parcels} />
          <Route path='/' exact component={Home} />
          <Route path='/items/page/:pageNumber' exact component={Items} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
