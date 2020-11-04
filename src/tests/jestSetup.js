//  src\tests\jestSetup.js

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import "jest-styled-components";

configure({ adapter: new Adapter() });
