import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyC2lWouJOchOjhfy-DUT8FgoihXhQcxTUk',
    authDomain: 'groupslice-91395.firebaseapp.com',
    databaseURL: 'https://groupslice-91395.firebaseio.com',
    projectId: 'groupslice-91395',
    storageBucket: 'groupslice-91395.appspot.com',
    messagingSenderId: '89717345152',
    appId: '1:289717345152:web:5a5b93c095c44be9'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'GroupSlice',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
