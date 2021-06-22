import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    character: [
      {
        char_id: 37,
        name: "Bogdan Wolynetz",
        birthday: null,
        occupation: ["Former owner of A1A Car Wash"],
        img: "https://i.pinimg.com/originals/d5/c0/34/d5c0345ae70fbdbaa33b7537d685da54.jpg",
        status: "Alive",
        nickname: "Bogdan",
        appearance: [1, 3, 4],
        portrayed: "Marius Stan",
        category: "Breaking Bad",
        better_call_saul_appearance: null,
      },
      {
        char_id: 3,
        name: "Skyler White",
        birthday: "1970-08-11T00:00:00.000Z",
        occupation: [
          "House wife",
          " Book Keeper",
          " Car Wash Manager",
          " Taxi Dispatcher",
        ],
        img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
        status: "Alive",
        nickname: "Sky",
        appearance: [1, 2, 3, 4, 5],
        portrayed: "Anna Gunn",
        category: "Breaking Bad",
        better_call_saul_appearance: null,
      },
      {
        char_id: 2,
        name: "Jesse Pinkman",
        birthday: "1984-09-24T00:00:00.000Z",
        occupation: ["Meth Dealer"],
        img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
        status: "Alive",
        nickname: "Cap n' Cook",
        appearance: [1, 2, 3, 4, 5],
        portrayed: "Aaron Paul",
        category: "Breaking Bad",
        better_call_saul_appearance: null,
      },
    ],
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
      await axios.get('https://www.breakingbadapi.com/api/character/random?limit=4&offset=4')
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
      await axios.get('https://www.breakingbadapi.com/api/character/random?limit=4&offset=4')
        .then(function (res) {
          // console.log(res);
          context.commit('setQuote', res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

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
    }


  },
});
