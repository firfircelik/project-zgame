import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processPayment } from '../actions/paymentActions';

const Payment = () => {
    const dispatch = useDispatch();
    const paymentStatus = useSelector(state => state.payment);

    const handlePayment = () => {
        dispatch(processPayment());
    };

    return (
        <main>
            <h2>Ödeme</h2>
            <button onClick={handlePayment}>Ödeme Yap</button>
            {paymentStatus && <p>{paymentStatus.message}</p>}
        </main>
    );
};

export default Payment;
