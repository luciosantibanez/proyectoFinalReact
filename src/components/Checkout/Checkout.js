// Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const handleNameChange = (e) => {
    setName(e.target.value);
    };

    const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    };

    const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };

    const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the checkout logic and create an order in Firebase
    };

    return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
        />
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
        />
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
        />
        <button type="submit">Place Order</button>
        </form>
    </div>
    );
};

export default Checkout;