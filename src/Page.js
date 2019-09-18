import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/Page';

function Page(props) {
    return (
        <section classNames='page'>
            {props.children}
        </section>
    )
}

export default withStyles(styles)(Page);