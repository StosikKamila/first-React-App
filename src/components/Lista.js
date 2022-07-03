import React from 'react';
import PropTypes from 'prop-types'
import ListItem from "./ListItem";

const Lista = ({elementy}) => {
  return (
    <ul>
      {elementy.map((element, index) => (
        <ListItem key={element + index}>{element}</ListItem>
      ))}
    </ul>
  );
}
Lista.propTypes = {
  data: PropTypes.string,
}
export default Lista;