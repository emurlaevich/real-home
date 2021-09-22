<template>
    <div class="wrap d-flex flex-column min-vh-100">
      <Header/>
      <main class="flex-fill">
        <router-view/>
      </main>
      <Footer/>

    </div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	export default {
		components: {
			Header,
      Footer
		},
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
body {
  font-family: 'Playfair Display', serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3c3c3c;
}
</style>
