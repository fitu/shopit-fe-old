import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../../components/util/Loader';
import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import { register } from '../../../store/actions/auth/authActions';
import { LoadingContext } from '../../../context/LoadingProvider';
import './styles/register.scss';

const Register = ({ history }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpeg');

    const alert = useAlert();
    const dispatch = useDispatch();
    const { setIsLoading } = useContext(LoadingContext);

    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.push(Route.HOME);
            return;
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, isAuthenticated, error, alert, history]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('password', user.password);
        formData.set('avatar', avatar);

        dispatch(register(formData));
    };

    const changeHandler = (event) => {
        if (event.target.name === 'avatar') {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                // State = done
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result);
                }
            });
            reader.readAsDataURL(event.target.files[0]);
        } else {
            setUser({ ...user, [event.target.name]: event.target.value });
        }
    };

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    return (
        <>
            <MetaData title={'Register User'} />
            <div className={''}>
                <div className={''}>
                    <form className={''} encType={'multipart/form-data'} onSubmit={submitHandler}>
                        <h1 className={''}>{'Register'}</h1>

                        <div className={''}>
                            <label htmlFor={'email_field'}>{'Name'}</label>
                            <input
                                className={''}
                                id={'name_field'}
                                name={'name'}
                                type={'name'}
                                value={user.name}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={''}>
                            <label htmlFor={'email_field'}>{'Email'}</label>
                            <input
                                className={''}
                                id={'email_field'}
                                name={'email'}
                                type={'email'}
                                value={user.email}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={''}>
                            <label htmlFor={'password_field'}>{'Password'}</label>
                            <input
                                className={''}
                                id={'password_field'}
                                name={'password'}
                                type={'password'}
                                value={user.password}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={''}>
                            <label htmlFor={'avatar_upload'}>{'Avatar'}</label>
                            <div className={''}>
                                <div>
                                    <figure className={''}>
                                        <img alt={'Avatar preview'} className={''} src={avatarPreview} />
                                    </figure>
                                </div>
                                <div className={''}>
                                    <input
                                        accept={'images/*'}
                                        className={''}
                                        id={'customFile'}
                                        name={'avatar'}
                                        type={'file'}
                                        onChange={changeHandler}
                                    />
                                    <label className={''} htmlFor={'customFile'}>
                                        {'Choose Avatar'}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button className={''} disabled={loading} id={'register_button'} type={'submit'}>
                            {'REGISTER'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

Register.displayName = 'Register';

export default Register;
