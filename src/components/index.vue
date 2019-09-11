<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 15:32:03
 * @LastEditTime: 2019-09-11 09:43:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="choose-wrap">
    <ul>
      <li v-for="(item,i) in list" :key="item">
        <img :src="'{{item.image}}'" />
      </li>
    </ul>
  </div>
</template>

<script>
//import "../assets/css/layout/choose.css";
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          image: "../assets/images/1.jpg"
        },
        {
          image: "../assets/images/2.jpg"
        },
        {
          image: "../assets/images/3.jpg"
        },
        {
          image: "../assets/images/4.jpg"
        },
        {
          image: "../assets/images/5.jpg"
        },
        {
          image: "../assets/images/6.jpg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
