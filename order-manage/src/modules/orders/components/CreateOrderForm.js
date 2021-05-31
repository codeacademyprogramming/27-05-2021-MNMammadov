import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TextField, InputLabel, Select, MenuItem, Box } from '@material-ui/core';

import { useDispatch, useSelector } from "react-redux";
import { addOrder } from '../actions';
import { v4 as uuidv4 } from 'uuid';

export default function CreateOrderForm() {
    const [open, setOpen] = React.useState(false);
    const [tableNo, setTableNo] = React.useState(0);
    const [numbOfCoffee, setNumbOfCoffee] = React.useState(1);
    const [specialNote, setSpecialNote] = React.useState("");
    const [coffeeType, setCoffeeType] = React.useState("Americano");
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        const orderData = {
            id: uuidv4(),
            tableNo: tableNo,
            coffeeType: coffeeType,
            numbOfCoffee: numbOfCoffee,
            specialNote: specialNote,
            status: "CREATED"
        }

        dispatch(addOrder(orderData));
        handleClose();
    }

    const productsBranch = useSelector(state => state.products);

    return (
        <div>
            <Button variant="contained" color="primary" size="small" onClick={handleClickOpen}>
                Create Order
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Order Details
                </DialogTitle>
                <DialogContent dividers>
                    <form noValidate autoComplete="off">
                        <Box display="flex" flexDirection="column">
                            <Box marginBottom={5}>
                                <TextField
                                    value={tableNo}
                                    onChange={(e) => setTableNo(e.target.value)}
                                    type="number"
                                    label="Table No"
                                    required
                                />
                            </Box>
                            <InputLabel>Select Coffee</InputLabel>
                            <Box marginBottom={5}>
                                <Select
                                    value={coffeeType}
                                    onChange={(evt) => setCoffeeType(evt.target.value)}
                                    style={{ width: "12.5vw" }}
                                >
                                    {productsBranch.data.map((product) => (
                                        <MenuItem
                                            key={product.id}
                                            value={product.name}
                                        >
                                            {product.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>
                            <Box marginBottom={5}>
                                <TextField
                                    value={numbOfCoffee}
                                    onChange={(evt) => setNumbOfCoffee(evt.target.value)}
                                    type="number"
                                    label="Number of Coffee"
                                    required />
                            </Box>
                            <Box marginBottom={5}>
                                <TextField
                                    value={specialNote === "" ? "" : specialNote}
                                    onChange={(evt) => setSpecialNote(evt.target.value)}
                                    label="Special Note"
                                    helperText="Add comment" />
                            </Box>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Place order
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);