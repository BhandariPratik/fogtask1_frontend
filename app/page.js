
'use client'
import react, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Home() {

  const initRender = useRef(true);
  const [pagedata, setData] = useState([]);
  const [details, setDetails] = useState(null)
  console.log('detailssssssss', details)

  useEffect(() => {
    if (initRender.current == true) {
      pageData();
    }
    initRender.current = false

  }, [])

  const pageData = (async () => {
    try {
      let res = await axios.get('http://localhost:4000/api/v1/battleList')

      console.log('response', res)
      await setData(res?.data?.data?.data)
    }
    catch (err) {
      console.log('error', err)
    }

  })

  return (
    <>
      <div className='main l p-4 relative'>
        <div className=' title flex '>
          <img src='/backIcon.svg' alt="backIcon" className='backIcon' />
          <span className='text-white title1 mx-4 font-bold'>MULTIPLAYER <span className='mx-2'>/</span> </span>
        </div>

        <div className='title2 text-white font-bold'>
          QUICKMATCH
        </div>

        <div className='row mt-5  flex'>
          <div className='col-3 '>
            {
              pagedata?.map((ele, ind) =>
              (
                <div className='battles border-t-2 border-gray-500 p-1 group hover:bg-white' onMouseEnter={() => { setDetails(ele) }}>
                  <span className={`font-bold ${ind < 3 ? 'text-orange-500' : 'text-white'} group-hover:text-black battlemname`}>
                    {(ele?.name).toUpperCase()}
                  </span>
                </div>
              )
              )
            }
          </div>

          <div className='col-6 mx-8 ' onMouseLeave={() => setDetails(null)} >
            {details == null ? '' : <img src={`${details?.battleimage}`} alt='battle_image' className='battleImage mb-3' />}
            <span className='battleTitle text-white font-bold ' onMouseLeave={() => setDetails(null)}> {details?.name.toUpperCase()}</span>
            <div onMouseLeave={() => setDetails(null)} className='detail text-black text-bold text-xs break-all battledetails'>
              {details?.description}
            </div>
          </div>

          <div className='col-3 py-3 rightsidebar  absolute ml-0 top-0 right-0 w-auto h-screen' onMouseLeave={() => { setDetails(null) }}>
            <div className='images my-2'>
              <div className=''>
                <img src='/squad.png' alt='sqad' className='Icon' />
              </div>

              <div className='hover:bg-white flex m-0' >
                <img src='/join.png' alt='join' className='mainIcon mt-2 w-8' />
              </div>
            </div>

            <div className='images mt-4 '>
              <img src='/online.png' alt='sqad' className='Icon' />
              <img src='/profile1.png' alt='join' className='mainIcon mt-2 w-8' />
            </div>

            <div className='images mt-4'>
              <img src='/offline.png' alt='sqad' className='Icon' />
              <img src='/profile2.png' alt='join' className='mainIcon mt-2 w-8' />
            </div>
          </div>
        </div>
      </div>



    </>
  );
}
