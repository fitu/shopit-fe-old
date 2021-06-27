import { MDBDataTable } from 'mdbreact';
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../../components/util/Loader';
import MetaData from '../../../../components/util/MetaData';
import { Route } from '../../../../router/route';
import { deleteProduct, getAdminProducts } from '../../../../store/actions/product/productAction';
import Sidebar from '../../sidebar/Sidebar';
import './styles/productsList.scss';

const ProductsList = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector((state) => state.product);
    const { error: deleteError, isDeleted } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getAdminProducts());
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }
        if (isDeleted) {
            alert.success('Product deleted succesfully!');
            history.push(Route.ADMIN_PRODUCTS);
            dispatch(deleteProductReset());
        }
    }, [dispatch, alert, error, deleteError, isDeleted, history]);

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Product id',
                    field: 'id',
                    sort: 'asc',
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc',
                },
                {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc',
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: [],
        };
        for (const product of products) {
            data.rows.push({
                id: product._id,
                name: product.name,
                price: `$${product.price}`,
                stock: product.stock,
                actions: (
                    <>
                        <Link className={'btn btn-primary py-1 px-2'} to={`${Route.ADMIN_PRODUCT}/${product._id}`}>
                            <i className={'fa fa-pencil'} />
                        </Link>
                        <button
                            className={'btn btn-danger py-1 px-2 ml-2'}
                            type={'button'}
                            onClick={() => deleteProductHandler(product._id)}
                        >
                            <i className={'fa fa-trash'} />
                        </button>
                    </>
                ),
            });
        }
        return data;
    };

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <>
            <MetaData title={'All products'} />
            <div className={''}>
                <div className={''}>
                    <Sidebar />
                </div>
                <div className={''}>
                    <h1 className={''}>{'All products'}</h1>
                    {loading ? <Loader /> : <MDBDataTable bordered hover striped className={''} data={setProducts()} />}
                </div>
            </div>
        </>
    );
};

ProductsList.displayName = 'ProductsList';

export default ProductsList;
