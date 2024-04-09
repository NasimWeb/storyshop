import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsFromServer } from "../../Redux/Store/Products";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getAllCategoriesFromServer } from "../../Redux/Store/Categories";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import DataGridSinglePages from "../../Components/DataGridSinglePages/DataGridSinglePages";



export default function SingleProduct() {


  const param = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.products);
  const categoriesData = useSelector((state) => state.categories);

  

  useEffect(() => {
    dispatch(getAllProductsFromServer("https://fakestoreapi.com/products"));
    dispatch(
      getAllCategoriesFromServer("https://fakestoreapi.com/products/categories")
    );
    mainProduct &&
      (setTitle(mainProduct.title),
      setId(mainProduct.id),
      setCategory(mainProduct.category),
      setPrice(mainProduct.price),
      setImage(mainProduct.image),
      setDesc(mainProduct.description),
      setRate(mainProduct.rating.rate),
      setCount(mainProduct.rating.count));
  }, []);

  const mainProduct = data.find((product) => product.id == param.productId);

  const [title, setTitle] = useState(
    mainProduct ? mainProduct.title : localStorage.getItem("Temp_data")
  );
  const [id, setId] = useState(
    mainProduct ? mainProduct.id : localStorage.getItem("Id_data")
  );
  const [category, setCategory] = useState(
    mainProduct ? mainProduct.category : localStorage.getItem("Category_data")
  );
  const [price, setPrice] = useState(
    mainProduct ? mainProduct.price : localStorage.getItem("Price_data")
  );
  const [image, setImage] = useState(
    mainProduct ? mainProduct.image : localStorage.getItem("Image_data")
  );
  const [tagValue, setTagValue] = useState(null);
  const [desc, setDesc] = useState(
    mainProduct ? mainProduct.description : localStorage.getItem("Desc_data")
  );
  const [rate, setRate] = useState(
    mainProduct ? mainProduct.rating.rate : localStorage.getItem("Rate_data")
  );
  const [count, setCount] = useState(
    mainProduct ? mainProduct.rating.count : localStorage.getItem("Count_data")
  );

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    mainProduct &&
      (setTitle(mainProduct.title),
      setId(mainProduct.id),
      setCategory(mainProduct.category),
      setPrice(mainProduct.price),
      setImage(mainProduct.image),
      setDesc(mainProduct.description),
      setRate(mainProduct.rating.rate),
      setCount(mainProduct.rating.count));
  }, [mainProduct]);

  useEffect(() => {
    localStorage.setItem("Temp_data", title);
    localStorage.setItem("Id_data", id);
    localStorage.setItem("Category_data", category);
    localStorage.setItem("Price_data", price);
    localStorage.setItem("Image_data", image);
    localStorage.setItem("Desc_data", desc);
    localStorage.setItem("Rate_data", rate);
    localStorage.setItem("Count_data", count);
  }, [title, id, category, price, image, desc, rate, count]);


  
  

  return (
    
    <div  className="grid grid-cols-12 gap-2 dark:bg-black bg-zinc-100">
      <div
        
        className="p-4 col-span-12 lg:col-span-9 dark:bg-black bg-zinc-100"
      >
        <h1 className="font-bold text-3xl dark:text-white text-black">Product Edit</h1>

        <form
          className="dark:bg-zinc-900 bg-white my-8 flex flex-col flex-wrap rounded-xl p-2"
          action=""
        >
          <h1 className="text-white font-bold text-xl mb-5">General Info</h1>

          <div className="grid grid-cols-12   gap-4">
            <div className="col-span-12 text-white  lg:col-span-6 ">
              <label
                htmlFor="ID"
                className="text-sm mb-2 inline-block w-full cursor-pointer text-black dark:text-white"
              >
                ID
              </label>
              <input
                type="text"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e,target.value)}
                disabled
                className="w-full disabled:border-zinc-600 disabled:opacity-50 disabled:shadow-none search-input dark:bg-zinc-800  bg-zinc-700 p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
              />
            </div>
            <div className="col-span-12 text-white  lg:col-span-6">
              <label
                htmlFor="Title"
                className="text-sm mb-2 inline-block w-full cursor-pointer text-black dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
                className="w-full search-input dark:bg-zinc-800 bg-zinc-100 text-black dark:text-white border-zinc-100 focus:text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent dark:border-zinc-800 border-2 rounded-lg"
              />
            </div>

            <div className="col-span-12 text-white  ">
              <label htmlFor="Rate" className="text-black dark:text-white">Count</label>
              <input
                type="text"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="Count"
                className="w-full search-input dark:bg-zinc-800 dark:text-white text-black bg-zinc-100 focus:text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent dark:border-zinc-800 border-zinc-100 border-2 rounded-lg"
              />
            </div>

            <div className="col-span-12 lg:col-span-6 text-white ">
              <label htmlFor="price" className="text-black dark:text-white">Price</label>
              <input
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full search-input dark:bg-zinc-800 bg-zinc-100 border-zinc-100 focus:text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 dark:text-white text-black focus:bg-transparent dark:border-zinc-800 border-2 rounded-lg"
              />
            </div>

            <div className="col-span-12 lg:col-span-6 text-white ">
              <label htmlFor="Rate" className="text-black dark:text-white">Rate</label>
              <input
                type="text"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Rate"
                className="w-full search-input dark:bg-zinc-800 bg-zinc-100 focus:text-black  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent dark:text-white text-black dark:border-zinc-800 border-2 rounded-lg"
              />
            </div>

            <div className="col-span-12 ">
              {
                <CKEditor
                  className="h-auto dark:bg-zinc-900 bg-zinc-100 dark:text-white text-black "
                  editor={ClassicEditor}
                  data={desc}
                  onChange={(event, editor) => {
                    setDesc(editor.getData());
                  }}
                  onBlur={(event, editor) => {}}
                  onFocus={(event, editor) => {}}
                />
              }
            </div>
          </div>
        </form>

        <div className="dark:bg-zinc-900 bg-white text-dark dark:text-white my-8 flex flex-col flex-wrap rounded-xl p-2">
          <h1 className="font-bold text-xl dark:text-white text-black mb-4">Category & Tag</h1>
          <h4 className="text-sm dark:text-white text-black">category</h4>
          <div className="flex mt-2 flex-wrap">
            {categoriesData.data.map((data) => {
              return (
                <div className="dark:text-white flex items-center gap-2">
                  <input
                    id={data}
                    value={data}
                    checked={category === data}
                    onChange={(e) => setCategory(e.target.value)}
                    className="peer cursor-pointer appearance-none rounded-full border-zinc-100 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 disabled:!border-zinc-500 checked:ring-4 checked:ring-inset checked:ring-white dark:checked:ring-zinc-900 checked:bg-blue-500 border-2 transition-all duration-300 ease-in-out w-7 h-7 ltr:mr-1.5 rtl:ml-1.5 disabled:pointer-events-none disabled:opacity-50"
                    type="radio"
                    name=""
                  />{" "}
                  <label htmlFor={data} className="text-sm mr-2">
                    {data}
                  </label>
                </div>
              );
            })}
          </div>

          <h4 className="text-sm dark:text-white text-black my-4">Tag</h4>

          <div className="flex mt-2 flex-wrap">
            {categoriesData.data.map((category) => {
              return (
                <div className="dark:text-white flex items-center gap-2">
                  <input
                    value={category}
                    onChange={(e) => setTagValue(e.target.value)}
                    className="cursor-pointer appearance-none disabled:!opacity-25 border-2 transition-all duration-300 ease-in-out border-zinc-100 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 disabled:!border-zinc-500 bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjczOCA2LjM1MmExIDEgMCAxIDEgMS41MjQgMS4yOTZsLTguNSAxMGExIDEgMCAwIDEtMS40MjYuMWwtNC41LTRhMSAxIDAgMSAxIDEuMzI4LTEuNDk1bDMuNzM2IDMuMzIgNy44MzgtOS4yMnoiLz48L2c+PC9zdmc+')] indeterminate:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI2ZmZmZmZiIgY2xhc3M9InctNiBoLTYiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE5LjUgMTJoLTE1IiAvPgo8L3N2Zz4K')] checked:bg-blue-500 indeterminate:bg-blue-500 rounded-lg w-7 h-7 me-1.5"
                    type="checkbox"
                    name=""
                  />{" "}
                  <label className="text-sm mr-2 text-black dark:text-white">{category}</label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dark:bg-zinc-900 bg-white my-8 flex flex-col flex-wrap rounded-xl p-2">
          <h1 className="font-bold text-3xl dark:text-white text-black my-5">Image</h1>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-500/25 px-6 py-10 dark:border-zinc-500/50">
            <div className="mt-2 flex flex-col justify-center rounded-lg  px-6 py-10 dark:border-zinc-500/50">
              <PhotoSizeSelectActualOutlinedIcon
                style={{ fill: "rgba(59 130 246 / 1)" }}
                className="text-blue-500 mx-auto h-12 w-12"
              />
              <div>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer rounded-md font-semibold text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-transparent hover:text-blue-600 transition-all duration-300 ease-in-out text-xs"
                >
                  Upload a file
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={(e) => handleImageFile(e)}
                  />
                </label>
                <span className="text-xs leading-5 text-gray-500 ml-2">
                  or drag and drop
                </span>
              </div>
              <p className="text-xs leading-5 text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sticky top-36 lg:col-span-3  dark:bg-zinc-900 bg-white dark:text-white mt-20 flex flex-col flex-wrap rounded-xl p-4 h-fit">
        <h1 className="dark:text-white font-bold text-xl mb-5">Preview</h1>
        <img
          src={`${image}`}
          className="mx-100 h-auto w-full"
          alt="product image"
          srcset=""
        />
      </div>
    </div>
     
     

    
   
  );
}
