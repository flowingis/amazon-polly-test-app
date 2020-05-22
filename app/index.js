import speak from './speak.js'
import play from './play.js'

document
  .querySelector('button')
  .addEventListener('click', async () => {
    const text = document.querySelector('textarea').value
    const soundInBase64 = await speak(text)
    play(soundInBase64)
  })
