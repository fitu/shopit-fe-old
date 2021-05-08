import './styles/newProduct.scss';

import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../../components/util/MetaData';
import { Category } from '../../../../models/category';
import { Route } from '../../../../router/route';
import { clearErrors, newProduct, newProductReset } from '../../../../store/actions/productAction';
import Sidebar from '../../sidebar/Sidebar';

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

        images.forEach((image) => {
            formData.append('images', image);
        });

        dispatch(newProduct(formData));
    };

    const changeHandler = (event) => {
        const files = Array.from(event.target.files);
        setImage([]);
        setImagesPreview([]);

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
            <MetaData title="New product" />
            <div className="">
                <div className="">
                    <Sidebar />
              </div>
                <div className="">
                    <>
                        <div className="">
                            <form className="" encType="multipart/form-data" onSubmit={submitHandler}>
                                <h1 className="">New Product</h1>
                                <div className="">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className=""
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                  />
                              </div>
                                <div className="">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className=""
                                        value={price}
                                        onChange={(event) => setPrice(event.target.value)}
                                  />
                              </div>
                                <div className="">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea
                                        className=""
                                        id="description_field"
                                        rows="8"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                  />
                              </div>
                                <div className="">
                                    <label htmlFor="category_field">Category</label>
                                    <select
                                        className=""
                                        id="category_field"
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
                                <div className="">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className=""
                                        value={stock}
                                        onChange={(event) => setStock(event.target.value)}
                                  />
                              </div>
                                <div className="">
                                    <label htmlFor="seller_field">Seller Name</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className=""
                                        value={seller}
                                        onChange={(event) => setSeller(event.target.value)}
                                  />
                              </div>
                                <div className="">
                                    <label>Images</label>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            name="product_images"
                                            className=""
                                            id="customFile"
                                            onChange={changeHandler}
                                            multiple
                                      />
                                        <label className="" htmlFor="customFile">
                                        Choose Images
                                        </label>
                                  </div>
                                    {imagesPreview.map((image) => (
                                        <img
                                            src={image}
                                            key={image}
                                            alt="Preview"
                                            className=""
                                            width="55"
                                            height="52"
                                      />
                                    ))}
                              </div>
                                <button disabled={loading} id="login_button" type="submit" className="">
                                CREATE
                                </button>
                          </form>
                      </div>
                  </>
              </div>
          </div>
      </>
    );
};

export default NewProduct;
