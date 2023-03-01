import React from 'react'

const PrintPreviewPage = ({name, address, pincode, mobileNo, packageCount}) => {
  return (
    <div>
        <h3>{name}</h3>
        <h3>{address}</h3>
        <h3>{pincode}</h3>
        <h3>{mobileNo}</h3>
        <div style={{fontSize:"70px"}}>{packageCount}</div>
    </div>
  )
}

export default PrintPreviewPage