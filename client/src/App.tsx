import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Parcels from './Parcels';
import Items from './Items';
import { GlobalStyle } from './GlobalStyle';
import Appbar from './shared/components/Appbar';
import Home from './Home';
import Dropdown from './shared/components/Dropdown';
import useClickOutside from './shared/hooks/useClickOutside';

function App() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Appbar toggleDropdown={toggleDropdown} />
        <Dropdown
          show={showDropdown}
          dropdownRef={dropdownRef}
          closeDropdown={closeDropdown}
        />
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
