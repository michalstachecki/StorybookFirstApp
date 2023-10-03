import { fireEvent, render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import { ComponentForTest } from "../components/ComponentForTest";

const TestComponent = composeStory(ComponentForTest);

test('Checks if the form is valid', () => {
  render(<TestComponent />);

  const buttonElement = screen.getByRole('button', {
    name: 'TestButton',
  });

  fireEvent.click(buttonElement);

  const isFormValid = screen.getByLabelText('Text Displayed');
  expect(isFormValid).toBeInTheDocument();
});