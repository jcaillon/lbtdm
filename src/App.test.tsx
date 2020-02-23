import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount, shallow } from 'enzyme';
import Heading from './Heading';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
    //expect(1).toBe(2);
});

it('renders the heading', () => {
    // shallow does not include subcomponents, use mount instead.
    const wrapper = shallow(<Heading />);
    expect(wrapper.find('h1').text()).toBe('Hello react');
});

it('renders the app and the heading', () => {
    // shallow does not include subcomponents, use mount instead.
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Hello react');
});

it('test label function', () => {
    const a = new App({});
    expect(a.label('world')).toBe('Hello world!!!');
});
