
  // 修改展开或关闭
  document.getElementById("path2").style.display = "none";
  document.getElementById("detail").onclick = function() {

    button = document.getElementById('detail')
    path1 = document.getElementById('path1')
    path2 = document.getElementById('path2')

    if(button.className.includes('active')) {
      document.getElementById("register").style.display = "block";
      document.getElementById("path1").style.display = "none";
      document.getElementById("path2").style.display = "block";
      button.className = button.className.replace(/opendetail active/, 'opendetail')
      
    } else {
      document.getElementById("register").style.display = "none";
      document.getElementById("path2").style.display = "none";
      document.getElementById("path1").style.display = "block";
      button.className = button.className.replace(/opendetail/, 'opendetail active')
    }
    
    if(button.className.includes('active')) {
      button.innerHTML = "展开大赛详情"
    } else {
      button.innerHTML = "收起大赛详情"
    }
    
  }
  // 修改背景图大小 以及 以图改运行
  let wid  = (document.body.clientWidth);

  (function (doc, win) {

    tree = document.getElementById('tree')
    fire = document.getElementById('fire')
    path1 = document.getElementById('path1')
    path2 = document.getElementById('path2')
    join = document.getElementById('joinP')

    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        let wid = document.body.clientWidth
        if (wid >= 960) {
          document.getElementById("fire").style.display = "block";
          document.getElementById("tree").style.display = "block";
          document.getElementById("banner").innerHTML = ('<img src="images/pcBg.png" >')
          document.getElementById("joinP").style.display = "none";
        } else {
          document.getElementById("fire").style.display = "none";
          document.getElementById("tree").style.display = "none";
          document.getElementById("path1").style.display = "none";
          document.getElementById("path2").style.display = "none";
          document.getElementById("banner").innerHTML = ('<img src="images/bg.png" >')
          document.getElementById("joinP").style.display = "block";
          document.getElementById("joinP").innerHTML = ('<img src="images/join.png" class="uploadVideo">')
        }
      };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
  })(document, window);
  window.sessionStorage.removeItem('videoID')
   if (window.sessionStorage.getItem('scroll')) {
      $('body').scrollTop(window.sessionStorage.getItem('scroll'))
      window.sessionStorage.removeItem('scroll')
   }

    // 弹窗 改变

    function showCon(){
      $(".tipBox").show();	
    }
    function closeCon(){
      $(".tipBox").hide();	
    }

    function showCon2(){
      $(".joinBox").show();	
    }
    function closeCon2(){
      $(".joinBox").hide();	
    }
    function showCon3(){
      $(".previewBox").show();	
    }
    function closeCon3(){
      $(".previewBox").hide();	
    }