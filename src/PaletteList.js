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

const styles = {
    root: {
        margin: '0',
        padding: '0',
        height: '100vh',
        background: 'linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(26,83,124,1) 20%, rgba(9,90,126,1) 50%, rgba(0,212,255,1) 100%)',
        overflow: 'auto'
    },
    main : {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a': {
            color: 'orange',
            cursor: 'pointer',
        },
        '& h1': {
            background: 'linear-gradient(90deg, rgba(171,46,150,1) 0%, rgba(231,61,98,1) 29%, rgba(47,181,46,0.9207842316614145) 64%, rgba(0,209,255,1) 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    miniContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '5%',
        marginTop: '2rem',
        // height: '100%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },
    miniBox: {
        
    }
}
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
