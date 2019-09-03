import React from 'react';
import { withStyles } from '@material-ui/styles';
import Footer from './Footer';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles ={
    miniPalette: {
        height: '200px',
        width: '100%',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        position: 'relative',
        '&:hover' :{
            transform: 'scale(1.075)',
        },
        // '& button':{
        //     padding: '5px',
        //     backgroundColor: 'rgba(255, 255, 255, 0.5)',
        //     position: 'absolute',
        //     top: '0',
        //     right: '0',
        //     zIndex: '2',
        //     opacity: '0',
        //     color: 'red',
        // },
        '&:hover button':{
            opacity: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }
        
    },
    deleteButton: {
        padding: '5px',
        margin : '3px',
        // borderRadius: '3px',
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: '2',
        opacity: '0',
        color: 'red',
        transition: 'all 0.3s ease-out',
        '&:hover svg':{
            transform: 'scale(1.5)',
            transition: 'all 0.3s ease-out',
        }
            
    },
    container: {
        width: '95%',
        height: '80%',
        margin: '5px auto 0 auto',
    },
    // miniContainer: {
    //     width: '100%',
    //     height: '100%',
    // },
    miniBox : {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
        marginBottom: '-4px'
    }
}

function MiniPalette(props) {
    const { palette, id, classes, goToPalette } = props;

    const handleGoToPalette = () => {
        goToPalette(id)
    }
    return (
        <div className={classes.miniPalette} onClick={handleGoToPalette}>
            <IconButton className={classes.deleteButton}>
                <DeleteIcon/>
            </IconButton>
            <div className={classes.container}>
                {palette.colors.map(color => <div className={classes.miniBox} style={{backgroundColor : color.color}} key={color.name}></div>)}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
        </div>
    )
}

export default withStyles(styles)(MiniPalette) ;