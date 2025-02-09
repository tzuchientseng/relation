import { createStore } from 'vuex';
import auth from './modules/auth';
import { postModule } from './modules/postModule';

export default createStore({
  modules: {
    auth,
    postModule,
  }
})
