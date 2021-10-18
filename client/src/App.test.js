import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import App from './App';

test('renders learn react link', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  useSelectorMock.mockReturnValue({
    curPage: 1,
    itemsPerPage: 8,
    totalItems: 10,
  });
  const dummyDispatch = jest.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);

  render(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
