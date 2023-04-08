import './Card.css';

function Card(props){
    //concatinate class names
    const classes = 'card ' + props.className;
    
    return <div className={classes}>{props.children}</div>
}

export default Card;