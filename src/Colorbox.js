import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles';

function Colorbox(props) {
    const [copied, setCopy] = useState(false);
    const { classes, background, name, id, isFullPalette, goToSinglePalette } = props;

    const handleClipBoard = () => {
        setCopy(true);
        setTimeout(() => setCopy(false), 1500);
    }
    const handleGoToSinglePalette = (e) => {
        e.stopPropagation();
        goToSinglePalette(id);
    }

    return (
        <CopyToClipboard text={background} onCopy={handleClipBoard}>
            <div className={classes.root} style={{backgroundColor: `${background}`}}>
                    <div className={`${classes.animate} ${copied && classes.show}`} style={{backgroundColor: `${background}`}}/>    
                    <div className={`${classes.copyHeader} ${copied && classes.copyMessage}`}>
                        <h1>COPIED</h1>
                        <p>{background}</p>
                    </div>
                    
                    <div className={classes.info}>
                        <span>{name}</span>
                        {isFullPalette && <span className={classes.more} onClick={handleGoToSinglePalette}>MORE</span>}
                    </div>
                    <div className={classes.copyButton}>
                        <span>COPY</span>
                    </div>
                
            </div>
        </CopyToClipboard>
    )
}

export default withStyles(styles)(Colorbox);