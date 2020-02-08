import React, {useState, useEffect} from 'react';
import axios from 'axios'
import UbuntuPackage from './UbuntuPackage'

const App = () => {
  const apiurl = 'https://ubuntu-package-viewer.herokuapp.com/api/'
  const [packages, setPackages] = useState([])
  const [selectedPackage, setSelectedPackage] = useState('')
  const [packData, setPackData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [notFoundError, setNotFoundError] = useState(false)

  useEffect(()=> {
    const fetchPackages = async () => {
      await axios.get(`${apiurl}packages`).then(res => {
        setPackages(res.data)
      })
    }
    fetchPackages();
  },[])  

  const backToMain = () => {
    setSelectedPackage('')
    setLoaded(false)
  }

  const fetchSelectedPackage = async (pack) => {
    await axios.get(`${apiurl}package/${pack}`).then(res => {
      setPackData(res.data)
      if(!res.data.packageName){
        backToMain()
        setNotFoundError(true)
        setTimeout(() => {
          setNotFoundError(false)
        },5000)
        return;
      }
      setLoaded(true)
    })
  }

  const handleClick = (event) => {
    event.preventDefault()
    setSelectedPackage(event.target.id)
    fetchSelectedPackage(event.target.id)
    setLoaded(false)
  }

  return (
    <div className="center">
      { notFoundError 
        ? <p className="error">Package was not found</p> 
        : null }
      
      { selectedPackage
      ? (
          <UbuntuPackage 
            data={packData}
            loaded={loaded}
            handleClick={handleClick}
            backToMain={backToMain}
          />
        )
      : (
        <div >
          <h1>Packages:</h1>
          { packages
            .map(p => {
            return (
              <p 
                className="listitem"
                id={p} 
                key={`name-${p}`} 
                onClick={handleClick}
              >
                {p}
              </p>
              )
          })}
        </div>
      )}
    </div>
  )
}

export default App;
