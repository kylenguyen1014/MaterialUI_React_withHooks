import down from '../ResponsiveHelper';

export default {
    container : {
        width: '100%',
        height: '6vh',
        display: 'flex',
        alignItems: 'center',

    },
    logo : {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        fontSize: '1.5rem',
        fontWeight: '700',
        backgroundColor: 'rgba(0,0,0,0.1)',
        cursor: 'pointer',
        '& span': {
            padding: '0.3rem 0.7rem'
        },
        '& a' :{
            background: 'linear-gradient(90deg, rgba(171,46,150,1) 0%, rgba(231,61,98,1) 29%, rgba(47,181,46,0.9207842316614145) 64%, rgba(0,209,255,1) 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    sliderContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.5rem',
    },
    slider: {
        width: '400px',
        // padding: '0.1rem 0.2rem',
        margin: '0.4rem 0.7rem',
        [down('md')]:{
            width: '250px',
        },
        [down('sm')]:{
            width: '150px',
        },
        [down('xs')]:{
            width: '100px',
        },
    },
    select: {
        marginLeft: 'auto',
        marginRight: '0.5rem'
    }
}
