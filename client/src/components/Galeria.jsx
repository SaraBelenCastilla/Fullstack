import React from 'react'
// he hecho una galeria fotográfica responsive, que es la misma que hize parala tarea número 5
function Galeria() {
  return (
    <div className='container'>
      {/* la estructura es una div container y dentro cada foto en una div box */}
    <><div className='container__box'>
     <figure className='container__figure'>
    <img  className='container__img' src='https://live.staticflickr.com/65535/53693768694_b83b28e2e1_n.jpg' alt="gatito" />
    </figure  >
     </div>
     <div className='container__box'>
     <figure className='container__figure'>
    <img  className='container__img' src='https://live.staticflickr.com/65535/53693769604_2317afedc7_n.jpg' alt="instalaciones" />
    </figure>
     </div>
     <div className='container__box'>
     <figure className='container__figure'>
    <img  className='container__img' src='https://live.staticflickr.com/65535/53693632523_9c28171101_n.jpg' alt="veterinario" />
    </figure>
     </div>
     <div className='container__box'>
     <figure className='container__figure'>
    <img className='container__img'  src='https://live.staticflickr.com/65535/53693418201_6a8958f17d_n.jpg' alt="foto peluqueria" />
    </figure>
     </div>
     <div className='container__box'>
     <figure className='container__figure'>
    <img className='container__img'  src='https://live.staticflickr.com/65535/53693633433_8ec99d4e66_n.jpg' alt="mostrador clinica" />
    </figure>
     </div>
     <div className='container__box'>
     <figure className='container__figure'>
    <img className='container__img' src='https://live.staticflickr.com/65535/53692537832_d8e18d527d_n.jpg' alt="veterinaria" />
    </figure>
     </div>
     <div className='container__box'>
     <figure className='container__figure'>
    <img className='container__img' src='https://live.staticflickr.com/65535/53692536352_34a255f623_n.jpg' alt="gatito atendido" />
    </figure>
     </div>
     
     </>
     </div>
  )
}

export default Galeria