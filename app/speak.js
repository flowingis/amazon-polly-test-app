import CONFIG from './config.js'

export default async (value) => {
  const response = await window.fetch(CONFIG.URL, {
    headers: {
      Authorization: CONFIG.API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Text: value,
      VoiceId: 'Bianca'
    }),
    method: 'POST'
  })

  const base64text = await response.text()

  return base64text
}
