import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_tWx2vdYApcDjBotmLkjg2Xz600wDpEjDwy';

    const onToken = token => {
        console.log(token);
        alert("Pagamento efetuado com sucesso !");
    }

    return (
        <StripeCheckout
            label="Pagar Agora"
            name="CRWN Roupas Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Total a pagar: $ ${price}`}
            amount={priceForStripe}
            panelLabel="Pagar Agora"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;