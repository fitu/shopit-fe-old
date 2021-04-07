import React, { useEffect, useState } from 'react';
import { clearErrors, register } from '../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../common/Loader';
import MetaData from '../common/MetaData';
import { useAlert } from 'react-alert';

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

    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
            return;
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
            return;
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
            reader.onload = () => {
                // State = done
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        } else {
            setUser({ ...user, [event.target.name]: event.target.value });
        }
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MetaData title={'Register User'} />
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" encType="multipart/form-data" onSubmit={submitHandler}>
                                <h1 className="mb-3">Register</h1>

                                <div className="form-group">
                                    <label htmlFor="email_field">Name</label>
                                    <input
                                        type="name"
                                        id="name_field"
                                        className="form-control"
                                        value={user.name}
                                        name="name"
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={user.email}
                                        name="email"
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        value={user.password}
                                        name="password"
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="avatar_upload">Avatar</label>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <figure className="avatar mr-3 item-rtl">
                                                <img
                                                    src={avatarPreview}
                                                    className="rounded-circle"
                                                    alt="Avatar preview"
                                                />
                                            </figure>
                                        </div>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                name="avatar"
                                                className="custom-file-input"
                                                id="customFile"
                                                accept="images/*"
                                                onChange={changeHandler}
                                            />
                                            <label className="custom-file-label" htmlFor="customFile">
                                                Choose Avatar
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    id="register_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading}
                                >
                                    REGISTER
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Register;
