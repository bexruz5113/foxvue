<template>
    <div id="sectionTeam">
<b-container fluid="100%" class="bgImage">
<b-container>
<b-row>
<b-col cols="12">
          <b class="strong"> Our <b class="text-primary">Team</b></b>
            <p class="m-auto pt-3 pb-5  font-weight-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
              natus eum distinctio similique explicabo commodi veritatis? Nemo
              minima non aspernatur laudantium iste.
            </p>
</b-col>
<b-col cols="12" md="3" class="windows p-3">
<div class="bg-white bg-white  border p-2">
<div class="d-flex justify-content-center align-items-center"><div class="winCircle1 my-3"></div></div>
<div><h4 class="textPrimary">Nappi</h4></div>
<div><h6 class="pb-3">Frontend developer</h6></div>
<div><p class="w-75 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugit minima quis!</p></div>
<div class="iconHover">
<div><img src="../assets/facebook.png" width="20" alt=""></div>
<div><img src="../assets/twitter.png" width="20" alt=""></div>
<div><img src="../assets/instagram.png" width="20" alt=""></div>
<div><img src="../assets/linkedin.png" width="20" alt=""></div>
</div>
</div>
</b-col>
<b-col cols="12" md="3" class="windows p-3">
<div class="bg-white bg-white  border p-2">
<div class="d-flex justify-content-center align-items-center"><div class="winCircle2 my-3"></div></div>
<div><h4 class="textPrimary">Baxronov Bexruz</h4></div>
<div><h6 class="pb-3">Frontend developer</h6></div>
<div><p class="w-75 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugit minima quis!</p></div>
<div class="iconHover">
<div><img src="../assets/facebook.png" width="20" alt=""></div>
<div><img src="../assets/twitter.png" width="20" alt=""></div>
<div><img src="../assets/instagram.png" width="20" alt=""></div>
<div><img src="../assets/linkedin.png" width="20" alt=""></div>
</div></div>
</b-col>
<b-col cols="12" md="3" class="windows p-3">
<div class="bg-white bg-white  border p-2">
<div class="d-flex justify-content-center align-items-center"><div class="winCircle3 my-3"></div></div>
<div><h4 class="textPrimary">Miss Aziza</h4></div>
<div><h6 class="pb-3">Frontend developer</h6></div>
<div><p class="w-75 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugit minima quis!</p></div>
<div class="iconHover">
<div><img src="../assets/facebook.png" width="20" alt=""></div>
<div><img src="../assets/twitter.png" width="20" alt=""></div>
<div><img src="../assets/instagram.png" width="20" alt=""></div>
<div><img src="../assets/linkedin.png" width="20" alt=""></div>
</div>
</div>
</b-col>
<b-col cols="12" md="3" class="windows p-3">
<div class="bg-white bg-white  border p-2">
<div class="d-flex justify-content-center align-items-center"><div class="winCircle4 my-3"></div></div>
<div><h4 class="textPrimary">Mr Ruslan</h4></div>
<div><h6 class="pb-3">Frontend developer</h6></div>
<div><p class="w-75 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugit minima quis!</p></div>
<div class="iconHover">
<div><img src="../assets/facebook.png" width="20" alt=""></div>
<div><img src="../assets/twitter.png" width="20" alt=""></div>
<div><img src="../assets/instagram.png" width="20" alt=""></div>
<div><img src="../assets/linkedin.png" width="20" alt=""></div>
</div></div>
</b-col>


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
padding: 0;
margin: 0;
box-sizing: border-box;
}
.bgImage{
padding: 50px;
background-image: url("../assets/gray-bg.jpg");
background-attachment: fixed;
}
.strong{
font-size: 58px;
color: black;}
p{color:black;}

.winCircle1{
width: 100px;
height:100px;
border-radius: 100%;
background-image: url('../assets/team-1.jpg');
background-size: cover;
background-position: center center;
}
.iconHover{
display:none;
justify-content: space-around;
align-items: center;
padding: 10px;
animation: slide 1s forwards;
}
.windows{
transition: all 2s ease;
animation: slide 1s forwards;
}
 .textPrimary{color:#007bff;}
.windows:hover .textPrimary{
color:orange;
}
.windows:hover .iconHover{
display: flex;
justify-content: space-around;
align-items: center;
}
@keyframes slide {
from{ transform: translateY(-10px); }
to{transform: translateY(0)}
    
}

.winCircle2{
width: 100px;
height:100px;
border-radius: 100%;
background-image: url('../assets/team-2.jpg');
background-size: cover;
background-position: center center;
}
.winCircle3{
width: 100px;
height:100px;
border-radius: 100%;
background-image: url('../assets/team-3.jpg');
background-size: cover;
background-position: center center;
}
.winCircle4{
width: 100px;
height:100px;
border-radius: 100%;
background-image: url('../assets/team-4.jpg');
background-size: cover;
background-position: center center;
}
</style>