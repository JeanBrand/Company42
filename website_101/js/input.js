/**
 * Input UI component.
 * @param divId - Id of div element to convert to input component.
 * @param placeHolder - Default place holder for input component.
 */
Input = function(divId, placeHolder)
{
    var divLabel;
	var divInput;
    var divLine;
	var divErrorLine;
    var divErrorMessage;
	var divErrorIcon;
    var focusHandler;
	var blurHandler;
    var keyUpHandler;

	/**
	 * Initializes the Input component.
	 */
	(function init()
	{
		buildComponent();
	}());

	/**
	 * Builds the input component.
	 */
    function buildComponent()
    {
        var divInputContainer = document.getElementById(divId);
        divInputContainer.style.cssText = "position:relative;";

        divLabel = document.createElement("div");
        divLabel.style.cssText = "color:#FFF; font-size:16px; font-weight:regular; float:left; pointer-events:none; position:absolute; top:22px; -moz-transition:0.2s ease all; -webkit-transition:0.2s ease all; transition:0.2s ease all;";
        divLabel.innerHTML = placeHolder;
        divInputContainer.appendChild(divLabel);

        divInput = document.createElement("input");
        divInput.style.cssText = "background-color: transparent; border:none; border-bottom:1px solid rgba(0, 0, 0, 0.54);border-radius: 0px; box-sizing:border-box;margin-top:28px;color: #FFF; outline:none; width:100%;-webkit-appearance: none;height: 18px;";
        divInput.onfocus = function(){divInput_onFocus()};
        divInput.onblur = function(){divInput_onBlur()};
        divInput.onkeyup = function(event){divInput_onKeyUp(event)};

        divInputContainer.appendChild(divInput);

        divLine = document.createElement("div");
        divLine.style.cssText = "background-color:#B71B1C; height:2px; left:50%; position:absolute; right:50%; top:45px; -moz-transition:0.6s ease all; -webkit-transition:0.6s ease all; transition:0.6s ease all;";
        divInputContainer.appendChild(divLine);

        divErrorLine = document.createElement("div");
        divErrorLine.style.cssText = "background-color:#F34235;height:2px; left:50%; position:absolute; right:50%; top:45px; -moz-transition:0.2s ease all; -webkit-transition:0.2s ease all; transition:0.2s ease all;";
        divInputContainer.appendChild(divErrorLine);

        divErrorMessage = document.createElement("div");
        divErrorMessage.style.cssText = "color:#F34235; display:none; font-size:12px; margin-top:5px; position:absolute;";
        divInputContainer.appendChild(divErrorMessage);

        divErrorIcon = document.createElement("img");
        //divErrorIcon.src = "images/validationAlert.svg";
        divErrorIcon.style.cssText = "display:none; right:0px; margin-top:4px; position:absolute;";
        divInputContainer.appendChild(divErrorIcon);
    }

    function divInput_onFocus()
    {
        divInput.style.color = "rgba(0, 0, 0, 0.87)";
		divLabel.style.fontSize = "12px";
        divLabel.style.top = "7px";

		if(typeof focusHandler != "undefined")
        {
            focusHandler();
        }
        // Call show line function after focusHandler validation,
        // this allows the input field to be highlighted again on re-entering the field even after validation is correct.
        showLine();
    }

    function divInput_onBlur()
    {
        if(divInput.value == "")
        {
            divLabel.style.fontSize = "16px";
            divLabel.style.top = "22px";
        }

        hideLine();

        if(typeof blurHandler != "undefined")
        {
            blurHandler();
        }
    }

    function divInput_onKeyUp(event)
    {
        if(typeof keyUpHandler != "undefined")
        {
            keyUpHandler(event);
        }
    }

    function showLine()
    {
        divLine.style.left = "0%";
        divLine.style.right = "0%";
    }

    function hideLine()
    {
        divLine.style.left = "50%";
        divLine.style.right = "50%";
    }

    function getValue()
    {
        return divInput.value;
    }

    function showErrorLine()
    {
        divErrorLine.style.left = "0%";
        divErrorLine.style.right = "0%";
    }

    function hideErrorLine()
    {
        divErrorLine.style.left = "50%";
        divErrorLine.style.right = "50%";
    }

    function setErrorState(message)
    {
        showErrorLine();

        // Set and show error message
        divErrorMessage.style.display = "block";
        divErrorMessage.innerHTML = message;

        // Show error icon
        divErrorIcon.style.display = "block";
    }

    function setDefaultState()
    {
        hideErrorLine();

        // Reset error message
        divErrorMessage.innerHTML = "";

        // Hide error icon
        divErrorIcon.style.display = "none";
    }

    function setFocusHandler(focusHandlerParam)
    {
        focusHandler = focusHandlerParam;
    }

	function setBlurHandler(blurHandlerParam)
    {
        blurHandler = blurHandlerParam;
    }

    function setOnKeyUpHandler(keyUpHandlerParam)
    {
        keyUpHandler = keyUpHandlerParam;
    }

    function setInputType(type)
    {
        divInput.type = type;
    }

    // Public function and variables
    return(
    {
        divLine:divLine,
        getValue:getValue,
        setErrorState:setErrorState,
        setDefaultState:setDefaultState,
		setFocusHandler:setFocusHandler,
        setBlurHandler:setBlurHandler,
        setOnKeyUpHandler:setOnKeyUpHandler,
        setInputType:setInputType
    });
};
