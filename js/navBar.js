/**
 * Main Comments
 */
var navbar = (function(id)
{
    var navBar = document.getElementById("divNavigationBar");
    var navBarBackground = document.createElement("div");
    var divContactUs = document.createElement("div");
    var divWhatWeOffer = document.createElement("div");
    var divWhoWeAre = document.createElement("div");
    var divQualityOfService = document.createElement("div");
    var divLogo = document.createElement("div");
    var mouseEntered = true;

    (function init()
    {
        initControls();
        animate_navigationBar();
        divContactUs.onmouseover = function(){fadeColorIn();};
        divContactUs.onmouseout = function(){fadeColorIn();};
        divContactUs.onclick = function(){moveToContactArea();};
        divWhoWeAre.onclick = function(){moveToWhoAreWeArea();};
        divWhatWeOffer.onclick = function(){moveToWhatWeOffer();};
        divQualityOfService.onclick = function(){moveToQuality();};


    }());

    /**
     * Initializes all controls on the main screen.
     */
    function initControls(id)
    {
        navBar.style.cssText = "width: 100%;position: absolute;top: 50px;z-index: 3;";

        divLogo.style.cssText = "color: #FFF;cursor: pointer;font-size: 30px;position: absolute;z-index: 4; left: 60px;";
        divLogo.innerHTML = "42";
        navBar.appendChild(divLogo);

        navBarBackground.style.cssText = "background-color: #FFF;height: 0px;width: 100%;z-index: 2;position: absolute;";
        navBar.appendChild(navBarBackground);

        divContactUs.style.cssText = "border: 1px solid #8BC34A;border-radius: 7px;color: #8BC34A;cursor: pointer;right: 60px;height: 40px;width: 180px;text-align: center;line-height: 39px;position: absolute; top: -2px; z-index: 4;";
        divContactUs.innerHTML = "Contact us";
        $(divContactUs).addClass("divContactUsNavButton");
        navBar.appendChild(divContactUs);

        divWhatWeOffer.style.cssText = "cursor: pointer;right: 275px;height: 40px;width: 180px;text-align: center;line-height: 38px;position: absolute;z-index: 4;";
        divWhatWeOffer.innerHTML = "WHAT WE OFFER";
        divWhatWeOffer.className = "navigateItemsNormal";
        navBar.appendChild(divWhatWeOffer);

        divWhoWeAre.style.cssText = "cursor: pointer;right: 490px;height: 40px;width: 180px;text-align: center;line-height: 38px;position: absolute;z-index: 4;";
        divWhoWeAre.innerHTML = "WHO WE ARE";
        divWhoWeAre.className = "navigateItemsNormal";
        navBar.appendChild(divWhoWeAre);

        divQualityOfService.style.cssText = "cursor: pointer;right: 705px;height: 40px;width: 193px;text-align: center;line-height: 38px;position: absolute;z-index: 4;";
        divQualityOfService.innerHTML = "THE QUALITY WE BRING";
        divQualityOfService.className = "navigateItemsNormal";
        navBar.appendChild(divQualityOfService);
    }

    function animate_navigationBar()
    {
        var lastScrollTop = 0;
        $(window).scroll(function(event)
        {
           var start = $(this).scrollTop();
           if (start > lastScrollTop)
           {
                scrollingDown = true;
                scrollingUp = false;

                if($(window).scrollTop() > 600)
                {
                    navBar.style.position = "fixed";
                    divContactUs.style.top = "-33px";
                    navBarBackground.style.height = "75px";
                    navBarBackground.style.top = "-50px";
                    navBarBackground.style.borderBottom =  "1px solid #E4E4E4";
                    divWhatWeOffer.style.top = "-28px";
                    divWhatWeOffer.className = "navigateItemsInMenu";
                    divWhoWeAre.style.top = "-28px";
                    divWhoWeAre.className = "navigateItemsInMenu";
                    divQualityOfService.style.top = "-28px";
                    divQualityOfService.className = "navigateItemsInMenu";
                    divLogo.style.color = "#8a959e"; divLogo.style.top = "-28px";
                }
           }
           else
           {
                if($(window).scrollTop() <= 600)
                {
                    scrollingUp = true;
                    scrollingDown = false;

                    navBar.style.position = "absolute";
                    divContactUs.style.top = "0px";
                    navBarBackground.style.height = "0px";
                    navBarBackground.style.borderBottom =  "0px solid #E4E4E4";
                    divWhoWeAre.className = "navigateItemsNormal";
                    divWhoWeAre.style.top = "0px";
                    divWhatWeOffer.style.top = "0px";
                    divWhatWeOffer.className = "navigateItemsNormal";
                    divQualityOfService.className = "navigateItemsNormal";
                    divQualityOfService.style.top = "0px";
                    divLogo.style.color = "#FFF"; divLogo.style.top = "-24px";
                }
           }

           lastScrollTop = start;
        });
    }

    function moveToContactArea()
    {
        window.scrollTo(0, 2900);
    }

    function moveToWhoAreWeArea()
    {
        window.scrollTo(0, 1500);
    }

    function moveToWhatWeOffer()
    {
        window.scrollTo(0, 700);
    }

    function moveToQuality()
    {
        window.scrollTo(0, 2300);
    }

    function fadeColorIn()
    {
        if(mouseEntered)
        {
            divContactUs.style.backgroundColor = "#8BC34A";
            divContactUs.style.color = "#FFF";
            mouseEntered = false;
        }
        else
        {
            divContactUs.style.backgroundColor = "transparent";
            divContactUs.style.color = "#8BC34A";
            mouseEntered = true;
        }
    }

    return(
    {

    });
}());
