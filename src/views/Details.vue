<template>
  <div class="details container mx-auto">
    <div class="bio md:w-2/3">
      <div
        class="
          profile
          rounded-lg
          mb-4
          border-l-4 border-r-4 border-yellow-400
          shadow-xl
          mx-auto
          md:mx-0
        "
      >
        <img
          class="rounded-lg"
          :src="getDetails.img"
          alt=""
          width="384"
          height="512"
        />
      </div>

      <figure
        class="
          shadow-xl
          rounded-xl
          p-6
          border-4 border-yellow-400
          mx-6
          md:mx-auto
        "
      >
        <div class="mx-auto md:mx-0 md:px-8">
          <button
            class="
              bg-yellow-500
              hover:bg-yellow-700
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
              <p class="text-lg font-semibold">“{{ quotes }}”</p>
            </blockquote>
          </transition>
        </div>
        <div
          class="pt-6 md:p-8 md:text-left grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <figcaption class="text-lg">
            <div class="font-bold">
              {{ getDetails.name }} ({{ getDetails.nickname }})
            </div>
            <div>
              <span class="font-semibold">Birthday:</span>
              {{ getBirthday(getDetails.birthday) }}
            </div>
            <div>
              <span class="font-semibold">Portrayed:</span>
              {{ getDetails.portrayed }}
            </div>
            <div>
              <span class="font-semibold">Existence :</span>
              {{ getDetails.status }}
            </div>
          </figcaption>

          <figcaption class="text-lg">
            <div>
              <span class="font-semibold">Appeared In Season:</span>
              <span v-for="x in getDetails.appearance" :key="x">
                {{ x }},
              </span>
            </div>
            <div>
              <span class="font-semibold">Occupation:</span>
              <span v-for="x in getDetails.occupation" :key="x">
                {{ x }},
              </span>
            </div>
            <div class="text-xl">
              From
              <span class="font-semibold text-yellow-400">{{
                getDetails.category
              }}</span>
            </div>
          </figcaption>
        </div>
      </figure>
      <div class="text-center md:text-left mt-4">
        <router-link to="/">
          <button
            class="
              bg-red-500
              hover:bg-red-700
              text-white
              font-bold
              py-2
              px-10
              back
              rounded
              shadow-lg
            "
          >
            Back
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",

  data() {
    return {
      loading: false,
      quotes: "",
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
        this.quotes = !res.length ? "Sorry no Quote found" : res[0].quote;
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