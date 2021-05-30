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

export default function CreateOrderForm() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                                <TextField type="number" label="Table No" required />
                            </Box>
                            <InputLabel>Select Coffee</InputLabel>
                            <Box marginBottom={5}>
                                <Select>
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                            </Box>
                            <Box marginBottom={5}>
                                <TextField type="number" label="Number of Coffee" required />
                            </Box>
                            <Box marginBottom={5}>
                                <TextField label="Special Note" helperText="Add comment" />
                            </Box>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Place order
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}