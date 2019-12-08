export default  {
    footer: {
        height: '4vh',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: props => props.isFullSize ? '1rem' : '0.7rem',
        alignItems: 'center',
        '& p': {
            padding: '0.2rem',
            marginRight: '0.5rem',
            fontWeight: '700',     
        }
    },
    
}