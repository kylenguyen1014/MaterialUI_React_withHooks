import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

function PaletteList(props) {
    const { classes, palettes, removePalette } = props;
    const [openDialog, setOpenDialog] = useState(false);
    const [id, setId] = useState();

    const goToPalette = (id) => {
        props.history.push(`/${id}`);
    }

    const handleClickOpen = (id) => {
        setOpenDialog(true);
        setId(id);
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleRemovePalette = (e) => {
        setOpenDialog(false);
        removePalette(id);
        setId();
    }

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.heading}>
                    <h1>COLOR PICKER</h1>
                    <Link to='/palette/new'>
                        Create Palette
                    </Link>
                </div>
                <TransitionGroup className={classes.miniContainer}>
                    {palettes.map(palette =>( 
                            <CSSTransition
                                key={palette.id}
                                timeout={500}
                                classNames='fade'
                            >
                                <MiniPalette 
                                    key={palette.id} 
                                    id={palette.id} 
                                    palette={palette} 
                                    goToPalette={goToPalette} 
                                    handleClickOpen={handleClickOpen}
                                />
                            </CSSTransition>
                        )
                    )}
                </TransitionGroup>
            </div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete Palette?</DialogTitle>
                <DialogContent>
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
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(PaletteList) ;
