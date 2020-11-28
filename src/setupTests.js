// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json'
import { Serializer } from 'v8';
//import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer( { mode:'deep' } ) );
