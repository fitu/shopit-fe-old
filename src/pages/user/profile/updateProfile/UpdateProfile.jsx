import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../../components/util/MetaData';
import { Route } from '../../../../router/route';
import { clearErrors, loadUser, updateProfile, updateProfileReset } from '../../../../store/actions/authActions';
import './styles/updateProfile.scss';

const UpdateProfile = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpeg');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { error, isUpdated, loading } = useSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAvatarPreview(user.avatar.url);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully.');
            dispatch(loadUser());

            history.push(Route.USER_MY_PROFILE);
            dispatch(updateProfileReset());
        }
    }, [dispatch, error, alert, history, user, isUpdated]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('avatar', avatar);

        dispatch(updateProfile(formData));
    };

    const handleChange = (event) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            // State = done
            if (reader.readyState === 2) {
                setAvatar(reader.result);
                setAvatarPreview(reader.result);
            }
        });
        reader.readAsDataURL(event.target.files[0]);
    };

    return (
        <>
            <MetaData title={'Update profile'} />
            <div className={''}>
                <div className={''}>
                    <form className={''} encType={'multipart/form-data'} onSubmit={submitHandler}>
                        <h1 className={''}>{'Update Profile'}</h1>

                        <div className={''}>
                            <label htmlFor={'email_field'}>{'Name'}</label>
                            <input
                                className={''}
                                id={'name_field'}
                                name={'name'}
                                type={'name'}
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className={''}>
                            <label htmlFor={'email_field'}>{'Email'}</label>
                            <input
                                className={''}
                                id={'email_field'}
                                name={'email'}
                                type={'email'}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className={''}>
                            <label htmlFor={'avatar_upload'}>{'Avatar'}</label>
                            <div className={''}>
                                <div>
                                    <figure className={''}>
                                        <img alt={'Avatar Preview'} className={''} src={avatarPreview} />
                                    </figure>
                                </div>
                                <div className={''}>
                                    <input
                                        accept={'images/*'}
                                        className={''}
                                        id={'customFile'}
                                        name={'avatar'}
                                        type={'file'}
                                        onChange={handleChange}
                                    />
                                    <label className={''} htmlFor={'customFile'}>
                                        {'Choose Avatar'}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button className={''} disabled={loading} type={'submit'}>
                            {'Update'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

UpdateProfile.displayName = 'UpdateProfile';

export default UpdateProfile;
