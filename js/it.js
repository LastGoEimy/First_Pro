    var cart = document.getElementById("cart");
    var cartList = document.getElementById("cartList");
        function over(){
            cartList.style.zIndex="-1px";
            cartList.style.display="block";
        }
    var i = 0;
    var doe = document.getElementById("test");
        function out(){
                var indenx = doe.selectedIndex;
            if( doe.options[indenx].text!="请选择版块"){
                cartList.style.zIndex="-999999px";
                cartList.style.display="none";
                //获取随机数 设置头像
                var sjTitle = Math.random()*4-0;
                var jsTitle1 = Math.floor(sjTitle);
                //创建li标签
                var ce = document.createElement("li");

                //创建img标签
                var imd = document.createElement("img");
                //设置图片
                imd.setAttribute("src",tou[jsTitle1]);
                imd.setAttribute("style","border-radius:50%;float:left;margin");
                ce.appendChild(imd);


                //插入li标签到ul子标签的最前面
                document.getElementById("NewDoc").insertBefore(ce,document.getElementById("NewDoc").firstElementChild);
                //把img标签插入到li标签里面
                ce.appendChild(imd);
                //创建h2标签
                var titleH1 = document.createElement("h2");
                titleH1.setAttribute("style","padding-left:110px");
                //获取h2标签得到值
                var title=document.getElementById("title").value;
                //把h2标签插入到li标签里面
                ce.appendChild(titleH1);

                //获取时间
                var dsa = new Date();
                var TimeDiff = dsa.getFullYear()+"-"+dsa.getMonth()+"-"+dsa.getDay()+" "+dsa.getHours()+":"+dsa.getMinutes();
                var bankuai = document.createElement("span");
                bankuai.setAttribute("style","  display: block;padding-left: 110px;margin-top: 40px;");
                bankuai.innerHTML="板块："+doe.options[indenx].text+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp发表时间："+TimeDiff;
                ce.appendChild(bankuai);

                //把得到的值 赋值给h2标签
                titleH1.innerHTML=title;
                i++;
                document.getElementById("title").value = "";
                doe.selectedIndex=0;
                document.getElementsByClassName("content")[0].value="";
            }else{
                alert("请选择所属板块");
            }

         }
    var tou = Array("tou01.jpg","tou02.jpg","tou03.jpg","tou04.jpg");


