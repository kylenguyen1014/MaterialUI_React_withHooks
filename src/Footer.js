import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    footer: {
        height: '4vh',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: props => props.isFullSize ? '1rem' : '0.7rem',
        alignItems: 'center',
        '& p': {
            padding: '0.2rem',
            marginRight: '0.5rem',
            fontWeight: '700',     
            // textOverflow: 'ellipsis',  
            // wordWrap: 'break-word' ,
            // whiteSpace: 'pre-wrap',
            // overflow: 'hidden',
        }
    },
    
}
function Footer(props) {
    const { classes, paletteName, emoji } = props;
    return (
        <div className={classes.footer}>
            <p>{paletteName}</p>
            <p>{emoji}</p>
        </div>
    )
}

export default withStyles(styles)(Footer);
