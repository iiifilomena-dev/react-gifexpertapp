import React from 'react'
import '@testing-library/jest-dom'
import '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba de GifExpertApp', () => {

    test('iiifilomena says: h2 debe decir GifExpertApp ', () => {
        
        const wrapper = shallow( <GifExpertApp /> );

        wrapper.find('h2').text;

    });
    
})
