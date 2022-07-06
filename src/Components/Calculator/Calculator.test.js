import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/dom';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('The default value of the calculator screen is 0', () => {
    const component = render(<Calculator />);
    const calcScreen = component.container.querySelector('h1');
    expect(calcScreen.innerHTML).toBe('0');
  });

  it('the user sums 5+5', () => {
    const component = render(<Calculator />);
    const calcScreen = component.container.querySelector('h1');
    // user clicks on button number "5"
    let button = component.getByText('5');
    fireEvent.click(button);
    expect(calcScreen.innerHTML).toBe('5');
    // user clicks on button "+"
    button = component.getByText('+');
    fireEvent.click(button);
    expect(calcScreen.innerHTML).toBe('+');
    // user clicks on button "5"
    button = component.getByText('5');
    fireEvent.click(button);
    expect(calcScreen.innerHTML).toBe('5');
    // user clicks on button "=" to see the answer
    button = component.getByText('=');
    fireEvent.click(button);
    expect(calcScreen.innerHTML).toBe('10');
  });

  it('the user tries to divide by 0', () => {
    const component = render(<Calculator />);
    const calcScreen = component.container.querySelector('h1');
    let button = component.getByText('5');
    fireEvent.click(button);
    button = component.getByText('÷');
    fireEvent.click(button);
    button = component.getByText('0');
    fireEvent.click(button);
    button = component.getByText('=');
    fireEvent.click(button);
    expect(calcScreen.innerHTML).toBe("Can't divide by 0.");
  });
});

describe('Jest Snapshot test for Calculator', () => {
  it('renders the component', () => {
    const component = render(<Calculator />);
    expect(component).toMatchSnapshot();
  });

  it('snapshot testing the calculator component', () => {
    const calculatorComponent = renderer
      .create(
        <section className="calculator-container">
          <div className="calculator-screen">
            <h1 className="solution">0</h1>
          </div>
          <div className="buttons-container">
            <button type="button" className="buttons">
              AC
            </button>
            <button type="button" className="buttons">
              +/-
            </button>
            <button type="button" className="buttons">
              %
            </button>
            <button type="button" className="buttons orange">
              ÷
            </button>
            <button type="button" className="buttons ">
              7
            </button>
            <button type="button" className="buttons ">
              8
            </button>
            <button type="button" className="buttons ">
              9
            </button>
            <button type="button" className="buttons orange">
              x
            </button>
            <button type="button" className="buttons ">
              4
            </button>
            <button type="button" className="buttons 5">
              5
            </button>
            <button type="button" className="buttons ">
              6
            </button>
            <button type="button" className="buttons orange">
              -
            </button>
            <button type="button" className="buttons ">
              1
            </button>
            <button type="button" className="buttons ">
              2
            </button>
            <button type="button" className="buttons ">
              3
            </button>
            <button type="button" className="buttons orange">
              +
            </button>
            <button type="button" className="buttons cero">
              0
            </button>
            <button type="button" className="buttons ">
              .
            </button>
            <button type="button" className="buttons orange">
              =
            </button>
          </div>
        </section>,
      )
      .toJSON();
    expect(calculatorComponent).toMatchSnapshot();
  });
});
