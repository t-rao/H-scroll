# H-scroll

It a very simple code to do the horzontal scroll from left to right. 
<pre>
          &lt;header&gt;<br />
            &lt;nav&gt;<br />
              &lt;ul&gt;<br />
                &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;<br />
                &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;<br />
                &lt;li&gt;&lt;a href="#skills"&gt;Skills&lt;/a&gt;&lt;/li&gt;<br />
                &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;<br />
              &lt;/ul&gt;<br />
            &lt;/nav&gt;<br />
          &lt;/header&gt;
</pre>
Site content sections  
<pre>
        &lt;article class="wraper"&gt;<br />
          &lt;section id="home" class="panel"&gt;<br />
            &lt;h1&gt;Home&lt;/h1&gt;<br />
          &lt;/section&gt;<br />
          &lt;section id="about" class="panel"&gt;<br />
            &lt;h1&gt;About&lt;/h1&gt;<br />
          &lt;/section&gt;<br />
          &lt;section id="skills" class="panel"&gt;<br />
            &lt;h1&gt;Skills&lt;/h1&gt;<br />
          &lt;/section&gt;<br />
          &lt;section id="contact" class="panel"&gt;<br />
            &lt;h1&gt;Contact&lt;/h1&gt;<br />
          &lt;/section&gt;<br />
        &lt;/article&gt;
</pre>


<h3>CSS</h3>
<pre>
  *{
  margin:0px;
  padding:0px;
}

body{ width:8000px; }

a{ text-decoration:none; }

a:link{ color:white;}

a:hover{ text-decoration:underline; }

ul{ list-style-type:none; }

header{ 
      width:100%;
      height:80px;
      background-color:gray;
      position:fixed;
      top:0px;  
}

nav{
      width:60%;
      float:right;
      margin-top:20px
}

nav ul{
        width:301px;
        height:20px;
        float:right;
        margin-top:10px; 
}

nav li{
        width:60px;
        float:left;
        margin-right:20px;
        box-sizing:border-box;
        padding-left:6px; 
}

nav li:last-child{ margin-right:0px; }

.wraper{ margin-top:35px; }

.panel{
        width: 930px;
        height:500px;
        float: left;
        padding-left: 30px;
        padding-right: 1040px;
        margin-top: 45px;
        background: #eee; 
}

footer{
        width:100%;
        height:40px;
        background-color:darkgray;
        box-sizing:border-box;
        padding-top:10px;
        position:fixed;
        bottom:0px;
}

footer p{ text-align:center; }

</pre>

<h3>The below jQuery code is for the smooth scroll left to right , top to bottom</h3>
<pre>
  <code>
  $("document").ready(function(){
  
  $("nav a").bind("click", function(event){
  
    event.preventDefault();
    
    var target = $(this).attr("href");
  
  $("html, body").stop().animate({ 
      
      scrollLeft: $(target).offset().left,
      scrollTop: $(target).offset().top}, 
      
      1200);
  });
});
  </code>
</pre>
