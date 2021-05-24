import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Parcels from './Parcels';
import Items from './Items';
import { GlobalStyle } from './GlobalStyle';
import Tabs from './shared/components/Tabs';
import Appbar from './shared/components/Appbar';

const tabs = [
  { link: '/parcels', text: 'Parcels' },
  { link: '/items', text: 'Items' },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Appbar />
        <Tabs tabs={tabs} />
        <Switch>
          <Route path='/parcels' exact component={Parcels} />
          <Route path='/items' exact component={Items} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
