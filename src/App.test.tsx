
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Counter App', () => {
  test('displays the initial count and all buttons', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Count: 0' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Increment' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeTruthy();
  });

  test('increments the count from 0 to 1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByRole('heading', { name: 'Count: 1' })).toBeTruthy();
  });

  test('decrements the count from 0 to -1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(screen.getByRole('heading', { name: 'Count: -1' })).toBeTruthy();
  });

  test('resets the count to 0 after incrementing', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByRole('heading', { name: 'Count: 2' })).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(screen.getByRole('heading', { name: 'Count: 0' })).toBeTruthy();
  });

  test('handles a sequence of multiple button clicks', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByRole('heading', { name: 'Count: 1' })).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByRole('heading', { name: 'Count: 2' })).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByRole('heading', { name: 'Count: 1' })).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByRole('heading', { name: 'Count: 0' })).toBeTruthy();
  });
});
