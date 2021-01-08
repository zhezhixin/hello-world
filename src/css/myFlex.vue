<template>
  <div class="myflex">

    <div class="div1">
        <p>flex nuovo</p>
        <div class="flex">
            <div>uno</div>
            <div>duo</div>
            <div>tre</div>
        </div>
    </div>

    <div class="shengbei">
       <header>header</header>
       <div id="main">
           <nav>nav</nav>
           <article>article</article>
           <aside>aside</aside>
       </div>
        <footer>footer</footer>
    </div>
    <div>
        <img src="../../static/img/test2.png" />
    </div>

  </div>
</template>

<script>
//https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex {
    width: 350px;
    height: 200px;
    border: 1px solid #555;
    font:14px Arial;

    display:-webkit-flex;
    -webkit-flex-direction:row;

    display: flex;
    flex-direction: row;
}
.flex > div {
    -webkit-flex:1 1 auto; //flex-base:auto flex-grow:1 flex-shrink:1 默认值是 0,1, auto,0 即为不应用不参与收缩
    flex: 1 1 auto;
    width: 30px;
    
    -webkit-transition: width 0.7s ease-out;
    transition:width 0.7s ease-out;
}

.flex > div:nth-child(1) {
    background: #009246;
    flex: 1 1 auto;
}  
.flex > div:nth-child(2) {
    background: #F1F2F1;
    flex: 1 1 auto;
}
.flex > div:nth-child(3) {
    background: #633e52;
    flex: 2 1 auto;
}

.flex > div:hover {
    width: 200px
}

.shengbei {
    font: 24px Helvetica;
    background: #999;
    padding: 5px;
}

#main {
    min-height: 800px;
    margin: 0px;
    padding: 0px;
    display: -webkit-flex;
    display:         flex;
    -webkit-flex-flow: row;
            flex-flow: row;
}

#main > article {
    margin: 4px;
    padding: 5px;
    border: 1px solid #cc3;
    border-radius: 7pt;
    background: #dd8;
    -webkit-flex: 3 1 60%;
    flex: 3 1 60%;
    -webkit-order: 2;
    order: 2
}

#main > nav {
    margin: 4px;
    padding: 5px;
    border: 1px solid #88b;
    border-radius: 7pt;
    background: #ccf;
    -webkit-flex: 1 6 20%;
    flex: 1 6 20%;
    -webkit-order: 1;
    order: 1;
}

#main > aside {
    margin: 4px;
    padding: 5px;
    border: 1px solid #88b;
    border-radius: 7pt;
    background: #ccf;
    -webkit-flex: 1 6 20%;
    flex: 1 6 20%;
    -webkit-order: 3;
    order: 3;   
}

header, footer {
    display: block;
    margin: 4px;
    padding: 5px;
    min-height: 100px;
    border: 1px solid #eb5;
    border-radius: 7pt;
    background: #feb;
}

@media all and (max-width: 640px) {

    #main, #page {
        -webkit-flex-flow: column;
        flex-flow: column nowrap;
    }

    #main > article, 
    #main > nav, 
    #main > aside {
        -webkit-order: 0;
        order:0
    }
    #main > nav, 
    #main > aside, 
    header, 
    footer {
        min-height: 50px;
        max-height: 50px;
   }
}
</style>
