import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "./../../store/productactions";
import productSlice from "./../../store/productslice";

const Createproduct = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (productData) => {
        productData.id = nanoid();
        dispatch(asyncCreateProduct(productData));
    };

    return (
        <div className="create_product">
            <form onSubmit={handleSubmit(onSubmit)} className="product-form">
                <input
                    {...register("title", { required: "Title can't be empty" })}
                    type="text"
                    placeholder="Enter Title"
                />
                {errors.title && (
                    <p className="error">{errors.title.message}</p>
                )}

                <input
                    {...register("image", {
                        required: "Image URL is required",
                    })}
                    type="url"
                    placeholder="Enter Image URL"
                />
                {errors.image && (
                    <p className="error">{errors.image.message}</p>
                )}

                <input
                    {...register("price", {
                        required: "Price is required",
                        valueAsNumber: true,
                    })}
                    type="number"
                    placeholder="Enter Price"
                />
                {errors.price && (
                    <p className="error">{errors.price.message}</p>
                )}

                <textarea
                    {...register("description", {
                        required: "Description is required",
                    })}
                    placeholder="Enter Description"
                />
                {errors.description && (
                    <p className="error">{errors.description.message}</p>
                )}

                <input
                    {...register("brand", { required: "Brand is required" })}
                    type="text"
                    placeholder="Enter Brand"
                />
                {errors.brand && (
                    <p className="error">{errors.brand.message}</p>
                )}

                <input
                    {...register("model", { required: "Model is required" })}
                    type="text"
                    placeholder="Enter Model"
                />
                {errors.model && (
                    <p className="error">{errors.model.message}</p>
                )}

                <input
                    {...register("color", { required: "Color is required" })}
                    type="text"
                    placeholder="Enter Color"
                />
                {errors.color && (
                    <p className="error">{errors.color.message}</p>
                )}

                <select
                    {...register("category", {
                        required: "Category is required",
                    })}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select Category
                    </option>
                    <option value="headphone">Headphone</option>
                    <option value="earbuds">Earbuds</option>
                    <option value="smartwatch">Smartwatch</option>
                    <option value="speaker">Speaker</option>
                </select>
                {errors.category && (
                    <p className="error">{errors.category.message}</p>
                )}
                <button type="submit">Submit Product</button>
            </form>
        </div>
    );
};

export default Createproduct;
