<template>
  <div class="chartNum">
    <div class="name">Lucien</div>
    <div class="header">
      <div class="left">
        <ul class="li-left">
          <li class="val">博客园</li>
          <li class="val">首页</li>
          <li class="val">新随笔</li>
          <li class="val">联系</li>
          <li class="val">订阅</li>
          <li class="val">管理</li>
        </ul>
      </div>
      <div class="right">
        <ul class="li-right">
          <li class="val">随笔 - 23</li>
          <li class="val">文章 - 0</li>
          <li class="val">评论 - 104</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div id="ziliao">
          <div id="profile">昵称：<a href="/"> Lucien!</a></div>
          <div id="profile">园龄：<a href="/">  6年8个月</a></div>
          <div id="profile">粉丝：<a href="/"> 56</a></div>
          <div id="profile">关注：<a href="/"> 20</a></div>
          <div id="profile"><a href="/"> +加关注</a></div>
        </div>
        <div id="date">
          <table>
            <thead style="text-align: center">2020年8月
            </thead>
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
            <tr><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th><th>1</th></tr>
            <tr><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>
            <tr><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr>
            <tr><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th></tr>
            <tr><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th></tr>
            <tr><th>30</th><th>31</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
          </table>
        </div>
        <div id="sousuo">
          <div id="mulu">搜索</div>
          <div id="search">
            <input type="text" class="input_s"/>&nbsp;
            <input type="button" value="找找看" class="btn_s" />
          </div>
          <div id="search">
            <input type="text" class="input_s"/> &nbsp;
            <input type="button" value="谷歌搜索" class="btn_s" />
          </div>
        </div>
      </div>
      <div class="right">
        <div id="zhengwen"></div>
      </div>
    </div>

    <div class="footer">
      Copyright © 2020 Lucien!<br>
Powered by .NET Core on Kubernetes
    </div>
  </div>
</template>
<script>
//https://www.cnblogs.com/etoah/p/5115594.html#top
  export default {
  }
</script>
<style scoped lang='scss'>
.name {
  margin: 20px;
  font-weight:bold;
  font-size: 24px;
}
.header{
  background-color: cadetblue;
  height: 50px;
  .left{
    float:left;
    
    li{
      float: left;
      padding: 16px;
      color:white;
      cursor: pointer;
    }
  }
  .right{
    float: right;
    li{
      float: right;
      padding: 16px;
      color:rgb(202, 200, 200);
      font-size: 14px;
    }
  }
}
.content{
  background-color:rgb(218, 218, 218);
  padding: 20px;
  .left {
    width:250px;
    overflow: hidden;
    float: left;
  }
}

#ziliao {
  width: 250px;
  padding: 20px;
  font-size: 14px;
  background-color: white;
  box-shadow: 1px 1px 2px #a7a8ad;
  margin-bottom: 15px;
}
#date {
  width: 250px;
  padding: 10px;
  font-size: 10px;
  background-color: white;
  box-shadow: 1px 1px 2px #a7a8ad;
  margin-bottom: 15px;
}
#sousuo {
  width: 250px;
  background-color: white;
  margin-bottom: 15px;
  overflow: hidden;
}
#search {
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
#mulu {
  background: rgb(122, 168, 28);
  color:white;
  padding:10px;
  
}
.input_s{
  width: 120px;
  vertical-align: middle;
  height: 20px;;
}
.btn_s{
  vertical-align: middle;
}

#zhengwen{
  margin-left:270px;
  
  height: 1600px;
  background-color:white;
}
.footer{
  text-align: center;
}
  
</style>