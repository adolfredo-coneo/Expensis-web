import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Hero from '../components/Home/Hero';
import Home from '../components/Home/Home';
import { Provider } from 'react-redux';
import store from '../store/index';

describe('Home Component', () => {
  test('renders "Improve your finances"', () => {
    //Arrange
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    //Assert
    const textElement = screen.getByText('Improve your finances', {
      exact: false,
    });
    expect(textElement).toBeInTheDocument();
  });

  test('renders "Create an Account" link', () => {
    //Arrange
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    //Assert
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/home/register');
  });

  test('renders "Register" component', () => {
    //Arrange
    const history = createMemoryHistory();
    const route = '/home';
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );

    //Act
    const linkElement = screen.getByText('Create an Account');
    expect(linkElement).toHaveAttribute('href', '/home/register');
    const leftClick = { button: 0 };
    userEvent.click(linkElement, leftClick);

    //Assert
    const registerComponent = screen.getByText(/Create Your Account/i);
    expect(registerComponent).toBeInTheDocument();
  });

  test('renders "Login" component', () => {
    //Arrange
    const history = createMemoryHistory();
    const route = '/home';
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );

    //Act
    const linkElement = screen.getByText('Login');
    expect(linkElement).toHaveAttribute('href', '/home/login');
    userEvent.click(linkElement);

    //Assert
    const registerComponent = screen.getByText(/Access Your Account/i);
    expect(registerComponent).toBeInTheDocument();
  });
});
