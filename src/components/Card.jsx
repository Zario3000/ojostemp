import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import "../styles/card.css"

const Card = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [initialTime, setInitialTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
  
    const handleChange = (event) => {
      setTime(Number(event.target.value));
      setInitialTime(Number(event.target.value));
    };
  
    const startTimer = () => {
      if (isActive) return; // Evitar múltiples temporizadores
  
      setIsActive(true);
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(id);
            setIsActive(false);
            Swal.fire({
              title: 'Es hora de tomar un descanso, el temporizador ha llegado a cero!',
              icon: 'info',
              showCancelButton: true,
              confirmButtonText: 'Reiniciar',
              cancelButtonText: 'Aceptar',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#3085d6',
            }).then((result) => {
              if (result.isConfirmed) {
                restartCountdown();
              }
            });
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
    };
  
    const resetTimer = () => {
      setIsActive(false);
      setTime(0);
      setInitialTime(0);
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  
    const restartCountdown = () => {
      setTime(initialTime);
      startTimer();
    };
  return (
    <div className='card-principal'>
      <div className='card-1'>
      <div className='card-temporizador'>
        <div className='card-contador'>
        <h1>{time}</h1>
        </div>
        <div className='card-inicio-temp'>
      <input
      placeholder='digite número'
        type="number"
        value={initialTime === 0 ? time : initialTime}
        onChange={handleChange}
        disabled={isActive}
        min="0"
      />
      <button className='card-iniciar' onClick={startTimer} disabled={isActive}>
        Iniciar Temporizador
      </button>
      </div>
      <div className='car-reinicio'>
      <button className='card-reiniciar' onClick={resetTimer}>
        Reiniciar
      </button>
      </div>
      
      
    </div>
      </div>
      
    </div>
    
  )
}

export default Card