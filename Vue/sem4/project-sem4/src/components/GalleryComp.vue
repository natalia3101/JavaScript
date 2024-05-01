<template>
    <div>
        <div><img class="big" :src="currentUrl" alt=""></div>
        <div>
            <img class="mini" v-for="(img, index) in imgList" :key="index" :src="img.url" alt="london photos" @click="imgSelectIndex(index)">
        </div>
    </div>
</template>

<script>
export default {
  name: 'GalleryComp',
  data () {
    return {
      currentImgIndex: 0,
      imgList: [
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEU627EidELX_6W3dm2zbJM5xC_ljhkxAmvTPiZT94XA&s' },
        { url: 'https://www.travelandleisure.com/thmb/b-XuygNgIlxjrKtEk7U0cyzAmaI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-london-spring-WHENLONDON1123-8099cc5d66284a1ab22d919a373b4985.jpg' },
        { url: 'https://images.adsttc.com/media/images/649c/68fe/cb9c/4659/2908/3ff8/medium_jpg/london-architecture-city-guide-20-modern-and-contemporary-attractions-to-explore-in-uks-cultural-and-financial-powerhouse_7.jpg?1687972105' }
      ]
    }
  },
  methods: {
    imgSelectIndex (index) {
      this.currentImgIndex = index
    }
  },
  computed: {
    currentUrl () {
      return this.imgList[this.currentImgIndex].url
    }
  }
}
</script>

<style>
.mini{
    width: 200px;
}
.big{
    width: 400px;
}
</style>
