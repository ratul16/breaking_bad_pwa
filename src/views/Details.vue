<template>
  <div class="details container mx-auto">
    <div class="bio md:w-2/3">
      <img
        class="
          mx-auto
          md:mx-0
          w-60
          h-60
          rounded-lg
          shadow-xl
          border-l-8 border-yellow-400
          mb-2
        "
        :src="getDetails.img"
        alt=""
        width="384"
        height="512"
      />

      <figure
        class="
          shadow-xl
          rounded-xl
          p-6
          border-4 border-yellow-400
          mx-8
          md:mx-auto
        "
      >
        <div class="md:px-8">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-10
              rounded
            "
            @click="getQuote()"
          >
            See Quote
          </button>
          <transition name="bounce">
            <blockquote v-if="loading">
              <p class="text-lg font-semibold">“{{ quotes }}”</p>
            </blockquote>
          </transition>
        </div>
        <div
          class="
            pt-6
            md:p-8
            text-center
            md:text-left
            grid grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >
          <figcaption class="text-lg">
            <div class="font-bold">
              {{ getDetails.name }} ({{ getDetails.nickname }})
            </div>
            <div>
              Birthday:
              {{ new Date(getDetails.birthday).toISOString().substring(0, 10) }}
            </div>
            <div>Portrayed: {{ getDetails.portrayed }}</div>
            <div>Existence : {{ getDetails.status }}</div>
          </figcaption>

          <figcaption class="text-lg">
            <div>
              Appeared In Season:
              <span v-for="x in getDetails.appearance" :key="x">
                {{ x }},
              </span>
            </div>
            <div>
              Occupation:
              <span v-for="x in getDetails.occupation" :key="x">
                {{ x }},
              </span>
            </div>
            <div class="text-3xl">
              From
              <span class="font-semibold text-yellow-400">{{
                getDetails.category
              }}</span>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Info",
  data() {
    return {
      loading: false,
      quotes: "",
    };
  },
  computed: {
    getDetails() {
      let data = this.$store.getters.getDetails;

      let result = data.filter((x) => {
        return x.char_id == this.$route.params.id;
      });

      this.name = result[0].name;

      return result[0];
    },
  },

  methods: {
    async getQuote() {
      this.loading = false;
      let author = this.$route.params.name.replace(/ /g, "+");
      let url = `https://www.breakingbadapi.com/api/quote/random?author=${author}`;

      await axios
        .get(url)
        .then(function (res) {
          let val = res.data[0];
          // console.log(val.quote);
          this.quotes = val.quote;
          this.loading = true;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },

  // created: function () {
  //   let data = Object.entries(this.$store.getters.getQuotes).map((e) => ({
  //     [e[0]]: e[1],
  //   }));

  //   let author = this.$route.params.name.replace(/ /g, "+");
  //   console.log(typeof data);

  //   // let result = data.filter((x) => {
  //   //   return x.author == author;
  //   // });

  //   var results = [];
  //   var searchField = "author";
  //   var searchVal = author;
  //   for (var i = 0; i < obj.list.length; i++) {
  //     if (Object.list[i][searchField] == searchVal) {
  //       results.push(obj.list[i]);
  //     }
  //   }

  //   console.log(result);
  //   console.log(author);
  // },
};
</script>

<style scoped lang="css">
.details {
  margin: 10% auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>