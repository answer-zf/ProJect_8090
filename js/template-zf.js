var headercontent = {
    template: `  <header class="header">
  <div class="container-zf">
    <div class="logo">
      <a href="#">
        <img src="./images/logo.png"
             alt="8090餐饮加盟logo">
      </a>
    </div>
    <div class="slogan">
      <img src="./images/slogan.png"
           alt="">
    </div>
    <div class="search">
      <div class="searchMin">
        <input class="rounded-pill"
               id="search-input"
               type="text">
        <span class="iconfont icon-xiazai5 search-icon color"></span>
        <div class="search-btn"
             id="search-btn"
             onclick="searchHandle()">搜索</div>
      </div>
      <p>热门搜索：
        <a href="#"
           target="_blank">尚品宫</a>
        <a href="#"
           target="_blank">尚品宫</a>
        <a href="#"
           target="_blank">尚品宫</a>
        <a href="#"
           target="_blank">尚品宫</a>
      </p>
    </div>
    <div class="miniSlide">
      <div class="carousel slide"
           data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active"
               data-interval="4000">
            <a href="#">
              <img src="./images/text.jpg"
                   class="d-block"
                   alt="">
            </a>

          </div>
          <div class="carousel-item"
               data-interval="4000">
            <a href="#">
              <img src="./images/text.jpg"
                   class="d-block"
                   alt="">
            </a>
          </div>
          <div class="carousel-item"
               data-interval="4000">
            <a href="#">
              <img src="./images/text.jpg"
                   class="d-block"
                   alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>`,
}
var navcontent = {
    template: `<nav class="nav nav-zf" id="nav-zf">
    <div class="container-zf">
      <a class="nav-link" id="index" href="./index.html" target="_blank">首页</a>
      <a class="nav-link" id="brand" href="./brand.html" target="_blank">品牌查询</a>
      <a class="nav-link" id="programlist" href="./programlist.html" target="_blank">项目大全</a>
      <a class="nav-link" id="leaderboard" href="./leaderboard.html" target="_blank">排行榜</a>
      <a class="nav-link" id="newsinfo" href="./newsinfo.html" target="_blank">新闻资讯</a>
      <a class="nav-link" id="joininfo" href="./joininfo.html" target="_blank">加盟聚焦</a>
      <a class="nav-link" id="entstory" href="./entstory.html" target="_blank">创业故事</a>
      <a class="nav-link navSpecialColor" id="settle" href="./settle.html" target="_blank">品牌入驻</a>
    </div>
  </nav>`,
}

var footercontent = {
    template: `  <footer class="footer-zf" style="min-width: 1200px;">
  <div class="footer-header">
    <div class="container-zf">
      <div class="brand">
        <img src="./images/footerHeader.png"
             alt="">
      </div>
    </div>
  </div>
  <div class="footer-copy">
    <div class="container-zf">
      <ul>
        <li><a href="#"
             target="_blank">首页</a></li>
        <li><a href="./brand.html"
             target="_blank">品牌查询</a></li>
        <li><a href="./programlist.html"
             target="_blank">项目大全</a></li>
        <li><a href="./leaderboard.html"
             target="_blank">排行榜</a></li>
        <li><a href="./newsinfo.html"
             target="_blank">新闻资讯</a></li>
        <li><a href="./joininfo.html"
             target="_blank">加盟资讯</a></li>
        <li><a href="./entstory.html"
             target="_blank">创业故事</a></li>
        <li><a class="navSpecialColor"
             href="./settle.html"
             target="_blank">品牌入驻</a></li>
      </ul>
      <div class="copyright">
        <div>
          <div style="margin-bottom: -4px;">
            <span>安徽尚京文化传媒股份有限公司版权所有</span>
            <a href="#">备案号：111111111111</a>
          </div>
          <span>创业有风险 选择需谨慎</span>
        </div>
        <div class="prove">
          <div class="gbicp">
            <a href="#"
               target="_blank"><img src="./images/ft_02.gif"></a>
            <a href="#"
               target="_blank"><img src="./images/fcx.png"></a>
            <a href="#"
               target="_blank"><img src="./images/qyzz.png"></a>
            <img src="./images/ft_03.gif">
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>`,
}

new Vue({
    el: '#header-vue',
    components: { headercontent, navcontent },
})
new Vue({
    el: '#footer-vue',
    components: { footercontent },
})
