const ListItem = ({ children, ...rest }) => {
    const handleClick = (event) => console.log(event)
    // const handleMouseOver = (event) => alert('mouse over')
    return (
      <li className="list-item" {...rest} onClick={handleClick} >
        {children}
      </li>
    );};

export default ListItem;