import React from 'react'
function RightSection({imageURL,
  productName,
  productDescription,
  productLink,}) {
    return ( 
        <div className="container mt-5 ">
      <div className="row px-5 mx-5">
        <div className="col-7 p-5 mt-5">
          <h1 className='mt-5'>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={productLink}
              className=""
              style={{ textDecoration: "none" }}
            >
              Learn more<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <img src={imageURL} />
        </div>
      </div>
    </div>
     );
}

export default RightSection;