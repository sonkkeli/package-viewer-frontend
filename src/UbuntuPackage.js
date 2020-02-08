import React, { Fragment }  from 'react';

const UbuntuPackage = ({ data, loaded, handleClick, backToMain }) => {
  
  return loaded ? (
      <Fragment >
        <button onClick={backToMain}>Return to main page</button>

        <h1>{data.packageName}</h1>
        <h3>Versio: {data.version}</h3>

        <p className="description">{data.description}</p>
        <h3>Dependencies</h3>
        { data.dependencies.map((d,i) => (
          <p 
            id={d} 
            key={`dep-${i}`} 
            onClick={handleClick}
            className="listitem"
          >
            {d}
          </p>
        ))}

        <h3>Reverse Dependencies</h3>
        { data.reverseDependencies.map((d,i) => (
          <p 
            id={d} 
            key={`revdep-${i}`} 
            onClick={handleClick}
            className="listitem"
          >
            {d}
          </p>
        ))}
      </Fragment> 
    ) 
    : <p>loading...</p>
}

export default UbuntuPackage;