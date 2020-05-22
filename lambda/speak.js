const AWS = require('aws-sdk')

const Polly = new AWS.Polly({
  signatureVersion: 'v4',
  region: 'eu-central-1'
})

const synthesizeSpeech = params => new Promise((resolve, reject) => {
  const completeParams = {
    LanguageCode: 'it-IT',
    OutputFormat: 'mp3',
    VoiceId: 'Giorgio',
    ...params
  }

  Polly.synthesizeSpeech(completeParams, (err, data) => {
    if (err) {
      return reject(err)
    }

    console.log('Daje', data.AudioStream instanceof Buffer)

    return resolve(data.AudioStream)
  })
})

module.exports = synthesizeSpeech
