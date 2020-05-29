import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger />
                <div>Burger Controls</div>
            </Aux>
        )
    }
}
export default BurgerBuilder;