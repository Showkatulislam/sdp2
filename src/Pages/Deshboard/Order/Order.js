import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../hooks/useAuth";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Want to Delete");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((order) => {
          if (order.deletedCount > 0) {
            alert("Deteted successfully");
            const remainingBike = orders.filter((d) => d._id !== id);
            setOrders(remainingBike);
          }
        });
    }
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ background: "rgba(3,3,3,0.3)" }}>
            <TableRow>
              <TableCell>Edit</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          {orders.map((bike) => (
            <TableBody>
              <TableCell>
                <div>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={bike.bike.img}
                    alt=""
                  ></img>
                </div>
              </TableCell>
              <TableCell>{bike.bike.name}</TableCell>
              <TableCell>{bike.bike.Price}</TableCell>
              <TableCell>{bike.bike.company}</TableCell>
              <TableCell>
                <DeleteIcon onClick={() => handleDelete(bike._id)} />
              </TableCell>
              <TableCell>{bike.status}</TableCell>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Order;
