import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout = {()=>{ }}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should envoke startLogin-click button of Header', () => {
    const startLogin = jest.fn();
    const wrapper  = shallow(<Header startLogout={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});