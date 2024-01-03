import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const [error, setError]= useState("")
    const stripe = useStripe()
    const elements = useElements()
    const handelSubmit =async e=>{
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if(card===null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if (error) {
            setError(error.message)
            console.log("payment error", error);
           }
           else{
            console.log("payment method", paymentMethod);
            setError('')
           }
    }
    return (
        <div>
            <from onSubmit={handelSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
                
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />  
      <p className="text-red-400">{error}</p>      
       <button className="btn btn-sm bg-green-400 my-4" type="submit" disabled={!stripe}>
        Pay
      </button>      
            </from>
        </div>
    );
};

export default CheckoutForm;