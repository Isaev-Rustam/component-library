// // src/components/Button/Button.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import Button from './Button';  // Импортируем компонент Button

// test('renders button with label', () => {
//   render(<Button label="Click me" onClick={() => {}} />);
//   expect(screen.getByText('Click me')).toBeInTheDocument();
// });

// test('calls onClick when button is clicked', () => {
//   const handleClick = jest.fn();
//   render(<Button label="Click me" onClick={handleClick} />);
//   fireEvent.click(screen.getByText('Click me'));
//   expect(handleClick).toHaveBeenCalled();
// });
