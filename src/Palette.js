import React, {useState} from 'react';
import Navbar from './Navbar';

import { withStyles } from '@material-ui/styles';
import Colorbox from './Colorbox';
import Footer from './Footer';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    root: {
        // height: '90vh',
        width: '100%',
        overflow: 'hidden',
    },
    container: {
        height: '90vh',
        width: '100%',
    }
}

function Palette(props) {
    const [level, setLevel] = useState(500);
    const [mode, setMode] = useState('hex');

    const { classes, palette } = props;

    const changeLevel = (level) => {
        setLevel(level);
    }

    const changeType = (type) => {
        setMode(type);
    }

    const goToSinglePalette = (id) => {
        props.history.push(`/${palette.id}/${id}`);
    }

    const colorBoxes = palette.colors[level].map(color => {
        return <Colorbox key={color.name} id={color.id} background={color[mode]} name={color.name} isFullPalette={true} goToSinglePalette={goToSinglePalette}/>
    });
    return (
        <div className={classes.root} >
            <Navbar changeLevel={changeLevel} level={level} changeType={changeType} mode={mode} isFullPalette={true}/>
            <div className={classes.container}>
                {colorBoxes}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
            
        </div>
    )
}

export default withStyles(styles)(Palette);