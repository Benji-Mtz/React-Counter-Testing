//import '@testing-library/jest-dom/extend-expect';

// Para uso de Enzyme instalar: 
// 1. npm i --save-dev enzyme enzyme-adapter-react-16
// 2. npm install --save-dev enzyme-to-json

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({mode: 'deep'}) );