import Enzyme from 'enzyme' // eslint-disable-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16' // eslint-disable-line import/no-extraneous-dependencies

// other enzyme tools (not used yet)
// - https://github.com/FormidableLabs/enzyme-matchers
Enzyme.configure({ adapter: new Adapter() })
