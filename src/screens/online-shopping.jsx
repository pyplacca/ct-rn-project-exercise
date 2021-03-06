import React from 'react';
import Screen from '../components/onboarding/screen';
import utils from '../utils';


function OnlineShopping (props) {
	return (
		<Screen
			title='Online Shopping'
			subtitle={utils.lorem}
			image={require('../../assets/images/onboarding/shopping.png')}
			screenNo={1}
			buttonText='Next'
			next='add-to-cart'
			skip='payment-successful'
			navigation={props.navigation}
		/>
	)
};

export default OnlineShopping;
