export default class InitApi {
  constructor(api) {
    this.api = api
  }

  getScopes = (options) => {
    return new Promise((resolve, reject) => {
      this.api.getOauthScopes(options, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  getScripts = () => {
    return new Promise((resolve, reject) => {
      this.api.getConfigScripts((error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  getAttributes = (options) => {
    return new Promise((resolve, reject) => {
      this.api.getAttributes(options, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  getClients = (options) => {
    return new Promise((resolve, reject) => {
      this.api.getOauthOpenidClients(options, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}
