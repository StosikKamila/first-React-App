const MojKomponent = ({id, label, ...rest}) => {
    // const handleChange = (event) => console.log(event.target.value)
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...rest} />
        </div>
    )
}

export default MojKomponent;