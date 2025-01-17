import UserList from './components/UserManagement/UserList'
import UserAddPage from './components/UserManagement/UserAddPage'
import UserEditPage from './components/UserManagement/UserEditPage'
import userSaga from './redux/sagas/UserSaga'
import userReducer from './redux/reducers/UserReducer'
import { USER_READ, USER_WRITE } from '../../app/utils/PermChecker'

const PLUGIN_BASE_APTH = '/user'

const pluginMetadata = {
  menus: [
    {
      title: 'menus.users',
      icon: 'usersmanagement',
      path: PLUGIN_BASE_APTH + '/usersmanagement',
      permission: USER_READ,
    },
  ],
  routes: [
    {
      component: UserList,
      path: PLUGIN_BASE_APTH + '/usersmanagement',
      permission: USER_READ,
    },
    {
      component: UserAddPage,
      path: PLUGIN_BASE_APTH + '/usermanagement/add',
      permission: USER_WRITE,
    },
    {
      component: UserEditPage,
      path: PLUGIN_BASE_APTH + '/usermanagement/edit/:id',
      permission: USER_WRITE,
    },
  ],
  reducers: [{ name: 'userReducer', reducer: userReducer }],
  sagas: [userSaga()],
}

export default pluginMetadata
