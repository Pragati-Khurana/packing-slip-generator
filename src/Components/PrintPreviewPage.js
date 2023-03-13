import React from 'react'

const PrintPreviewPage = ({fromName, name, address,city, state1, pincode, mobileNo, packageCount}) => {
  return (
    <div style={{fontSize: '20px'}}>
        <div style={{}}>
          To,
        </div>
        <div style={{paddingLeft: '20px'}}>
          <div  style={{fontSize: '24px', fontWeight: '500'}}>{name}</div>
          <div>Address: {address}</div>
          <div>{city}, {state1} - {pincode}</div>
          <div> Mobile No.: {mobileNo}</div>
        </div><br />
        <div style={{fontSize: '26px', fontWeight: '500'}}>
            No. of Parcel: {packageCount}
        </div><br />

        <div>
          From,
        </div>
        
        <div  style={{paddingLeft: '20px'}}>
         <div  style={{fontSize: '24px', fontWeight: '500'}}>{fromName}</div>
         <div>Mobile No.: 9375044447</div>
         <div>Surat</div>
        </div>
    </div>
  )
}

export default PrintPreviewPage