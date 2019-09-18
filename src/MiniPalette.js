import React from 'react';
import { withStyles } from '@material-ui/styles';
import Footer from './Footer';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles/MiniPaletteStyles';


function MiniPalette(props) {
    const { palette, id, classes, goToPalette, handleClickOpen } = props;

    const handleGoToPalette = () => {
        goToPalette(id)
    }

    const handleOpen = (e) => {
        e.stopPropagation();
        handleClickOpen(id);
    }
    return (
        <div className={classes.miniPalette} onClick={handleGoToPalette}>
            <IconButton className={classes.deleteButton} onClick={handleOpen}>
                <DeleteIcon/>
            </IconButton>            
            <div className={classes.container}>
                {palette.colors.map(color => <div className={classes.miniBox} style={{backgroundColor : color.color}} key={color.name}></div>)}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji} isFullSize={false}/>
        </div>
    )
}

export default withStyles(styles)(MiniPalette) ;