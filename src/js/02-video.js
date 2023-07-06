import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }

  window.addEventListener('load', () => {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
      player.setCurrentTime(currentTime);
    }
  });
  const express = require('express');
const throttle = require('express-throttle');

const app = express();

// Обмеження до 100 запитів на хвилину
app.use(throttle({ rate: '100/minute' }));

// Додайте решту вашого коду маршрутизації

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});
