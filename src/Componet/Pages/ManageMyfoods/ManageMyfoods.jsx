/* eslint-disable no-undef */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { MdManageHistory, MdEditNote } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { AuthProvider } from "../../../AuthContext/AuthContext";

const ManageMyfoods = () => {
  const [addDatas, setaddDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { user } = useContext(AuthProvider);

  const columns = [
    {
      header: "Id",
      accessorKey: "_id",
    },
    {
      header: "Image",
      accessorKey: "Foodimageurl",

      cell: (tableProps) => (
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src={tableProps.row.original.Foodimageurl}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      ),
    },
    {
      header: "Food Name",
      accessorKey: "foodName",
    },
    {
      header: "Quantity",
      accessorKey: "FoodQuantity",
    },
    {
      header: "Expired Date/Time",
      accessorKey: "ExpiredDate",
    },
    {
      header: "Status",
      accessorKey: "Accessibility",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="space-x-2">
          <Link
            to={`/manage/${row.original._id}`}
            className="btn bg-thirdColor text-secondColor text-2xl"
            onClick={() => handleManage(row.original)}
          >
            <MdManageHistory />
          </Link>
          <Link
            to="/update/:id"
            className="btn bg-thirdColor text-secondColor text-2xl"
            onClick={() => handleEdit(row.original._id)}
          >
            <MdEditNote />
          </Link>
          <button
            className="btn bg-thirdColor text-secondColor text-2xl"
            onClick={() => handleRemove(row.original._id)}
          >
            <RxCross1 />
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: addDatas,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const email = user.email;
  useEffect(() => {
    axios(`http://localhost:5000/foods/${email}`)
      .then((response) => {
        setLoading(true);
        setaddDatas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Add a listener for screen width changes
    window.addEventListener("resize", handleScreenWidthChange);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);

  // Function to handle screen width change
  const handleScreenWidthChange = () => {
    setScreenWidth(window.innerWidth);
  };

  if (loading) {
    return <>loading.....</>;
  }

  if (screenWidth < 768) {
    return <h3>Please use a larger screen or desktop.</h3>;
  }

  return (
    <div className="py-10 px-5">
      <h3 className="text-center font-extrabold text-5xl">My Food</h3>
      <div className="divider"></div>
      <table className="table text-center table-zebra">
        <thead>
          {table.getHeaderGroups().map((headerGroup, i) => (
            <tr key={i}>
              {headerGroup.headers.map((header) => (
                <th key={header._id}>
                  {flexRender(header.column.columnDef.header)}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr key={i}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell._id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyfoods;
