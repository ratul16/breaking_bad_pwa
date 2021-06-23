import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCharacter: {},
    character: [],
    quotes: [],
  },
  mutations: {

    setCharacter(state, payload) {
      state.character = payload;
    },

    setDetails(state, payload) {
      state.currentCharacter = payload[0];
    },

    setQuote(state, payload) {
      state.quotes = payload;
    }

  },
  actions: {

    // Character list request
    async getCharacter(context) {
      await axios.get('https://www.breakingbadapi.com/api/characters?limit=4')
        .then(function (res) {
          // console.log(res);
          context.commit('setCharacter', res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },


    // Character detail request
    async getDetails(context, payload) {
      await axios.get(`https://www.breakingbadapi.com/api/characters/${payload}`)
        .then(function (res) {
          // console.log(res.data.[0]);
          context.commit('setDetails', res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },

    // Character quote request
    async getQuote(context, payload) {

      return new Promise((resolve, reject) => {

        axios({
          method: "get",
          url: `https://www.breakingbadapi.com/api/quote/random?author=${payload}`,
        })
          .then(response => {
            const data = response.data;
            resolve(data);
          })
          .catch(error => {
            console.log(error);

            reject(error);
          });

      });

    },

  },



  getters: {

    getList: state => state.character.map((x) => {
      return {
        char_id: x.char_id,
        name: x.name,
        img: x.img,
        portrayed: x.portrayed,
        nickname: x.nickname,
      };
    }),

    getDetails: (state) => {
      return state.currentCharacter;
    },

    getQuotes: (state) => {
      return state.quotes;
    },
  },
});
