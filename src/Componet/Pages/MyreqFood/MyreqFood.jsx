/* eslint-disable no-undef */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { AuthProvider } from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const MyreqFood = () => {
  const [addDatas, setaddDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { user } = useContext(AuthProvider);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://food-community-sever.vercel.app/reqfood/${id}`)

          .then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const updateData = addDatas.filter((data) => {
                data.id !== id;
              });
              setaddDatas(updateData);
            }
          });
      }
    });
  };

  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Donar Name",
      accessorKey: "foodName",
    },
    {
      header: "Pickup Location",
      accessorKey: "Pickuplocation",
    },
    {
      header: "Expire Date",
      accessorKey: "ExpiredDate",
    },
    {
      header: "Request Date",
      accessorKey: "reqDate",
    },
    {
      header: "Your Donation Amount",
      accessorKey: "donationAmount",
    },
    {
      header: "Status (available/delivered)",
      accessorKey: "Accessibility",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="space-x-2">
          <button
            className="btn bg-thirdColor text-secondColor "
            onClick={() => handleRemove(row.original._id)}
          >
            Cancel Request
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
    axios(`https://food-community-sever.vercel.app/reqfood/${email}`)
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
  }, [email]);

  // Function to handle screen width change
  const handleScreenWidthChange = () => {
    setScreenWidth(window.innerWidth);
  };

  if (loading) {
    return <>loading.....</>;
  }

  if (screenWidth < 1020) {
    return <h3>Please use a larger screen or desktop.</h3>;
  }

  return (
    <div className="py-10 px-5">
      <h3 className="text-center font-extrabold text-5xl">My Request Food</h3>
      <div className="divider"></div>
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

export default MyreqFood;
