import React, { useState } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import ColorBox from './Colorbox';
import Footer from './Footer';

const styles = {
    root: {
        // height: '90vh',
        width: '100%',
        overflow: 'hidden',
    },
    container: {
        height: '90vh',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    goBack:{
        width: '20%',
        height: '50%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
        '& span':{
            opacity: '0',
            transition: 'opacity 0.4s ease-in-out',
        },
        '&:hover span': {
            opacity: '1',
        }
    }
}

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
