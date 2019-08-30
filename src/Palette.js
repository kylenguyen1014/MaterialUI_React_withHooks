import React from 'react';
import Navbar from './Navbar';
import seedColors from './seedColors';
import { withStyles } from '@material-ui/styles';
import Colorbox from './Colorbox';
import Footer from './Footer';


const styles = {
    root: {
        // height: '90vh',
        width: '100%',
    },
    container: {
        height: '90vh',
        width: '100%',
    }
}

function Palette(props) {
    const palette = seedColors[1];
    const { classes } = props;
    const colorBoxes = palette.colors.map(color => {
        return <Colorbox background={color.color} name={color.name}/>
    })
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.container}>
                {colorBoxes}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
        </div>
    )
}

export default withStyles(styles)(Palette);