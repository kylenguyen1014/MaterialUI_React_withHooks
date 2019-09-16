import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import down from './ResponsiveHelper';
import chroma from 'chroma-js';

const styles = {
    root: {
        width: '20%',
        height: props => props.isFullPalette ? '25%' : '50%',
        display: 'inline-block',
        position: 'relative',
        color: props => chroma(props.background).luminance() > 0.5 ? 'rgba(0, 0, 0, 0.7)' :'white' ,
        [down('lg')]: {
            width: '25%',
            height: props => props.isFullPalette ? '20%' : '33.33%',
        },
        [down('md')]: {
            width: '50%',
            height: props => props.isFullPalette ? '10%' : '20%',
        },
        [down('sm')]: {
            width: '100%',
            height: props => props.isFullPalette ? '5%' : '10%',
        },
    },
    copyButton :{
        position: 'absolute',
        top: '0',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& span':{
            opacity: '0',
            backgroundColor: props => chroma(props.background).luminance() > 0.5 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' ,
            padding: '0.3rem 1rem',
            fontWeight: '400',
            transition: 'opacity 0.4s ease-in-out'
        },
        '&:hover span':{
            opacity: '1',
        }
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',
        '& span':{
            padding: '0.3rem 0.5rem',
            cursor: 'pointer',
            zIndex: '4',
            color: 'inherit',
        }
    },
    more: {
        backgroundColor: props => chroma(props.background).luminance() > 0.5 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' ,
    },
    animate: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s ease-in-out',
        position: 'absolute',
        transform: 'scale(0.1)',
    },
    show :{
        transform: 'scale(50)',
        opacity: '1',
        zIndex: '10',
        
    },
    copyHeader: {
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0',
        fontWeight: '400',
        fontSize: '2rem',
        transform: 'scale(0.1)',
        '& h1':{
            margin: '0',
            padding: '1rem 0',
            backgroundColor:props => chroma(props.background).luminance() > 0.5 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' ,
            width: '100%',
            textAlign: 'center',
        }
    },
    copyMessage : {
        opacity: '1',
        zIndex: '20',
        transform: 'scale(1)',
        transition: 'all 0.5s 0.3s ease-in-out',
    }
}
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