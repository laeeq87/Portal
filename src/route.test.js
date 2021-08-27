import React from "react";
import { render, cleanup} from '@testing-library/react';
import Routes from "./routes";
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import Home from "./home";
import {
    Route,
    Switch,Router,
    Redirect,
  } from "react-router-dom";


afterEach(()=> {
    cleanup();
});

const props = {
    match:{
        params: jest.fn(),
    }
  }

it("Should Render Porfile Component", ()=> {
    const history = createMemoryHistory(['/', '/login', '/account']);
    const { debug } =render(
        <Router history={history}>
            <Switch>
                <Route path="/account/:id" exact component={Home}/>
                <Route path="/account" exact><Redirect to="/account/profile" /><div>Account profile Rendered</div></Route>
            </Switch>
        </Router>
    );
    debug()
}); 


test('matches snapshot', ()=> {
    const history = createMemoryHistory(['/', '/login', '/account']);
    const tree = renderer.create(
        <Router history={history}>
            <Routes{...props} history={history}/>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
