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
                params: { id: x.char_id },
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
    return {};
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
