export default base64Sound => {
  const snd = new window.Audio('data:audio/wav;base64,' + base64Sound)
  return snd.play()
}
