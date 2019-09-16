import React, { useState, useEffect } from 'react';
import useStyles from './styles/NewPaletteFormStyles';
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
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import DraggableBox from './DraggableBox';
import arrayMove from 'array-move';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import red from '@material-ui/core/colors/red';



function NewPaletteForm(props) {
    const  classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [currentColor, setCurrentColor] = useState('purple');
    const [newColorName, setNewColorName] = useState('');
    const [colors, setColors] = useState([]);
    const [paletteName, setPaletteName] = useState('');
    const [emoji, setEmoji] = useState('');
    const [openPalette, setOpenPalette] = useState(false);
    const [openEmoji, setOpenEmoji] = useState(false);
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
        /// custom rule will have name 'isPaletteUnique'
        ValidatorForm.addValidationRule('isPaletteUnique', (value) => {
            if (props.allPaletteName.every(name => name !== paletteName)) {
                return true;
            }
            return false;
        });
        /// custom rule will have name 'isPaletteUnique'
        ValidatorForm.addValidationRule('isSuitableLength', (value) => {
            if (paletteName.length <= 27) {
                return true;
            }
            return false;
        });
    });

    function handleDrawerOpen() {
        setOpenDrawer(true);
    }

    function handleDrawerClose() {
        setOpenDrawer(false);
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

    function handleClosePalette(){
        setOpenPalette(false);
    }

    function handleOpenPalette(){
        setOpenPalette(true);
    }
    function handlePaletteChange(e){
        setPaletteName(e.target.value);
    }
    function handleCloseEmoji(){
        setOpenEmoji(false);
    }

    function handleOpenEmoji(){
        setOpenEmoji(true);
    }
    function switchToEmoji(){
        handleClosePalette();
        handleOpenEmoji();
    }
    function choseEmoji(emoji){
        setEmoji(emoji.native);
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

    function handleAddPalette(){
        const newPalette = {
            paletteName: paletteName,
            id: paletteName.toLocaleLowerCase().replace(/ /g, '-'),
            emoji: emoji,
            colors : colors
        };
        props.addPalette(newPalette);
        props.history.push('/');
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
        setColors(arrayMove(colors, oldIndex, newIndex));
      };

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
            color="default"
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: openDrawer,
            })}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, openDrawer && classes.hide)}
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
                <Button variant='contained' color='secondary' onClick={handleOpenPalette}>
                    SAVE PALETTE
                </Button>
                <Dialog open={openPalette} onClose={handleClosePalette} aria-labelledby="save-palette">
                    <ValidatorForm onSubmit={switchToEmoji}>
                        <DialogTitle id="save-palette">Give Palette A Name</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            To save this palette, please enter a name here.
                        </DialogContentText>
                        <TextValidator
                            autoFocus
                            fullWidth
                            margin="dense"
                            id="paletteName"
                            label="Palette's name"
                            onChange={handlePaletteChange}
                            name='paletteName'
                            validators={['required', 'isPaletteUnique']}
                            errorMessages={['This field is required', 'Palette\'s name must be unique']}
                            value={paletteName}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClosePalette} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" type='submit'>
                            Next
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
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
                [classes.contentShift]: openDrawer,
            })}
        >
            <div className={classes.drawerHeader} />
            <div className={classes.colorsContainer}>
                <DraggableBoxContainer axis='xy' distance={20} colors={colors} deleteColor={deleteColor} onSortEnd={onSortEnd}/>
            </div>
            <Dialog open={openEmoji} onClose={handleCloseEmoji} aria-labelledby="emoji">
                <DialogTitle id="emoji">Pick an Emoji</DialogTitle>
                <DialogContent>      
                    <Picker 
                        set='emojione'
                        onSelect={choseEmoji}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseEmoji} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleAddPalette} color="primary">
                    Finish
                </Button>
                </DialogActions>
            </Dialog>
        </main>
      </div>
    )
}

export default NewPaletteForm;
