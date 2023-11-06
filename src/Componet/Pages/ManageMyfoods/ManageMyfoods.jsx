/* eslint-disable no-undef */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

const ManageMyfoods = () => {
  const [addDatas, setaddDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Image",
      accessorKey: "foodName",
      cell: () => (
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src="https://i.ibb.co/L5q9TMz/28061-removebg-preview.png"
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
      accessorKey: "donatorName",
    },
    {
      header: "Expired Date/Time",
      accessorKey: "pickupLocation",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="space-x-2">
          <button
            className="btn bg-thirdColor text-secondColor "
            onClick={() => handleEdit(row.original)}
          >
            Edit
          </button>
          <button
            className="btn bg-thirdColor text-secondColor "
            onClick={() => handleRemove(row.original.id)}
          >
            Remove
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

  useEffect(() => {
    axios("/data.json")
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
    <div>
      <table className="table text-center table-zebra">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header)}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
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
