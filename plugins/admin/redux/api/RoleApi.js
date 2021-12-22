export default class RoleApi {
  constructor(api) {
    this.api = api
  }
  getRoles = () => {
    return new Promise((resolve, reject) => {
      this.api.getAdminuiRoles((error, data) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }
  getRole = (options) => {
    return new Promise((resolve, reject) => {
      console.log('=============get role')
    })
  }

  addRole = (data) => {
    return new Promise((resolve, reject) => {
      console.log('============= add role ' + data)
    })
  }

  editRole = (data) => {
    return new Promise((resolve, reject) => {
      console.log('=============edit role ' + data)
      this.api.getAdminuiRoles((error, data) => {
        this.handleResponse(error, reject, resolve, data)
      })
    })
  }

  deleteRole = async (inum) => {
    return new Promise((resolve, reject) => {
      console.log('=============delete role ' + inum)
    })
  }

  handleResponse(error, reject, resolve, data) {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  }
}
