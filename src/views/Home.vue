<template>
  <div class="home">
    <div class="hero-section">
      <div class="container mx-auto">
        <img
          class="cover shadow-xl rounded-b-xl"
          src="@/assets/background.jpg"
          height="512"
          alt=""
        />
        <div class="hero-text text-center text-2xl font-semibold my-12">
          Series Characters
        </div>

        <div class="character mb-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <router-link
              v-for="x in getValues"
              :key="x.char_id"
              :to="{
                name: 'character.details',
                params: { id: x.char_id },
              }"
            >
              <figure
                class="
                  shadow-lg
                  md:shadow-2xl
                  border-l-4 border-r-4 border-yellow-400
                  rounded-b-xl
                  pb-10
                  mx-8
                  md:mx-4
                "
              >
                <div class="profile mx-auto">
                  <img
                    class="rounded-full"
                    :src="x.img"
                    alt=""
                    width="384"
                    height="512"
                  />
                </div>
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
<style scoped lang="css">
.home {
  position: relative;
}

.hero-section {
  height: 100%;
  width: 100%;
}

.cover {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.profile {
  height: 200px;
  width: 200px;
}

.profile img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
}
</style>
