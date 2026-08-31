import React from "react";
import Products from "./Products";
import JumbotronComponent from './JumbotronComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <Products /> */}
      <JumbotronComponent>
        This is a simple hero unit, a simple jumbotron-style
        component for calling extra attention to featured content or
        information.
      </JumbotronComponent>
    </div>
  );
}

export default App;
