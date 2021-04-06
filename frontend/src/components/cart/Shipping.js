import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckoutSteps from './CheckoutSteps';
import MetaData from '../common/MetaData';
import { countries } from 'countries-list';
import { saveShippingInfo } from '../../store/actions/cartActions';

const Shipping = ({ history }) => {
    const dispatch = useDispatch();

    const { shippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [phoneNumber, setPhoneNumber] = useState(shippingInfo.phoneNumber);
    const [country, setCountry] = useState(shippingInfo.country);

    const submitHanlder = (event) => {
        event.preventDefault();

        dispatch(saveShippingInfo({ address, city, phoneNumber, postalCode, country }));
        history.push('/confirm');
    };

    return (
        <>
            <MetaData title="Shipping Info" />
            <CheckoutSteps shippingStep />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHanlder}>
                        <h1 className="mb-4">Shipping Info</h1>
                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">City</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Phone No</label>
                            <input
                                type="phone"
                                id="phone_field"
                                className="form-control"
                                value={phoneNumber}
                                onChange={(event) => setPhoneNumber(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(event) => setPostalCode(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country_field">Country</label>
                            <select
                                id="country_field"
                                className="form-control"
                                value={country}
                                onChange={(event) => setCountry(event.target.value)}
                                required
                            >
                                {Object.values(countries).map((c) => (
                                    <option key={c.name} value={c.name}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button id="shipping_btn" type="submit" className="btn btn-block py-3">
                            CONTINUE
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Shipping;
