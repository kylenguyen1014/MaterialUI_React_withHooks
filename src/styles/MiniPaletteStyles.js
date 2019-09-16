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
        '&:hover button':{
            opacity: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }      
    },
    deleteButton: {
        padding: '5px',
        margin : '3px',
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
    miniBox : {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
        marginBottom: '-4px'
    },
    dialogButton :{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '& button': {
            margin: '0.2rem 0.5rem ',  
        },
        '&:hover svg':{
            transform: 'scale(1.3)',
            transition: 'all 0.3s ease-in-out'
        }
    }
}

export default styles;