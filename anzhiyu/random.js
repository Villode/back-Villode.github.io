var posts=["2022/03/25/IDEA使用JSP用户登录案例/","2023/08/03/cloudflare_1.1.1.1/","2022/03/25/data_bl/","2024/04/18/hello-world/","2014/06/01/yun/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };