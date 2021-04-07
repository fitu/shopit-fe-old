import React, { useEffect, useState } from 'react';
import { clearErrors, getProductDetails, updateProduct, updateProductReset } from '../../store/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../common/MetaData';
import Sidebar from './Sidebar';
import { useAlert } from 'react-alert';

const UpdateProduct = ({ match, history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const categories = [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home',
    ];

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState('');
    const [images, setImage] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const { error, product } = useSelector((state) => state.productDetails);
    const { loading, error: updateError, isUpdated } = useSelector((state) => state.product);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            history.push('/admin/products');
            alert.success('Product updated succesfully!');
            dispatch(updateProductReset());
        }

        if (product && product._id !== match.params.id) {
            dispatch(getProductDetails(match.params.id));
        } else {
            setName(product.name);
            setPrice(product.price);
            setDescription(product.description);
            setCategory(product.category);
            setSeller(product.seller);
            setStock(product.stock);
            setOldImages(product.images);
        }
    }, [dispatch, alert, error, updateError, match.params.id, product, history, isUpdated]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('stock', stock);
        formData.set('seller', seller);

        images.forEach((image) => {
            formData.append('images', image);
        });

        dispatch(updateProduct(product._id, formData));
    };

    const changeHandler = (event) => {
        const files = Array.from(event.target.files);
        setImage([]);
        setImagesPreview([]);
        setOldImages([]);

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                // State = done
                if (reader.readyState === 2) {
                    setImage((old) => [...old, reader.result]);
                    setImagesPreview((old) => [...old, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    return (
        <>
            <MetaData title="Update product" />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" encType="multipart/form-data" onSubmit={submitHandler}>
                                <h1 className="mb-4">Update Product</h1>
                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={price}
                                        onChange={(event) => setPrice(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description_field"
                                        rows="8"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category_field">Category</label>
                                    <select
                                        className="form-control"
                                        id="category_field"
                                        value={category}
                                        onChange={(event) => setCategory(event.target.value)}
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={stock}
                                        onChange={(event) => setStock(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="seller_field">Seller Name</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        value={seller}
                                        onChange={(event) => setSeller(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Images</label>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            name="product_images"
                                            className="custom-file-input"
                                            id="customFile"
                                            onChange={changeHandler}
                                            multiple
                                        />
                                        <label className="custom-file-label" htmlFor="customFile">
                                            Choose Images
                                        </label>
                                    </div>

                                    {oldImages &&
                                        oldImages.map((oldImage) => (
                                            <img
                                                key={oldImage}
                                                src={oldImage.url}
                                                alt={oldImage.url}
                                                className="mt-3 mr-2"
                                                width="55"
                                                height="52"
                                            />
                                        ))}

                                    {imagesPreview.map((image) => (
                                        <img
                                            src={image}
                                            key={image}
                                            alt="Preview"
                                            className="mt-3 mr-2"
                                            width="55"
                                            height="52"
                                        />
                                    ))}
                                </div>
                                <button
                                    disabled={loading}
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                >
                                    UPDATE
                                </button>
                            </form>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;
