import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    character: [],
    quotes: [
      {
        "quote_id": 3,
        "quote": "The next time you bring a gun to a job without telling me, I will stick it up your ass sideways.",
        "author": "Skyler White",
        "series": "Breaking Bad"
      },
      {
        "quote_id": 9,
        "quote": "Funyuns are awesome.",
        "author": "Jesse Pinkman",
        "series": "Breaking Bad"
      },
      {
        "quote_id": 77,
        "quote": "IFT",
        "author": "Mike Ehrmantraut",
        "series": "Breaking Bad"
      },
    ],
  },
  mutations: {

    setCharacter(state, payload) {
      state.character = payload;
    },
    setQuote(state, payload) {
      state.quotes = payload;
    }

  },
  actions: {
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

    async getQuote(context) {
      await axios.get('https://www.breakingbadapi.com/api/quotes')
        .then(function (res) {
          // console.log(res);
          context.commit('setQuote', res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
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
      return state.character;
    },

    getQuotes: (state) => {
      return state.quotes;
    },
  },
});
