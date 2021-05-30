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
import React from "react";
import ModalChange from './ModalChange';

function OrderListTable() {

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
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>americano</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>termoyaderniy olsun</TableCell>
                            <TableCell>created</TableCell>
                            <TableCell>
                                <ModalChange />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default OrderListTable;