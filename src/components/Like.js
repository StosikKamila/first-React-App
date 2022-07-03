import React from 'react';


 function Like() {
            const [counter, setCounter] = React.useState(0);
            const handleClick = () => setCounter((previousState) => previousState + 1);
            return (
              <>
                <div>{counter}</div>
                <button onClick={handleClick}>Lubię to</button>
              </>
            );
          }

          export default Like;