import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const styles = {
    container : {
        width: '100%',
        height: '6vh',
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'rgba(0,0,0,0.3)',
    },
    logo : {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        fontSize: '1.5rem',
        fontWeight: '700',
        backgroundColor: 'rgba(0,0,0,0.2)',
        '& span': {
            padding: '0.3rem 0.7rem'
        }
    },
    sliderContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.5rem',
    },
    slider: {
        width: '300px',
        // padding: '0.1rem 0.2rem',
        margin: '0.4rem 0.7rem'
    },
    select: {
        marginLeft: 'auto',
        marginRight: '0.5rem'
    }
}

function Navbar(props) {
    const { classes } = props;

    const handleChangeLevel = (value) => {
        props.changeLevel(value);
    }
    const handleChangeType = (e) => {
        props.changeType(e.target.value);
        props.openInfo();
    }

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <span>ColorPicker</span>
            </div>
            <div className={classes.sliderContainer}>
                <span>Level: {props.level}</span>
                <div className={classes.slider}>
                    <Slider onChange={handleChangeLevel} value={props.level} min={100} max={900} step={100} 
                        handleStyle={{marginTop: '-3px'}}
                        trackStyle={{height: '10px', backgroundColor: 'transparent'}}
                        railStyle={{height: '8px'}}
                    />
                </div>
            </div>
            <div  className={classes.select}>
                <FormControl>
                    <Select value={props.mode} onChange={handleChangeType}>
                        <MenuItem value={'hex'}>Hex: #FFFFFF</MenuItem>
                        <MenuItem value={'rgb'}>Rgb: Rgb (255, 255, 255)</MenuItem>
                        <MenuItem value={'rgba'}>Rgba: Rgba (255, 255, 255, 1)</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default withStyles(styles)(Navbar);
