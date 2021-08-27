import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import Login from "./login";
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Router } from "react-router";

afterEach(()=> {
    cleanup();
});

const props = {
    match:{
        params: jest.fn(),
    }
  }

it("Should Render Home Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Login {...props} history={history}/>
        </Router>
    );
    const homeComponentId  = screen.getByTestId('tst-login')
    expect(homeComponentId).toBeInTheDocument();
}); 

it("Should Render Login Button in Home Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Login {...props} history={history}/>
        </Router>
    );
    const loginByttonId = screen.getByTestId('tst-login-btn')
    expect(loginByttonId).toBeInTheDocument();
    expect(loginByttonId).toHaveTextContent('login')
}); 

it("Should Render Email Input Field Login Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Login {...props} history={history}/>
        </Router>
    );
    const loginByttonId = screen.getByTestId('tst-login-input-email')
    expect(loginByttonId).toBeInTheDocument();
    expect(loginByttonId).toHaveTextContent('Email address')
}); 


test('matches snapshot', ()=> {
    const history = createMemoryHistory(['/', '/login']);
    const tree = renderer.create(
        <Router history={history}>
            <Login {...props} history={history}/>
    </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
