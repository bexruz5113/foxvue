<template>
    <div>
<b-container>
<b-row>
<b-col cols="12">
<b class="strong"> App <b class="text-primary">Price</b></b>
            <p class="m-auto pt-3 pb-5  font-weight-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit assumenda
              natus eum distinctio similique explicabo commodi veritatis? 
            </p>    
  </b-col>
<b-col cols="12" md="4" class="my-3 windows d-block">
        <div class="bgImage py-2">
        <h3 class="text-primary">Personal</h3>
       <div class="d-flex justify-content-center align-items-center"> <sub>$</sub><h1 class="font-weight-bold text-primary">30</h1></div>
        <p class="mx-auto text-primary">Pear year</p>
        </div>
        <div class="bgColor">
            <p>100 MB Disk Space</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Subdomains</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>5 Email Account</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Webmail Support</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Customer Support 24/7</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>


            <button type="button" class="button">Choose Plan</button>
        </div>
</b-col>
<b-col cols="12" md="4" class="my-3 windowsOffer d-block">
<div class="windowsOffer"><div class="offer">OFFER</div>
        <div class="bgImage py-2">
        <h3 class="text-primary">Business</h3>
       <div class="d-flex justify-content-center align-items-center"> <sub>$</sub><h1 class="font-weight-bold text-primary">50</h1></div>
        <p class="mx-auto text-primary">Pear year</p>
        </div>
        <div class="bgColor">
            <p>100 MB Disk Space</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Subdomains</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>5 Email Account</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Webmail Support</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Customer Support 24/7</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>


            <button type="button" class="button">Choose Plan</button>
        </div></div>
</b-col>
<b-col cols="12" md="4" class="my-3 windows d-block">
        <div class="bgImage py-2">
        <h3 class="text-primary">Interprise</h3>
       <div class="d-flex justify-content-center align-items-center"> <sub>$</sub><h1 class="font-weight-bold text-primary">80</h1></div>
        <p class="mx-auto text-primary">Pear year</p>
        </div>
        <div class="bgColor">
            <p>100 MB Disk Space</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Subdomains</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>5 Email Account</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Webmail Support</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>
            <p>Customer Support 24/7</p>
            <div style="width: 100%; height: 1px; background-color: lightgrey;"></div>


            <button type="button" class="button">Choose Plan</button>
        </div>
</b-col>
</b-row>
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
    box-sizing:border-box;
}
.strong{
    font-size: 58px;
    color: black;
}
p{
    color: black;
    margin-bottom: 0;
}
.bgImage{
    width: 100%;
    background-image: url('../assets/gray-bg.jpg');
    background-size: cover;
}
.bgColor{
    background-color: #21bbd3;
    p{
        color: white;
        margin: 0 auto;
        padding:15px 0;
        z-index: 1000;
    }
}
.windowsOffer{
    position: relative;
    overflow: hidden;
}

.offer{
    position: absolute;
    top: 20px;
    left: -60px;
    width: 200px;
    padding: 2px;
    color: white;
    z-index: 0;
    background-color: #21bbd3;
    transform: rotate(-45deg);
}
.windowsOffer:hover .button{
    background-color: yellow;
    color: white; 
}
.windows:hover .button{
    background-color: yellow;
    color: white;
}
.button{
    width: 200px;
    padding: 10px 20px;
    margin: 20px auto;
    background-color: #fff;
    color: #21bbd3;
    border-radius: 30px;
    border: 0;
    transition: all 0.5s ease;
}
@media screen and (max-width: 572px){
  .strong{
    font-size: 28px;
  }
}
</style>