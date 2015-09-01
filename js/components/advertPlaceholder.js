/**
 * Main Comments
 */
var advert = (function()
{
    var adHolder = document.getElementById("divAdHolder");
    var adFooter = document.createElement("div");
    var wrapper = document.getElementById("indexWrapper");

    var divHeadersContainer = document.createElement("div");
    var divHeaderTitle = document.createElement("div");
    var divCompanyTitle = document.createElement("div");
    var divFooterTitle = document.createElement("div");

    var picture1 = document.createElement("img");
    var picture2 = document.createElement("img");

    var divImgContainer = document.createElement("div");
    var imgWordpress = document.createElement("img");
    var divWordPressTitle = document.createElement("div");

    var imgHTML5 = document.createElement("img");
    var divHTML5Title = document.createElement("div");

    var imgCSS3 = document.createElement("img");
    var divCSS3Title = document.createElement("div");

    var imgJavascript = document.createElement("img");
    var divJavascriptTitle = document.createElement("div");

    var imgJQuery = document.createElement("img");
    var divJQueryTitle = document.createElement("div");

    var adImages = true;

    (function init()
    {
        initControls();
        $(window).resize(function()
        {
            windowResize();
        });
        windowResize();
    }());

    /**
     * Initializes all controls on the main screen.
     */
    function initControls()
    {
        adHolder.addEventListener('mousemove', adHolder_onMouseMove, false);
        adHolder.style.cssText = "height: 795px; width: 105%;position: absolute;left:-30px;top: -15px;";
        adHolder.style.backgroundImage = "url('resources/images/bg3.jpg')";

        divHeadersContainer.style.cssText = "position: absolute;left: 50%;margin-left: -343.5px;margin-top: -210px;width: 687px;height: 420px;top: 65%;text-align: center;";
        adHolder.appendChild(divHeadersContainer);

        divCompanyTitle.style.cssText = "color: #FFF;font-size: 26px; font-weight: 100;";
        divCompanyTitle.innerHTML = "COMPANY 42";
        divHeadersContainer.appendChild(divCompanyTitle);

        divHeaderTitle.style.cssText = "color: #FFF;font-size: 44px;";
        divHeaderTitle.innerHTML = "WEB DEVELOPMENT COMPANY";//"TAKING YOUR BUSINESS TO NEW HORIZONS";
        divHeadersContainer.appendChild(divHeaderTitle);

        divFooterTitle.style.cssText = "color: #FFF;font-size: 26px; font-weight: 100;";
        divFooterTitle.innerHTML = "PRECISE.EFFICIENT.INTELLIGENT";
        divHeadersContainer.appendChild(divFooterTitle);

        picture1.style.cssText = "height: 630px;width: 710px;position: absolute;top: 175px;right: -215px;";
        picture1.src = "resources/images/move_3_bg.png";
        adHolder.appendChild(picture1);

        picture2.style.cssText = "height: 630px;width: 710px;position: absolute;top: 560px;left: -130px;";
        picture2.src = "resources/images/move_8.png";
        adHolder.appendChild(picture2);

        adFooter.style.cssText = "box-sizing: border-box;background-color: #F9F9FA;height: 100px;width: 100%;position: absolute;top: 775px;";
        wrapper.appendChild(adFooter);

        divImgContainer.style.cssText = "position: absolute;left: 50%;margin-left: -417px;margin-top: -42.5;width: 834px;height: 85px;top: 9%;";
        adFooter.appendChild(divImgContainer);

        imgWordpress.style.cssText = "height: 85px;width: 85px;float; left; margin-right: 158px;";
        imgWordpress.src = "resources/images/wp.png";
        divImgContainer.appendChild(imgWordpress);

        divWordPressTitle.style.cssText = "color: #A0A7AF; font-size: 20px;position: absolute;top: 40px; left: 95px;";
        divWordPressTitle.innerHTML = "WORDPRESS";
        divImgContainer.appendChild(divWordPressTitle);

        imgHTML5.style.cssText = "height: 85px;width: 60px;float; left; margin-right: 89px;";
        imgHTML5.src = "resources/images/html5_2.png";
        divImgContainer.appendChild(imgHTML5);

        divHTML5Title.style.cssText = "color: #A0A7AF; font-size: 20px;position: absolute;top: 40px; left: 308px;";
        divHTML5Title.innerHTML = "HTML5";
        divImgContainer.appendChild(divHTML5Title);

        imgCSS3.style.cssText = "height: 85px;width: 60px;float; left; margin-right: 79px;";
        imgCSS3.src = "resources/images/css3_2.png";
        divImgContainer.appendChild(imgCSS3);

        divCSS3Title.style.cssText = "color: #A0A7AF; font-size: 20px;position: absolute;top: 40px; left: 460px;";
        divCSS3Title.innerHTML = "CSS3";
        divImgContainer.appendChild(divCSS3Title);

        imgJavascript.style.cssText = "height: 85px;width: 60px;float; left; margin-right: 158px;";
        imgJavascript.src = "resources/images/javascript_2.png";
        divImgContainer.appendChild(imgJavascript);

        divJavascriptTitle.style.cssText = "color: #A0A7AF; font-size: 20px;position: absolute;top: 40px; left: 595px;";
        divJavascriptTitle.innerHTML = "JAVASCRIPT";
        divImgContainer.appendChild(divJavascriptTitle);

        imgJQuery.style.cssText = "color: #000;height: 85px;width: 85px;float; left;";
        imgJQuery.src = "resources/images/jquery_6.png";
        imgJQuery.innerHTML = "JQUERY";
        divImgContainer.appendChild(imgJQuery);

        divJQueryTitle.style.cssText = "color: #A0A7AF; font-size: 20px;position: absolute;top: 40px; left: 841px;";
        divJQueryTitle.innerHTML = "JQUERY";
        divImgContainer.appendChild(divJQueryTitle);
    }

    var previousX = -1;
    var previousY = -1;

    function adHolder_onMouseMove(e)
    {

        var x = e.pageX - adHolder.offsetLeft;
        var y = e.pageY - adHolder.offsetTop;
        var newx = x - ($(window).width() / 2);
        var newy = y - ($(window).height() / 2);
        //adholder
        var ad = $(adHolder).position();
        if(previousX < e.pageX)
        {
            TweenMax.to($(adHolder), 1, { x: (-1 - newx * 0.01), y: (1 - newy * 0.01)});
        }
        else if(previousX > e.pageX)
        {
            TweenMax.to($(adHolder), 1, { x: (1 - newx * 0.01), y: (1 - newy * 0.01)});
        }

        TweenMax.to($(adHolder), 1, { x: (1 - newx * 0.01), y: (1 - newy * 0.01)});

        if(previousX < e.pageX)
        {
            TweenMax.to($(adHolder), 1, { x: (-1 - newx * 0.01), y: (1 - newy * 0.01)});
        }
        else if(previousX > e.pageX)
        {
            TweenMax.to($(adHolder), 1, { x: (1 - newx * 0.01), y: (1 - newy * 0.01)});
        }

        //picture 1
        if(previousX < e.pageX)
        {
            TweenMax.to($(picture1), 1, { x: (-1 - newx * 0.02), y: (1 - newy * 0.02)});
        }
        else if(previousX > e.pageX)
        {
            TweenMax.to($(picture1), 1, { x: (1 - newx * 0.02), y: (1 - newy * 0.02)});
        }

        TweenMax.to($(picture1), 1, { x: (1 - newx * 0.02), y: (1 - newy * 0.02)});

        if(previousX < e.pageX)
        {
            TweenMax.to($(picture1), 1, { x: (-1 - newx * 0.02), y: (1 - newy * 0.02)});
        }
        else if(previousX > e.pageX)
        {
            TweenMax.to($(picture1), 1, { x: (1 - newx * 0.02), y: (1 - newy * 0.02)});
        }

        //picture 2
        var p2 = $(picture2).position();
        if(previousX < e.pageX)
        {
            TweenMax.to($(picture2), 1, { x: (-1 - newx * 0.03), y: (1 - newy * 0.03)});
        }
        else if(previousX > e.pageX)
        {
            TweenMax.to($(picture2), 1, { x: (1 - newx * 0.03), y: (1 - newy * 0.03)});
        }

        TweenMax.to($(picture2), 1, { x: (1 - newx * 0.03), y: (1 - newy * 0.03)});

        if(previousX < e.pageX)
        {
            TweenMax.to($(picture2), 1, { x: (-1 - newx * 0.03), y: (1 - newy * 0.03)});
        }
        else if(previousX > e.pageX)
        {
            TweenMax.to($(picture2), 1, { x: (1 - newx * 0.03), y: (1 - newy * 0.03)});
        }



        previousX = e.pageX;
        previousY = e.pageY;
    }

    function windowResize()
    {
        var windowWidth  = 0;

          windowWidth = $(window).width();
          if(windowWidth <= 1540)
          {
            //picture1.style.display = "none";
            //picture2.style.display = "none";
            /*divWordPressTitle.style.display = "none";
            divHTML5Title.style.display = "none";
            divCSS3Title.style.display = "none";
            divJavascriptTitle.style.display = "none";
            divJQueryTitle.style.display = "none";

            imgWordpress.style.marginRight = "15px";
            imgHTML5.style.marginRight = "15px";
            imgCSS3.style.marginRight = "15px";
            imgJavascript.style.marginRight = "15px";
            imgJQuery.style.marginRight = "15px";*/

            //divImgContainer.style.left = "34%";

            picture1.style.height = "315px";
            picture1.style.width = "360px";
            picture1.style.top = "360px;"

            picture2.style.height = "315px";
            picture2.style.width = "360px";
            picture2.style.top = "360px;"

            adImages = false;
          }
          else if(windowWidth >= 1540)
          {
            //picture1.style.display = "block";
            //picture2.style.display = "block";
            /*divWordPressTitle.style.display = "block";
            divHTML5Title.style.display = "block";
            divCSS3Title.style.display = "block";
            divJavascriptTitle.style.display = "block";
            divJQueryTitle.style.display = "block";

            imgWordpress.style.marginRight = "158px";
            imgHTML5.style.marginRight = "89px";
            imgCSS3.style.marginRight = "79px";
            imgJavascript.style.marginRight = "158px";
            imgJQuery.style.marginRight = "0px";*/

            picture1.style.height = "630px";
            picture1.style.width = "710px";

            adImages = true;
          }

           if(windowWidth <= 920)
          {
            adHolder.style.left = "-13px";
            divHeaderTitle.style.fontSize = "26px";
            divCompanyTitle.style.fontSize = "26px";
            divFooterTitle.style.fontSize = "26px";
            picture1.style.top = "565px";
          }

          if(windowWidth <= 530)
          {
            divHeaderTitle.style.fontSize = "16px";
            divCompanyTitle.style.fontSize = "16px";
            divFooterTitle.style.fontSize = "16px";
            picture1.style.top = "565px";
          }

          if(windowWidth <= 340)
          {

            divImgContainer.style.left = "1%";
            divHeaderTitle.style.fontSize = "16px";
            divCompanyTitle.style.fontSize = "16px";
            divFooterTitle.style.fontSize = "16px";
            picture1.style.top = "565px";
            picture1.style.height = "315px";
            picture1.style.width = "360px";

            picture2.style.height = "270px";
            picture2.style.width = "300px";
          }
    }

    return(
    {

    });
}());
