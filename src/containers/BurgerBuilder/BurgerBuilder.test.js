import React from 'react';
import { configure, shallow } from 'enzyme';

//default exports are imported as Adapter w/o curly braces
import Adapter from 'enzyme-adapter-react-16';

// named exports are imported with curly braces
import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('Testing BurgerBuilder.js', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
    });
    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad:0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

});