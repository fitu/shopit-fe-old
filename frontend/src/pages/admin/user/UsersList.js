import { MDBDataTable } from 'mdbreact';
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Loader from '../../../components/util/Loader';
import MetaData from '../../../components/util/MetaData';

import { clearErrors, deleteUser, deleteUserReset, getAllUsers } from '../../../store/actions/authActions';
import { Routes } from '../../../components/router/routes';

const UsersList = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users = [] } = useSelector((state) => state.allUsers);
    const { isDeleted } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getAllUsers());
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success('User deleted succesfully!');
            history.push(Routes.ADMIN_USERS);
            dispatch(deleteUserReset());
        }
    }, [dispatch, alert, error, history, isDeleted]);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    };

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'User id',
                    field: 'id',
                    sort: 'asc',
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc',
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: [],
        };
        users.forEach((user) => {
            data.rows.push({
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                actions: (
                    <>
                        <Link to={`${Routes.ADMIN_USER}/${user._id}`} className="btn btn-primary py-1 px-2">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user._id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </>
                ),
            });
        });
        return data;
    };

    return (
        <>
            <MetaData title="All users" />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <>
                        <h1 className="my-5">All users</h1>
                        {loading ? (
                            <Loader />
                        ) : (
                            <MDBDataTable data={setUsers()} className="px-3" bordered striped hover />
                        )}
                    </>
                </div>
            </div>
        </>
    );
};

export default UsersList;
