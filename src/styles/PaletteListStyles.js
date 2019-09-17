import down from '../ResponsiveHelper';

export default {
    root: {
        margin: '0',
        padding: '0',
        height: '100vh',
        background: 'linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(26,83,124,1) 20%, rgba(9,90,126,1) 50%, rgba(0,212,255,1) 100%)',
        overflow: 'auto'
    },
    main : {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        [down('lg')]: {
            width: '60%'
        },
        [down('md')]: {
            width: '70%'
        },
        [down('xs')]: {
            width: '80%'
        },
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a': {
            color: 'orange',
            cursor: 'pointer',
        },
        '& h1': {
            background: 'linear-gradient(90deg, rgba(171,46,150,1) 0%, rgba(231,61,98,1) 29%, rgba(47,181,46,0.9207842316614145) 64%, rgba(0,209,255,1) 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    miniContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '5%',
        marginTop: '2rem',
        [down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '3%',
        },
        [down('xs')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridGap: '1%',
        },
    }
}