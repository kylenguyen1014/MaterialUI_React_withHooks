import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

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
