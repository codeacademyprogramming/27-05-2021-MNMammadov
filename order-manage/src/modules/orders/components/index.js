import { Box, Typography } from "@material-ui/core";
import React from "react";
import CreateOrderForm from './CreateOrderForm';
import OrderListTable from './OrderListTable';

function OrderList() {

    return (
        <Box width="1024px" margin="0 auto" paddingTop={4}>
            <Typography variant="h4">Ordered Coffee List</Typography>
            <Box display="flex" justifyContent="flex-end">
                <CreateOrderForm />
            </Box>
            <OrderListTable />
        </Box>
    );
}

export default OrderList;