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
        <div class="text-center md:px-8">
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
            {{ loadingtxt }}
          </button>
          <transition name="bounce">
            <blockquote v-if="loading">
              <p class="text-lg font-semibold">“{{ quotes[0].quote }}”</p>
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
              {{ getBirthday(getDetails.birthday) }}
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
export default {
  name: "Info",

  data() {
    return {
      loading: false,
      quotes: [],
      loadingtxt: "See Quote",
    };
  },

  created() {
    this.$store.dispatch("getDetails", this.$route.params.id);
  },

  computed: {
    getDetails() {
      return this.$store.getters.getDetails;
    },
  },

  mounted() {},

  methods: {
    getBirthday(date) {
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var today = new Date(date);
      return today.toLocaleDateString("en-US", options);
    },

    getQuote() {
      this.loading = false;
      this.loadingtxt = "Loading...";
      let name = this.getDetails.name.replace(/ /g, "+");

      this.$store.dispatch("getQuote", name).then((res) => {
        this.quotes = res;
        this.loading = true;
        this.loadingtxt = "See Quote";
      });

      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
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