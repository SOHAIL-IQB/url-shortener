import './OutlinedButton.css'

const OutlinedButton = (props)=>{
    const {color="primary", size="regular", onClick} = props
    return (
        <button onClick={onClick} className={`outlined-${color}-color outlined-${size}-size`}>
            {props.children?props.children:"CTA"}
        </button>
    )
}
export default OutlinedButton