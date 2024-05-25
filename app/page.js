import react from 'react';


export default function Home() {
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
          <div className='col-3 flex-grow'>

            <div className='battles hover:bg-white border-t-2 border-gray-500 p-2'>
              <span className='font-bold text-xs text-orange-600 '>
                LARGE SCALE BATTLE
              </span>
            </div>

            <div className='battles hover:bg-white border-t-2 border-gray-500 p-2'>
              <span className='font-bold text-xs text-orange-600 '>
                LARGE SCALE BATTLE
              </span>
            </div>
            <div className='battles hover:bg-white border-t-2 border-gray-500 p-2'>
              <span className='font-bold text-xs text-orange-600 '>
                LARGE SCALE BATTLE
              </span>
            </div>
            <div className='battles hover:bg-white border-t-2 border-gray-500 p-2'>
              <span className='font-bold text-xs text-orange-600 '>
                LARGE SCALE BATTLE
              </span>
            </div>
          </div>

          <div className='col-6  mx-2'>
            <img src='/battle_image.png' alt='battle_image' className='battleImage mb-3' />
            <span className='battleTitle text-white font-bold '> LARGE SCALE BATTLE</span>
            <div className='detail text-white text-xs break-all battledetails'>
              Battle field at bestBattle field at bestBattle field at bestBattle
              field at bestBattle field at bestBattle field at bestBattle field at best</div>
          </div>

          <div className='col-3 py-3 rightsidebar  absolute ml-0 top-0 right-0 w-auto h-screen'>
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
