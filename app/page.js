
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
                <div key={ind} className='battles border-t-2 border-gray-500 p-1 group hover:bg-white' onMouseEnter={() => { setDetails(ele) }}>
                  <span className={`font-bold ${ind < 3 ? 'text-orange-500' : 'text-white'} group-hover:text-black battlemname`}>
                    {(ele?.name).toUpperCase()}
                  </span>
                </div>
              )
              )
            }
          </div>

          <div className='col-6 mx-8 w-96 ' onMouseLeave={() => setDetails(null)} >
            {details == null ? '' : <img src={`${details?.battleimage}`} alt='battle_image' className='battleImage mb-3 ' />}
            <span className='battleTitle text-white font-bold ' onMouseLeave={() => setDetails(null)}> {details?.name.toUpperCase()}</span>
            <div onMouseLeave={() => setDetails(null)} className='detail text-black text-bold text-xs break-all battledetails'>
              {details?.description}
            </div>
          </div>

          <div className='col-3 p-2 rightsidebar group absolute ml-0 top-0 right-0 w-auto h-screen' onMouseLeave={() => { setDetails(null) }}>
            <div className='images py-3 group-hover:border-t-2 border-white'>
              <div className='flex items-center '>
                <img src='/squad.png' alt='sqad' className='Icon' />
                <span className='hidden group-hover:block ml-2 text-white text-bold text-xs' style={{fontSize:'10px'}}> SQUAD </span>
              </div>

              <div className=' flex items-center mt-2 ' >
                <img src='/join.png' alt='join' className=' mainIcon w-9 h-9' />
                <span className='hidden group-hover:block pl-1 py-2 text-white text-bold userName text-sm' style={{fontSize:'12px'}}> Squad Join</span>
              </div>
            </div>

            <div className='images py-3 group-hover:border-t-2 border-white'>
              <div className='flex items-center '>
                <img src='/online.png' alt='sqad' className='Icon' />
                <span className='hidden group-hover:block ml-2 text-white text-bold text-xs' style={{fontSize:'10px'}}> ONLINE </span>
              </div>

              <div className=' flex items-center mt-2 ' >
                <img src='/profile1.png' alt='join' className=' mainIcon w-9 h-9' />
                <span className='hidden group-hover:block pl-1 py-2 text-white text-bold userName text-sm' style={{fontSize:'12px'}}> Pratik</span>
              </div>
            </div>

            <div className='images py-3 group-hover:border-t-2 border-white'>
              <div className='flex items-center '>
                <img src='/offline.png' alt='sqad' className='Icon ' />
                <span className='hidden group-hover:block ml-2 text-white text-bold text-xs' style={{fontSize:'10px'}}> OFFLINE</span>
              </div>

              <div className=' flex items-center mt-2 ' >
                <img src='/profile2.png' alt='join' className=' mainIcon w-9 h-9' />
                <span className='hidden group-hover:block pl-1 py-2 text-white text-bold userName text-sm' style={{fontSize:'12px'}}> Darshan</span>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}
