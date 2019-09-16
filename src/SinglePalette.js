import React, { useState } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import ColorBox from './Colorbox';
import Footer from './Footer';
import styles from './styles/SinglePaletteStyles';

function SinglePalette(props) {
    const [mode, setMode] = useState('hex');
    const { classes, palette, match } = props;
    
    const changeType = (type) => {
        setMode(type);
    }

    const findSinglePalette = (id, colorId) => {
        let allShade = [];
        for (let color in palette.colors){
            allShade = allShade.concat(palette.colors[color].filter(shade => shade.id === colorId));
        }
        return allShade;
    }

    const goBack = () => {
        props.history.goBack();
    }

    const shades = findSinglePalette(palette.id, match.params.colorId);

    return (
        <div>
            <Navbar changeType={changeType} mode={mode} isFullPalette={false}/>
            <div className={classes.container}>
                {shades.map(shade => <ColorBox key={shade.name} background={shade[mode]} name={shade.name} isFullPalette={false}/>)}
                <div className={classes.goBack} onClick={goBack}>
                    <span>GO BACK</span>
                </div>
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
        </div>
    )
}

export default withStyles(styles)(SinglePalette) ;
