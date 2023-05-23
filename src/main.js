import { initializeApp } from 'firebase/app';
import { createApp } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire';
import './style.css';
import App from './App.vue';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDkWF1IFcu7elIZb3ZGUxWFKsK8kvKmZoc',
  authDomain: 'almvb-1b6f3.firebaseapp.com',
  projectId: 'almvb-1b6f3',
  storageBucket: 'almvb-1b6f3.appspot.com',
  messagingSenderId: '135126608274',
  appId: '1:135126608274:web:13cad0e8465f6e5fa8b94b',
  measurementId: 'G-XF08V3F7FX',
});

const app = createApp(App);

app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});

app.mount('#app');
