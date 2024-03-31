import React, { useContext } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductsFromServer } from "../../Redux/Store/Products";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { deleteProduct } from "../../Redux/Store/Products";
import searchDataValue from "../../Context/SearchData";

export default function Products() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const { searchData, setSearchData } = useContext(searchDataValue);

  useEffect(() => {
    dispatch(getAllProductsFromServer("https://fakestoreapi.com/products"));
  }, []);

  const removeProduct = (productId) => {
    dispatch(deleteProduct(`https://fakestoreapi.com/products/${productId}`));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 10,
      editable: true,
      valueGetter: (params) => {
        return `${params.row.id}`;
      },
    },
    {
      false: "Image",
      headerName: "Image",
      width: 100,
      editable: true,
      renderCell: (params) => {
        return (
          <NavLink to={`/product/${params.row.id}`}>
            <img className="w-14 h-auto" src={`${params.row.image}`} alt="" />
          </NavLink>
        );
      },
    },
    {
      field: "Name",
      headerName: "Product Name",
      width: 150,
      editable: true,
      valueGetter: (params) => {
        return `${params.row.title}`;
      },
    },
    {
      field: "Category",
      headerName: "Category",
      width: 100,
      editable: true,
      valueGetter: (params) => {
        return `${params.row.category}`;
      },
    },
    {
      field: "rate",
      headerName: "Rate",
      width: 50,
      editable: true,
      valueGetter: (params) => {
        return `${params.row.rating.rate}`;
      },
    },
    {
      field: "count",
      headerName: "Count",
      width: 50,
      editable: true,
      valueGetter: (params) => {
        return `${params.row.rating.count}`;
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex  gap-3">
            <NavLink to={`/product/${params.row.id}`}>
              <Button
                className="text-white"
                variant="contained"
                color="success"
              >
                Edit
              </Button>
            </NavLink>
            <Button
              className="text-white"
              variant="contained"
              color="error"
              onClick={() => removeProduct(params.row.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  {
    loading && <div className="text-white">loading...</div>;
  }

  return (
   

    <div className="bg-zinc-900  sm:w-[370px] lg:w-full" style={{   width: '100%' ,overflow: "auto", height :'100vh' }}>
      <div className="grid-data"  style={{  width: '100%', overflow: "auto", height :'100%' }}>
      <DataGrid
        className="text-white bg-zinc-800 w-full"
        rows={searchData ? searchData : data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={5}
        disableSelectionOnClick
        pageSize={4}
        checkboxSelection
      />
      </div>
    </div>
  );
}
