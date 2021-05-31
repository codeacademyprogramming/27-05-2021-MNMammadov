import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React from 'react';
import { useSelector } from 'react-redux';
import EditOrderForm from "./EditOrderForm";

function OrderListTable() {
    const orderBranch = useSelector(state => state.orders);

    return (
        <Box marginTop={2}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Table Number</b></TableCell>
                            <TableCell><b>Coffee type</b></TableCell>
                            <TableCell><b>Count</b></TableCell>
                            <TableCell><b>Special Note</b></TableCell>
                            <TableCell><b>Order Status</b></TableCell>
                            <TableCell><b>Actions</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderBranch.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.tableNo}</TableCell>
                                    <TableCell>{order.coffeeType}</TableCell>
                                    <TableCell>{order.numbOfCoffee}</TableCell>
                                    <TableCell>{order.specialNote}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        <EditOrderForm order={order} />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default OrderListTable;