import React, {useState} from 'react';
import { withStyles } from '@material-ui/styles';
import Footer from './Footer';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';

const styles ={
    miniPalette: {
        height: '200px',
        width: '100%',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        position: 'relative',
        '&:hover' :{
            transform: 'scale(1.075)',
        },
        
        // '& button':{
        //     padding: '5px',
        //     backgroundColor: 'rgba(255, 255, 255, 0.5)',
        //     position: 'absolute',
        //     top: '0',
        //     right: '0',
        //     zIndex: '2',
        //     opacity: '0',
        //     color: 'red',
        // },
        '&:hover button':{
            opacity: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }
        
    },
    deleteButton: {
        padding: '5px',
        margin : '3px',
        // borderRadius: '3px',
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: '2',
        opacity: '0',
        color: 'red',
        transition: 'all 0.3s ease-out',
        '&:hover svg':{
            transform: 'scale(1.5)',
            transition: 'all 0.3s ease-out',
        }
            
    },
    container: {
        width: '95%',
        height: '80%',
        margin: '5px auto 0 auto',
    },
    // miniContainer: {
    //     width: '100%',
    //     height: '100%',
    // },
    miniBox : {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
        marginBottom: '-4px'
    },
    dialogButton :{
        cursor: 'pointer',
        display: 'flex',
        // justifyContent: 'space-around',
        alignItems: 'center',
        '& button': {
            margin: '0.2rem 0.5rem ',  
        },
        '&:hover svg':{
            transform: 'scale(1.3)',
            transition: 'all 0.3s ease-in-out'
        }
    }
}

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
                {/* <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleRemovePalette} color="primary" autoFocus>
                    Agree
                </Button> */}
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