<template>
  <div>
    <router-view />
  </div>
</template>

<style>
@import "./assets/tailwind.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.back {
  width: 200px;
}
</style>
