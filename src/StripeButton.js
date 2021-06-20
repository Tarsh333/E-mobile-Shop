import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = (props) => {
	const getToken = (token) => {
		console.log(token);
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Mobile Shop"
			billingAddress
			shippingAddress
			image="https://i.ibb.co/3BmghZC/Screenshot-3.png"
			description={`Your Total bill is ${props.totalAmount}$`}
			panelLabel="Pay Now"
			token={getToken}
			stripeKey="pk_test_51J4JYgSGoQ5vCFaxiix1g4BxXLoE17Jn3vpzyl0vQoNzE9niIH09SAxEDrWUzzPLGl148Ob5HzHFgw3NwBuUxagV00cAvbwcHV"
		/>
	);
};

export default StripeButton;