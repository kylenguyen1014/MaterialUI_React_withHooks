import down from '../ResponsiveHelper';

const styles = {
    root: {
        // height: '90vh',
        width: '100%',
        overflow: 'hidden',
    },
    container: {
        height: '90vh',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    goBack:{
        width: '20%',
        height: '50%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
        [down('lg')]:{
            width: '75%',
            height: '33.33%',
        },
        [down('md')]:{
            width: '50%',
            height: '20%',
        },
        [down('sm')]:{
            width: '100%',
            height: '10%',
        },
        '& span':{
            opacity: '0',
            transition: 'opacity 0.4s ease-in-out',
        },
        '&:hover span': {
            opacity: '1',
        }
    }
}
 export default styles;
