import { countries } from 'countries-list';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import { saveShippingInfo } from '../../../store/actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import './styles/shipping.scss';

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

        dispatch(
            saveShippingInfo({
                address,
                city,
                phoneNumber,
                postalCode,
                country,
            }),
        );
        history.push(Route.CHECKOUT_STEP_CONFIRM);
    };

    return (
        <>
            <MetaData title={'Shipping Info'} />

            <div className={'shipping__container'}>
                <div className={'shipping__steps'}>
                    <CheckoutSteps shippingStep />
                </div>
                <form className={'shipping_form'} onSubmit={submitHanlder}>
                    <h1 className={'form__title'}>{'Shipping Info'}</h1>
                    <div className={'form__address--container'}>
                        <label htmlFor={'address_field'}>{'Address'}</label>
                        <input
                            required
                            className={'address--input'}
                            id={'address_field'}
                            type={'text'}
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>

                    <div className={'form__city--container'}>
                        <label htmlFor={'city_field'}>{'City'}</label>
                        <input
                            required
                            className={'city--input'}
                            id={'city_field'}
                            type={'text'}
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                    </div>

                    <div className={'form__phone--container'}>
                        <label htmlFor={'phone_field'}>{'Phone No'}</label>
                        <input
                            required
                            className={'phone--input'}
                            id={'phone_field'}
                            type={'phone'}
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </div>

                    <div className={'form__posta-code--container'}>
                        <label htmlFor={'postal_code_field'}>{'Postal Code'}</label>
                        <input
                            required
                            className={'postal-code--input'}
                            id={'postal_code_field'}
                            type={'number'}
                            value={postalCode}
                            onChange={(event) => setPostalCode(event.target.value)}
                        />
                    </div>

                    <div className={'form__country--container'}>
                        <label htmlFor={'country_field'}>{'Country'}</label>
                        <select
                            required
                            className={'country--input'}
                            id={'country_field'}
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                        >
                            {Object.values(countries).map((country) => (
                                <option key={country.name} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className={'form--submit'} id={'shipping_btn'} type={'submit'}>
                        {'CONTINUE'}
                    </button>
                </form>
            </div>
        </>
    );
};

Shipping.displayName = 'Shipping';

export default Shipping;
