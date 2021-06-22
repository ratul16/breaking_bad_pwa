<template>
  <div class="home">
    <div class="hero-section">
      <div class="container mx-auto">
        <div class="hero-text text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          facilis dolor corporis blanditiis dolores magnam, provident libero
          fugit dignissimos vero magni porro ad nobis maxime voluptate iusto sed
          minima. Voluptas!
        </div>

        <div class="character">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <router-link
              v-for="x in getValues"
              :key="x.char_id"
              :to="{
                name: 'character.details',
                params: { id: x.char_id, name: x.name },
              }"
            >
              <figure class="bg-gray-100 rounded-xl py-10 mx-8 md:mx-4">
                <img
                  class="w-32 h-32 mx-auto rounded-full"
                  :src="x.img"
                  alt=""
                  width="384"
                  height="512"
                />
                <div class="pt-6 space-y-4 text-center">
                  <figcaption>
                    <div class="font-bold">{{ x.name }} ({{ x.nickname }})</div>
                    <div>
                      <span class="font-semibold"> Portrayed: </span
                      >{{ x.portrayed }}
                    </div>
                  </figcaption>
                </div>
              </figure>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      values: [
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
    };
  },
  created() {
    this.$store.dispatch("getCharacter");
  },
  computed: {
    getValues() {
      return this.$store.getters.getList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  position: relative;
}

.hero-section {
  height: 100vh;
  width: 100%;
  background: center center no-repeat url("~@/assets/background.jpg");
  background-size: cover;
}
</style>
