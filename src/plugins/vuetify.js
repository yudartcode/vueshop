import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#002d40',
        secondary: '#1aa6b7',
        accent: '#ff414d',
        error: '#f56a79',
      },
    },
  },
});
