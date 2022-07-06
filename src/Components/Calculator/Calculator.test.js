import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import Calculator from './Calculator';


describe ('Calculator', () => {

  it ('The default value of the calculator screen is 0', () =>{
    const component = render(<Calculator />); 
    const calcScreen = component.container.querySelector('h1');
    expect(calcScreen.innerHTML).toBe('0')
  })

  it ('the user sums 5+5', () => {
    const component = render(<Calculator />);
    const calcScreen = component.container.querySelector('h1');
    //user clicks on button number "5" 
    let button = component.getByText('5')
    fireEvent.click(button)
    expect(calcScreen.innerHTML).toBe('5')
    //user clicks on button "+"
    button = component.getByText('+')
    fireEvent.click(button)
    expect(calcScreen.innerHTML).toBe('+')
    //user clicks on button "5"
    button = component.getByText('5')
    fireEvent.click(button)
    expect(calcScreen.innerHTML).toBe('5')
    // user clicks on button "=" to see the answer
    button = component.getByText('=')
    fireEvent.click(button)
    expect(calcScreen.innerHTML).toBe('10')
  })

  it ('the user tries to divide by 0', () => {
    const component = render(<Calculator />);
    const calcScreen = component.container.querySelector('h1');
    let button = component.getByText('5')
    fireEvent.click(button)
    button = component.getByText('÷')
    fireEvent.click(button)
    button = component.getByText('0')
    fireEvent.click(button)
    button = component.getByText('=')
    fireEvent.click(button)
    expect(calcScreen.innerHTML).toBe("Can't divide by 0.")
  })

  it ('renders the component', ()=> {
    const component = render(<Calculator />);
    expect(component).toMatchSnapshot();
  })
})






 