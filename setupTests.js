import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;
