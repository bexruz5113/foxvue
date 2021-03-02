<template>
    <div>
    <b-container fluid class="bgImage py-5">
    <b-container>
    <b-row>
    <b-col cols="12" class="w-100 p-3 my-5 bg-white rounded-pill border">
        <b-row class="d-flex justify-content-center">
    
            <b-col cols="12" md="9"><input class="mx-auto mb-md-0 mb-3"  type="text" placeholder="Enter Your Email"></b-col>
            <b-col cols="12" md="3"><button class="mx-auto" type="submit">Subscribe</button></b-col>
   
        </b-row>
    </b-col>

    <b-col cols="12" lg="3" md="6" class="my-3" >
    <div class="w-25 mx-0"><img src="../assets/fox-logo.png"></div><br>
    <p class="text-white w-100 text-left">Sed pottitor lects nibh. Viamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet.</p>
    </b-col>
    <b-col cols="12" lg="3" md="6" class="d-block">
    <div class="mt-4"><h3 class="text-white">Quick Links</h3></div>
    <div class="mb-3 mt-4 text-left ml-5"><router-link to="/home" class="text-white" >Home</router-link></div>
    <div class="my-3 text-left ml-5"><router-link to="/about" class="text-white" >About Us</router-link></div>
    <div class="my-3 text-left ml-5"><router-link to="/course" class="text-white" >Services</router-link></div>
    <div class="my-3 text-left ml-5"><router-link to="/back" class="text-white" >Products</router-link></div>
    </b-col>
    <b-col cols="12" lg="3" md="6" class="d-block">
    <div class="mt-4"><h3 class="text-white">Social Media</h3></div>
    <div class="mb-3 mt-4 text-left ml-5"><a class="text-white" href="#">Facebook</a></div>
    <div class="my-3 text-left ml-5"><a class="text-white" href="#">Instagram</a></div>
    <div class="my-3 text-left ml-5"><a class="text-white" href="#">Linkedln</a></div>
    <div class="my-3 text-left ml-5"><a class="text-white" href="#">Twitter</a></div>
    </b-col>
    <b-col cols="12" lg="3" md="6" class="d-block">
    <div class="mt-4"><h3 class="text-white">Quick Contact</h3></div>
    <div class="mb-3 mt-4 text-left ml-5"><small class="w-100 text-white">Phone : +2 012 345 6789</small></div>
    <div class="my-3 text-left ml-5"><small class="w-100 text-white">Email : info@yourcompany.com</small></div>
    <div class="my-3 text-left ml-5"><small class="w-100 text-white">Address : 8 Green Tower, Street</small></div>
    <div class="my-3 text-left ml-5"><small class="w-100 text-white">Name New York City, USA</small></div>
    </b-col>
    <b-container  fluid class="bgcolor">
    <b-container class="container1">
    <b-row>
    <b-col cols="12" md="6" class="text-left"><p class="mb-0 text-white">All rights reserved © <a class="aLink" href="#"> MK </a>, 2020</p></b-col>
    <b-col cols="12" md="6" class="text-right">
    <a href="#" class="aLink mr-3">Terms and Conditions</a>
    <a href="#" class="aLink ">Privacy Policy</a>
    </b-col>
    </b-row>
    </b-container>
    </b-container>
    </b-row>
    </b-container>
    </b-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
a{
    text-decoration: none;
}
.bgImage{
    background-image: url('../assets/footer-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}
input{
    width: 100%;
    padding: 15px;
    background-color: rgba(235, 231, 231, 0.589);
    outline: none;
    border: none;
    border-radius: 25px;
}
button {
  width: 100%;
  padding: 15px;
  background-color: #21bbd3;
  border: 1px solid white;
  outline: none;
  color: white;
  border-radius: 25px;
  transition: all 0.5s ease;
}
button:hover {
  background-color: gold;
}
.container1{
    padding:25px 0;
}
@media screen and (max-width: 768px){
input{
    width: 75%;
}
button{
    width: 75%;
}
.container1{
    padding: 15px 0;
}
}
p{
    line-height: 1.7;
}
.bgcolor{
    width: 100%;
    background-color: rgba(8, 8, 8, 0.407);
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid white;
}
.aLink{
    color: #21bbd3;
    text-decoration: none;
    transition: all 0.5s ease;
}
.aLink:hover{
    color: orange;
}

@media screen and (max-width: 460px){
.container{
    padding: 5px 0;
}
p{
    font-size: 14px;
}
}
</style>