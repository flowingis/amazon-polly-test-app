const ApiBuilder = require('claudia-api-builder')
const speak = require('./speak')

const api = new ApiBuilder()

api.setBinaryMediaTypes(['audio/mpeg'])

api.post('/sound',
  async (request) => {
    if (request.headers.Authorization !== process.env.API_KEY) {
      throw new ApiBuilder.ApiResponse('Unauthorized', { 'Content-Type': 'text/plain' }, 403)
    }

    return speak(request.body)
  },
  { success: { contentType: 'audio/mpeg' } })

module.exports = api
