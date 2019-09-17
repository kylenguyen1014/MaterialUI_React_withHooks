import React, { useState } from 'react';
import seedColors from './seedColors';
import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import MiniPalette from './MiniPalette';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles/PaletteListStyles';

function PaletteList(props) {
    const { classes, palettes, removePalette } = props;
    // const [openDialog, setOpenDialog] = useState(false);

    const goToPalette = (id) => {
        props.history.push(`/${id}`);
    }

    // const handleClickOpen = () => {
    //     setOpenDialog(true);
    // }

    // const handleClose = () => {
    //     setOpenDialog(false);
    // }
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.heading}>
                    <h1>COLOR PICKER</h1>
                    <Link to='/palette/new'>
                        Create Palette
                    </Link>
                </div>
                <div className={classes.miniContainer}>
                    {palettes.map(palette => <MiniPalette key={palette.id} id={palette.id} palette={palette} goToPalette={goToPalette} removePalette={removePalette}/>)}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList) ;
