import React, {useState} from 'react';
import { withStyles } from '@material-ui/styles';
import Footer from './Footer';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import styles from './styles/MiniPaletteStyles';


function MiniPalette(props) {
    const { palette, id, classes, goToPalette } = props;
    const [openDialog, setOpenDialog] = useState(false);

    const handleGoToPalette = () => {
        goToPalette(id)
    }

    const handleClickOpen = (e) => {
        e.stopPropagation();
        setOpenDialog(true);
    }

    const handleClose = (e) => {
        e.stopPropagation();
        setOpenDialog(false);
    }

    const handleRemovePalette = (e) => {
        e.stopPropagation();
        props.removePalette(id);
    }
    return (
        <div className={classes.miniPalette} onClick={handleGoToPalette}>
            <IconButton className={classes.deleteButton} onClick={handleClickOpen}>
                <DeleteIcon/>
            </IconButton>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete Palette?</DialogTitle>
                <DialogContent>
                    {/* <Divider/> */}
                    <div onClick={handleRemovePalette} className={classes.dialogButton}>
                        <IconButton style={{backgroundColor: green[50], color: green[800]}}>
                            <CheckIcon/>
                        </IconButton>
                        <Typography variant='body1' display='inline'>
                            Yes, delete it!
                        </Typography>
                    </div>
                    <div onClick={handleClose} className={classes.dialogButton}>
                        <IconButton style={{backgroundColor: red[50], color: red[800]}}>
                            <CancelOutlinedIcon/>
                        </IconButton>
                        <Typography variant='body1' display='inline'>
                            No, cancel it!
                        </Typography>
                    </div>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
            <div className={classes.container}>
                {palette.colors.map(color => <div className={classes.miniBox} style={{backgroundColor : color.color}} key={color.name}></div>)}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji} isFullSize={false}/>
        </div>
    )
}

export default withStyles(styles)(MiniPalette) ;