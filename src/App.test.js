import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from './MainPage';

let onIntersection;
let observerOptions;
let disconnect;
const scrollIntoView = jest.fn();

beforeEach(() => {
  localStorage.clear();
  scrollIntoView.mockClear();
  Element.prototype.scrollIntoView = scrollIntoView;
  disconnect = jest.fn();
  window.IntersectionObserver = jest.fn((callback, options) => {
    onIntersection = callback;
    observerOptions = options;
    return { observe: jest.fn(), disconnect };
  });
});

test('reveals tall concert sections on entry and again on return', () => {
  const { container, unmount } = render(<MemoryRouter><MainPage /></MemoryRouter>);
  const concerts = container.querySelector('#concerts');
  expect(observerOptions.threshold).toBe(0);
  act(() => onIntersection([{ target: concerts, isIntersecting: true, intersectionRatio: 0.2 }]));
  expect(concerts).toHaveClass('is-visible');
  expect(concerts.querySelector('a')).toHaveAttribute('href', '/concert-info/2026');
  act(() => onIntersection([{ target: concerts, isIntersecting: false, intersectionRatio: 0 }]));
  expect(concerts).toHaveClass('is-leaving');
  act(() => onIntersection([{ target: concerts, isIntersecting: true, intersectionRatio: 0.1 }]));
  expect(concerts).toHaveClass('is-visible');
  expect(concerts).not.toHaveClass('is-leaving');
  unmount();
  expect(disconnect).toHaveBeenCalled();
});

test('mobile menu and side navigation both scroll to concerts', () => {
  const { container } = render(<MemoryRouter><MainPage /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: '메뉴 열기' }));
  expect(container.querySelector('.MobileNav')).toHaveClass('is-open');
  fireEvent.click(container.querySelector('.MobileNav__link:nth-child(3)'));
  expect(scrollIntoView.mock.instances[0]).toBe(container.querySelector('#concerts'));
  expect(container.querySelector('.MobileNav')).not.toHaveClass('is-open');
  fireEvent.click(screen.getByRole('button', { name: 'concerts 섹션으로 이동' }));
  expect(scrollIntoView.mock.instances[1]).toBe(container.querySelector('#concerts'));
});
