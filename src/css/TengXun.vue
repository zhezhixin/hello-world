<template>
    <!-- <div style="color:white"> -->
    <div>
      <!-- <video width="100%" id="video" autoplay loop preload muted x-webkit-airplay="true" airplay="allow" webkit-playsinline="true" playsinline="true" src="../../static/video/index-video.mp4" class="video1 video"></video> -->
      <video width="100%" id="v1" autoplay loop muted>
          <source src="../../static/video/index-video.mp4" type="video/mp4" />
      </video>
      <h1 style="color:white">Test</h1>
      <!-- <div class="banner_txt animation">
        <div class="txtbox">
          <p class="ltxt">连接</p>
          <p class="rtxt">共生未来</p>
        </div>
        <div class="hook_area animation1 animation2 animation3 animation4">
          <i class="word word_1">你我</i>
          <i class="word word_2">企业</i>
          <i class="word word_3">科技</i>
          <i class="word word_4">公益</i>
        </div>
      </div>
      <div class="slide_tips">
        <i class="s_line"></i>
        <span class="txt">滑动</span>
      </div>
      <div class="banner_bg"></div> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
video{  
    position: fixed;  
    right: 0px;  
    bottom: 0px;  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;  
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/ 
    /*filter:grayscale(100%); //背景灰度设置*/ 
    z-index:-11
}  
source{  
    min-width: 100%;  
    min-height: 100%;  
    height: auto;  
    width: auto;  
}
/*banner*/
.banner_area {
    display: block;
    height: 780px;
    width: 100%;
    position: relative;
    margin-top: -72px;
    overflow: hidden;
}

.banner_bg {
    display: block;
    height: 780px;
    width: 100%;
    background: #000;
    background-size: cover;
    position: absolute;
    left: 0px;
    top: 0px;
}

.banner_txt {
    display: block;
    width: 640px;
    height: 81px;
    position: absolute;
    left: 50%;
    top: 45%;
    z-index: 2;
    text-align: center;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    font-family: 'TencentSansw3';
    letter-spacing: 18px;
}

.banner_txt .hook_area {
    display: block;
    height: 100px;
    width: 150px;
    position: absolute;
    left: 157px;
    top: -9px;
    overflow: hidden;
    /* -webkit-mask: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,1) 30%,rgba(0,0,0,1) 70%,rgba(0,0,0,0)); */
}

.banner_txt .txt {
    display: none;
}

.banner_txt .hook_area .word {
    display: block;
    height: 81px;
    min-width: 160px;
    position: absolute;
    left: 0px;
    top: 9px;
    color: #fff;
    font-size: 54px;
    font-style: normal;
    text-align: left;
}

.banner_txt .txtbox {
    display: inline-table;
}

.banner_txt .txtbox p {
    display: inline-block;
    color: #fff;
    font-size: 54px;
}

.banner_txt .txtbox .ltxt {
    margin-right: 180px;
}

.en-us .banner_txt {
    width: 440px;
    height: 150px;
    letter-spacing: 0;
    top: 38%;
}

.en-us .banner_txt .txtbox p {
    font-size: 48px;
    line-height: auto;
}

.en-us .banner_txt .hook_area .word {
    height: 70px;
}

.en-us .banner_txt .hook_area {
    min-width: 600px;
    height: 90px;
    top: -14px;
    left: 275px;
    text-align: left;
}

.slide_tips {
    display: block;
    width: 30px;
    height: 57px;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    bottom: 62px;
    z-index: 2;
}

.slide_tips .s_line {
    display: block;
    width: 2px;
    height: 32px;
    border-radius: 2px;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 0px;
    background: #fff;
}

.slide_tips .txt {
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    bottom: 0px;
    font-size: 12px;
    letter-spacing: 2px;
}

.en-us .slide_tips .txt {
    left: -6px;
}

.slide_tips .s_line {
    animation: a_banner_s_line 3s 0.3s linear both infinite;
    -webkit-animation: a_banner_s_line 3s 0.3s linear both infinite;
    -ms-animation: a_banner_s_line 3s 0.3s linear both infinite;
    -moz-animation: a_banner_s_line 3s 0.3s linear both infinite;
    -o-animation: a_banner_s_line 3s 0.3s linear both infinite;
}

.banner_txt .hook_area > i {
    opacity: 0;
}

/* .banner_txt .hook_area .word_2{ -webkit-animation: a_banner_word_2 9s linear 0.7s both infinite;}
.banner_txt .hook_area .word_3{ -webkit-animation: a_banner_word_2 9s linear 2.7s both infinite;}
.banner_txt .hook_area .word_4{ -webkit-animation: a_banner_word_2 9s linear 4.7s both infinite;} */
.banner_txt {
    opacity: 0;
}

.banner_txt.animation {
    animation: a_banner 0.5s 0.5s linear forwards;
    -webkit-animation: a_banner 0.5s 0.5s linear forwards;
    -ms-animation: a_banner 0.5s 0.5s linear forwards;
    -moz-animation: a_banner 0.5s 0.5s linear forwards;
    -o-animation: a_banner 0.5s 0.5s linear forwards;
}

.banner_txt .hook_area .word_1 {
    opacity: 1;
}

.banner_txt .hook_area.animation1 .word_1 {
    animation: a_banner_start 0.2s linear forwards;
    -webkit-animation: a_banner_start 0.2s linear forwards;
    -ms-animation: a_banner_start 0.2s linear forwards;
    -moz-animation: a_banner_start 0.2s linear forwards;
    -moz-animation: a_banner_start 0.2s linear forwards;
    -o-animation: a_banner_start 0.2s linear forwards;
}

.banner_txt .hook_area.animation2 .word_1 {
    animation: a_banner_end 0.2s linear forwards;
    -webkit-animation: a_banner_end 0.2s linear forwards;
    -ms-animation: a_banner_end 0.2s linear forwards;
    -moz-animation: a_banner_end 0.2s linear forwards;
    -o-animation: a_banner_end 0.2s linear forwards;
}

.banner_txt .hook_area.animation2 .word_2 {
    animation: a_banner_start 0.2s linear forwards;
    -webkit-animation: a_banner_start 0.2s linear forwards;
    -ms-animation: a_banner_start 0.2s linear forwards;
    -moz-animation: a_banner_start 0.2s linear forwards;
    -o-animation: a_banner_start 0.2s linear forwards;
}

.banner_txt .hook_area.animation3 .word_2 {
    animation: a_banner_end 0.2s linear forwards;
    -webkit-animation: a_banner_end 0.2s linear forwards;
    -ms-animation: a_banner_end 0.2s linear forwards;
    -moz-animation: a_banner_end 0.2s linear forwards;
    -o-animation: a_banner_end 0.2s linear forwards;
}

.banner_txt .hook_area.animation3 .word_3 {
    animation: a_banner_start 0.2s linear forwards;
    -webkit-animation: a_banner_start 0.2s linear forwards;
    -ms-animation: a_banner_start 0.2s linear forwards;
    -moz-animation: a_banner_start 0.2s linear forwards;
    -o-animation: a_banner_start 0.2s linear forwards;
}

.banner_txt .hook_area.animation4 .word_3 {
    animation: a_banner_end 0.2s linear forwards;
    -webkit-animation: a_banner_end 0.2s linear forwards;
    -ms-animation: a_banner_end 0.2s linear forwards;
    -moz-animation: a_banner_end 0.2s linear forwards;
    -o-animation: a_banner_end 0.2s linear forwards;
}

.banner_txt .hook_area.animation4 .word_4 {
    animation: a_banner_start 0.2s linear forwards;
    -webkit-animation: a_banner_start 0.2s linear forwards;
    -ms-animation: a_banner_start 0.2s linear forwards;
    -moz-animation: a_banner_start 0.2s linear forwards;
    -o-animation: a_banner_start 0.2s linear forwards;
}

@keyframes a_banner {
    0% {
        transform: translate(-50%,20px);
        -webkit-transform: translate(-50%,20px);
        -ms-transform: translate(-50%,20px);
        -moz-transform: translate(-50%,20px);
        -o-transform: translate(-50%,20px);
        opacity: 0;
    }

    100% {
        transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        opacity: 1;
    }
}

@-webkit-keyframes a_banner {
    0% {
        transform: translate(-50%,20px);
        -webkit-transform: translate(-50%,20px);
        -ms-transform: translate(-50%,20px);
        -moz-transform: translate(-50%,20px);
        -o-transform: translate(-50%,20px);
        opacity: 0;
    }

    100% {
        transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        opacity: 1;
    }
}

@-ms-keyframes a_banner {
    0% {
        transform: translate(-50%,20px);
        -webkit-transform: translate(-50%,20px);
        -ms-transform: translate(-50%,20px);
        -moz-transform: translate(-50%,20px);
        -o-transform: translate(-50%,20px);
        opacity: 0;
    }

    100% {
        transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        opacity: 1;
    }
}

@-moz-keyframes a_banner {
    0% {
        transform: translate(-50%,20px);
        -webkit-transform: translate(-50%,20px);
        -ms-transform: translate(-50%,20px);
        -moz-transform: translate(-50%,20px);
        -o-transform: translate(-50%,20px);
        opacity: 0;
    }

    100% {
        transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        opacity: 1;
    }
}

@-o-keyframes a_banner {
    0% {
        transform: translate(-50%,20px);
        -webkit-transform: translate(-50%,20px);
        -ms-transform: translate(-50%,20px);
        -moz-transform: translate(-50%,20px);
        -o-transform: translate(-50%,20px);
        opacity: 0;
    }

    100% {
        transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        opacity: 1;
    }
}

@keyframes a_banner_start {
    0% {
        transform: translate(0,88px);
        -webkit-transform: translate(0,88px);
        -ms-transform: translate(0,88px);
        -moz-transform: translate(0,88px);
        -o-transform: translate(0,88px);
        opacity: 1;
    }

    100% {
        transform: translate(0,0);
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        -moz-transform: translate(0,0);
        -o-transform: translate(0,0);
        opacity: 1;
    }
}

@-webkit-keyframes a_banner_start {
    0% {
        transform: translate(0,88px);
        -webkit-transform: translate(0,88px);
        -ms-transform: translate(0,88px);
        -moz-transform: translate(0,88px);
        -o-transform: translate(0,88px);
        opacity: 1;
    }

    100% {
        transform: translate(0,0);
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        -moz-transform: translate(0,0);
        -o-transform: translate(0,0);
        opacity: 1;
    }
}

@-ms-keyframes a_banner_start {
    0% {
        transform: translate(0,88px);
        -webkit-transform: translate(0,88px);
        -ms-transform: translate(0,88px);
        -moz-transform: translate(0,88px);
        -o-transform: translate(0,88px);
        opacity: 1;
    }

    100% {
        transform: translate(0,0);
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        -moz-transform: translate(0,0);
        -o-transform: translate(0,0);
        opacity: 1;
    }
}

@-moz-keyframes a_banner_start {
    0% {
        transform: translate(0,88px);
        -webkit-transform: translate(0,88px);
        -ms-transform: translate(0,88px);
        -moz-transform: translate(0,88px);
        -o-transform: translate(0,88px);
        opacity: 1;
    }

    100% {
        transform: translate(0,0);
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        -moz-transform: translate(0,0);
        -o-transform: translate(0,0);
        opacity: 1;
    }
}

@-o-keyframes a_banner_start {
    0% {
        transform: translate(0,88px);
        -webkit-transform: translate(0,88px);
        -ms-transform: translate(0,88px);
        -moz-transform: translate(0,88px);
        -o-transform: translate(0,88px);
        opacity: 1;
    }

    100% {
        transform: translate(0,0);
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        -moz-transform: translate(0,0);
        -o-transform: translate(0,0);
        opacity: 1;
    }
}

@keyframes a_banner_end {
    0% {
        transform: translate(0,0px);
        -webkit-transform: translate(0,0px);
        -ms-transform: translate(0,0px);
        -moz-transform: translate(0,0px);
        -o-transform: translate(0,0px);
        opacity: 1;
    }

    100% {
        transform: translate(0,-88px);
        -webkit-transform: translate(0,-88px);
        -ms-transform: translate(0,-88px);
        -moz-transform: translate(0,-88px);
        -o-transform: translate(0,-88px);
        opacity: 1;
    }
}

@-webkit-keyframes a_banner_end {
    0% {
        transform: translate(0,0px);
        -webkit-transform: translate(0,0px);
        -ms-transform: translate(0,0px);
        -moz-transform: translate(0,0px);
        -o-transform: translate(0,0px);
        opacity: 1;
    }

    100% {
        transform: translate(0,-88px);
        -webkit-transform: translate(0,-88px);
        -ms-transform: translate(0,-88px);
        -moz-transform: translate(0,-88px);
        -o-transform: translate(0,-88px);
        opacity: 1;
    }
}

@-ms-keyframes a_banner_end {
    0% {
        transform: translate(0,0px);
        -webkit-transform: translate(0,0px);
        -ms-transform: translate(0,0px);
        -moz-transform: translate(0,0px);
        -o-transform: translate(0,0px);
        opacity: 1;
    }

    100% {
        transform: translate(0,-88px);
        -webkit-transform: translate(0,-88px);
        -ms-transform: translate(0,-88px);
        -moz-transform: translate(0,-88px);
        -o-transform: translate(0,-88px);
        opacity: 1;
    }
}

@-moz-keyframes a_banner_end {
    0% {
        transform: translate(0,0px);
        -webkit-transform: translate(0,0px);
        -ms-transform: translate(0,0px);
        -moz-transform: translate(0,0px);
        -o-transform: translate(0,0px);
        opacity: 1;
    }

    100% {
        transform: translate(0,-88px);
        -webkit-transform: translate(0,-88px);
        -ms-transform: translate(0,-88px);
        -moz-transform: translate(0,-88px);
        -o-transform: translate(0,-88px);
        opacity: 1;
    }
}

@-o-keyframes a_banner_end {
    0% {
        transform: translate(0,0px);
        -webkit-transform: translate(0,0px);
        -ms-transform: translate(0,0px);
        -moz-transform: translate(0,0px);
        -o-transform: translate(0,0px);
        opacity: 1;
    }

    100% {
        transform: translate(0,-88px);
        -webkit-transform: translate(0,-88px);
        -ms-transform: translate(0,-88px);
        -moz-transform: translate(0,-88px);
        -o-transform: translate(0,-88px);
        opacity: 1;
    }
}

@keyframes a_banner_s_line {
    0% {
        transform: scale(1,1);
        -webkit-transform: scale(1,1);
        -ms-transform: scale(1,1);
        -moz-transform: scale(1,1);
        -o-transform: scale(1,1);
        transform-origin: 50% 100%;
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        -moz-transform-origin: 50% 100%;
        -o-transform-origin: 50% 100%;
        opacity: 1;
    }

    20% {
        transform: scale(1,0.01);
        -webkit-transform: scale(1,0.01);
        -ms-transform: scale(1,0.01);
        -moz-transform: scale(1,0.01);
        -o-transform: scale(1,0.01);
        transform-origin: 50% 100%;
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        -moz-transform-origin: 50% 100%;
        -o-transform-origin: 50% 100%;
        opacity: 1;
    }

    30% {
        transform: scale(1,0.01);
        -webkit-transform: scale(1,0.01);
        -ms-transform: scale(1,0.01);
        -moz-transform: scale(1,0.01);
        -o-transform: scale(1,0.01);
        transform-origin: 50% 100%;
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        -moz-transform-origin: 50% 100%;
        -o-transform-origin: 50% 100%;
        opacity: 0;
    }

    31% {
        transform: scale(1,0.01);
        -webkit-transform: scale(1,0.01);
        -ms-transform: scale(1,0.01);
        -moz-transform: scale(1,0.01);
        -o-transform: scale(1,0.01);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
        -ms-transform-origin: 50% 0;
        -moz-transform-origin: 50% 0;
        -o-transform-origin: 50% 0;
        opacity: 0;
    }

    50% {
        transform: scale(1,1);
        -webkit-transform: scale(1,1);
        -ms-transform: scale(1,1);
        -moz-transform: scale(1,1);
        -o-transform: scale(1,1);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
        -ms-transform-origin: 50% 0;
        -moz-transform-origin: 50% 0;
        -o-transform-origin: 50% 0;
        opacity: 1;
    }

    100% {
        transform: scale(1,1);
        -webkit-transform: scale(1,1);
        -ms-transform: scale(1,1);
        -moz-transform: scale(1,1);
        -o-transform: scale(1,1);
        transform-origin: 50% 100%;
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        -moz-transform-origin: 50% 100%;
        -o-transform-origin: 50% 100%;
        opacity: 1;
    }
}

@keyframes a_banner_word {
    0% {
        -webkit-transform: translate(0,0);
        opacity: 1;
    }

    12.5% {
        -webkit-transform: translate(0,0);
        opacity: 1;
    }

    25% {
        -webkit-transform: translate(0,-70px);
        opacity: 0;
    }

    25.01% {
        -webkit-transform: translate(0,-70px);
        opacity: 0;
    }

    25.02% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }

    50% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }

    87.5% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translate(0,0);
        opacity: 1;
    }
}

@keyframes a_banner_word_2 {
    0% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }

    12.5% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }

    25% {
        -webkit-transform: translate(0,0px);
        opacity: 1;
    }

    37.5% {
        -webkit-transform: translate(0,0px);
        opacity: 1;
    }

    50% {
        -webkit-transform: translate(0,-70px);
        opacity: 0;
    }

    50.01% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translate(0,70px);
        opacity: 0;
    }
}
</style>