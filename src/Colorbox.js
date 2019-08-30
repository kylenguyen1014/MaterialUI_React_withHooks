import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
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
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
        }
    },
    more: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
}
function Colorbox(props) {
    const [copied, setCopy] = useState(false);
    const { classes, background, name } = props;
    return (
        <CopyToClipboard text={'copied'} onCopy={() => setCopy(true)}>
            <div className={classes.root} style={{backgroundColor: `${background}`}}>
                
                    <div className={classes.info}>
                        <span>{name}</span>
                        <span className={classes.more}>MORE</span>
                    </div>
                    <div className={classes.copyButton}>
                        <span>COPY</span>
                    </div>
                
            </div>
        </CopyToClipboard>
    )
}

export default withStyles(styles)(Colorbox);