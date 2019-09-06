import React, { useState, useEffect } from 'react';
import DraggableBoxContainer from './DraggableBoxContainer';
import seedColors from './seedColors';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import DraggableBox from './DraggableBox';
import arrayMove from 'array-move';
import red from '@material-ui/core/colors/red';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
    //   padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    paletteButton:{
        marginLeft: 'auto',
        '& button':{
            marginRight: '0.2rem',
        }
    },
    addColorForm:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        '& label':{
            margin: '0.5rem'
        },
        '& button' :{
            marginTop: '1rem',
        }
    },
    colorFormButton: {
        margin: '1rem 0',
        '& button': {
            margin: '0 0.2rem',
        },
    },
    colorsContainer :{
        width: '100%',
        height: '90vh',
    }
  }));

function NewPaletteForm(props) {
    const  classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrentColor] = useState('purple');
    const [newColorName, setNewColorName] = useState('');
    const [colors, setColors] = useState([]);
    const _allColor = seedColors.map(palette => palette.colors).flat();

    useEffect(() => {
        /// custom rule will have name 'isColorUnique'
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            if (colors.every(color => color.name !== newColorName)) {
                return true;
            }
            return false;
        });
        /// custom rule will have name 'isColorUnique'
        ValidatorForm.addValidationRule('isColorValueUnique', (value) => {
            if (colors.every(color => color.color !== currentColor)) {
                return true;
            }
            return false;
        });
    });

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleColorChange(color){
        setCurrentColor(color.hex);
    }

    function handleInputChange(e){
        setNewColorName(e.target.value);
    }

    function handleAddColor(){
        const newColor = {
            name: newColorName,
            color: currentColor
        };
        setColors([...colors, newColor ]);
        setNewColorName('');
    }

    function goBack(){
        props.history.push('/');
    }

    function deleteColor(name){
        setColors(colors.filter(color => color.name !== name))
    }

    function randomColor(){
        if (colors.length < 20){
            let rand = Math.floor(Math.random() * _allColor.length);
            while(true){
                let randomName = _allColor[rand].name;
                let isDupplicate = colors.every(color => color.name !== randomName);
                if (isDupplicate){
                    setColors([...colors, _allColor[rand]]);
                    break;
                } else {
                    rand = Math.floor(Math.random() * _allColor.length);
                }
            }
        }
    }
    function reset(){
        setColors([]);
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
        // this.setState(({items}) => ({
        //   items: arrayMove(items, oldIndex, newIndex),
        // }));
        setColors(arrayMove(colors, oldIndex, newIndex));
      };

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
            color="default"
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create New Palette
            </Typography>
            <div className={classes.paletteButton}>
                <Button variant='contained' color='primary' onClick={goBack}>
                    GO BACK
                </Button>
                <Button variant='contained' color='secondary'>
                    SAVE PALETTE
                </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
        </IconButton>
        </div>
          <Divider />
        <div className={classes.addColorForm}>
            <Typography variant="h4" noWrap>
                ADD A NEW COLOR
            </Typography>
            <div className={classes.colorFormButton}>
                <Button variant='contained' color='primary' onClick={reset}>
                    RESET 
                </Button>
                <Button variant='contained' color='secondary' disabled={colors.length >=20} onClick={randomColor}>
                    ADD RANDOM
                </Button>
            </div>
            <ChromePicker 
                width='300px'
                color={currentColor}
                onChangeComplete={handleColorChange}
            />
            <ValidatorForm onSubmit={handleAddColor} instantValidate={false}>
                <TextValidator
                    fullWidth
                    width='200px'
                    label='Color Name'
                    onChange={handleInputChange}
                    name='newColorName'
                    validators={['required', 'isColorNameUnique', 'isColorValueUnique']}
                    errorMessages={['This field is required', 'Color\'s name must be unique', 'This color has been taken']}
                    value={newColorName}
                    
                />
                <Button variant='contained' style={{backgroundColor: currentColor}} type='submit' disabled={colors.length >=20} fullWidth>
                    ADD COLOR
                </Button>
            </ValidatorForm>

        </div>
        </Drawer>
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <div className={classes.colorsContainer}>
                {/* {colors.map(color => <DraggableBox key={color.name} name={color.name} background={color.color} deleteColor={deleteColor}/>)} */}
                <DraggableBoxContainer axis='xy' distance={20} colors={colors} deleteColor={deleteColor} onSortEnd={onSortEnd}/>
            </div>
        </main>
      </div>
    )
}

export default NewPaletteForm;
