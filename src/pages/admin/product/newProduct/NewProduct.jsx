import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../../components/util/MetaData';
import Category from '../../../../models/category';
import { Route } from '../../../../router/route';
import { newProduct } from '../../../../store/actions/product/productAction';
import Sidebar from '../../sidebar/Sidebar';
import './styles/newProduct.scss';

const NewProduct = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState('');
    const [images, setImage] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const { loading, error, success } = useSelector((state) => state.newProduct);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors);
        }

        if (success) {
            history.push(Route.ADMIN_PRODUCTS);
            alert.success('Product created succesfully!');
            dispatch(newProductReset());
        }
    }, [dispatch, alert, history, error, success]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('stock', stock);
        formData.set('seller', seller);

        for (const image of images) {
            formData.append('images', image);
        }

        dispatch(newProduct(formData));
    };

    const changeHandler = (event) => {
        const files = [...event.target.files];
        setImage([]);
        setImagesPreview([]);

        for (const file of files) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                // State = done
                if (reader.readyState === 2) {
                    setImage((old) => [...old, reader.result]);
                    setImagesPreview((old) => [...old, reader.result]);
                }
            });
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <MetaData title={'New product'} />
            <div className={''}>
                <div className={''}>
                    <Sidebar />
                </div>
                <div className={''}>
                    <div className={''}>
                        <form className={''} encType={'multipart/form-data'} onSubmit={submitHandler}>
                            <h1 className={''}>{'New Product'}</h1>
                            <div className={''}>
                                <label htmlFor={'name_field'}>{'Name'}</label>
                                <input
                                    className={''}
                                    id={'name_field'}
                                    type={'text'}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className={''}>
                                <label htmlFor={'price_field'}>{'Price'}</label>
                                <input
                                    className={''}
                                    id={'price_field'}
                                    type={'text'}
                                    value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                            <div className={''}>
                                <label htmlFor={'description_field'}>{'Description'}</label>
                                <textarea
                                    className={''}
                                    id={'description_field'}
                                    rows={'8'}
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </div>
                            <div className={''}>
                                <label htmlFor={'category_field'}>{'Category'}</label>
                                <select
                                    className={''}
                                    id={'category_field'}
                                    value={category}
                                    onChange={(event) => setCategory(event.target.value)}
                                >
                                    {Object.values(Category).map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={''}>
                                <label htmlFor={'stock_field'}>{'Stock'}</label>
                                <input
                                    className={''}
                                    id={'stock_field'}
                                    type={'number'}
                                    value={stock}
                                    onChange={(event) => setStock(event.target.value)}
                                />
                            </div>
                            <div className={''}>
                                <label htmlFor={'seller_field'}>{'Seller Name'}</label>
                                <input
                                    className={''}
                                    id={'seller_field'}
                                    type={'text'}
                                    value={seller}
                                    onChange={(event) => setSeller(event.target.value)}
                                />
                            </div>
                            <div className={''}>
                                <label>{'Images'}</label>
                                <div className={'custom-file'}>
                                    <input
                                        multiple
                                        className={''}
                                        id={'customFile'}
                                        name={'product_images'}
                                        type={'file'}
                                        onChange={changeHandler}
                                    />
                                    <label className={''} htmlFor={'customFile'}>
                                        {'Choose Images'}
                                    </label>
                                </div>
                                {imagesPreview.map((image) => (
                                    <img
                                        alt={'Preview'}
                                        className={''}
                                        height={'52'}
                                        key={image}
                                        src={image}
                                        width={'55'}
                                    />
                                ))}
                            </div>
                            <button className={''} disabled={loading} id={'login_button'} type={'submit'}>
                                {'CREATE'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

NewProduct.displayName = 'NewProduct';

export default NewProduct;
