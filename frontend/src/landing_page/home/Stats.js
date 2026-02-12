import React from 'react'
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-dirst always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Sharekart with 3.5 lakh crore rupees worth of equity investments.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'> That's why 1.3+ crore customers trust Sharekart with 3.5 lakh crore rupees worth of equity investments.</p>
                    <h2 className='fs-4'>The sharekart universe</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Sharekart with 3.5 lakh crore rupees worth of equity investments.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Sharekart with 3.5 lakh crore rupees worth of equity investments.</p>

                </div>
                <div className='col-6 '>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center '>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>explore<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try kite demo<i class="fa fa-arrow-right" aria-hidden="true" ></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;