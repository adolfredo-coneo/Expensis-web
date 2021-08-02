import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '../components/Home/Home';
import { Provider } from 'react-redux';
import store from '../store/index';

describe('Login Component', () => {
  test('sucesfully Login to the app', async () => {
    //Arrange
    const history = createMemoryHistory();
    const route = '/home/login';
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );

    //Act
    const emailElement = screen.getByRole('textbox', { name: 'Email' });
    expect(emailElement).toBeInTheDocument();
    const passwordElement = screen.getByRole('password', { name: 'Password' });
    expect(passwordElement).toBeInTheDocument();
    const submitElement = screen.getByRole('button');
    expect(submitElement).toContainHTML('Login');
    userEvent.type(emailElement, 'ado.coneo@gmail.com');
    userEvent.type(passwordElement, 'adolfredo');
    userEvent.click(submitElement);

    //Assert
    const logginElement = await screen.getByText('Logging in', {
      exact: false,
    });
    expect(logginElement).toBeInTheDocument();
    const successElement = await screen.findByText('Dashboard', {
      exact: false,
    });
    expect(successElement).toBeInTheDocument();
  });

  test('enter bad Login credentials', async () => {
    //Arrange
    const history = createMemoryHistory();
    const route = '/home/login';
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );

    //Act
    const emailElement = screen.getByRole('textbox', { name: 'Email' });
    expect(emailElement).toBeInTheDocument();
    const passwordElement = screen.getByRole('password', { name: 'Password' });
    expect(passwordElement).toBeInTheDocument();
    const submitElement = screen.getByRole('button');
    expect(submitElement).toContainHTML('Login');
    userEvent.type(emailElement, 'no-exist@gmail.com');
    userEvent.type(passwordElement, 'noexist');
    userEvent.click(submitElement);

    //Assert
    const logginElement = await screen.getByText('Logging in', {
      exact: false,
    });
    expect(logginElement).toBeInTheDocument();
    const successElement = await screen.findByText('no user record', {
      exact: false,
    });
    expect(successElement).toBeInTheDocument();
  });
});
