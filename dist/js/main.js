/*-----------
Cake generator
------------*/

// Colours

var chocolateColor = "hsl(25, 75%, 47%)";
var vanillaColor = "hsl(48, 75%, 85%)";
var redVelvetColor = "hsl(0, 90%, 40%)";
var chocolateCreamColor = "hsl(25, 75%, 20%)";
var milkColor = "hsl(72, 50%, 100%)";
var mokaColor = "hsl(24, 24%, 52%)";
var cheeseFrostingColor = "hsl(43, 70%, 92%)";
var singleCreamColor = "hsl(60, 90%, 87%)";
var buttercreamColor = "hsl(56, 80%, 95%)";


// Inputs

var sizeInput = document.getElementById("size-input");
var flavourTopInput = document.getElementById("flavour-top");
var flavourBottomInput = document.getElementById("flavour-bottom");
var creamInput = document.getElementById("cream");
var pineappleInput = document.getElementById("pineapple");
var strawberryInput = document.getElementById("strawberry");
var blueberryInput = document.getElementById("blueberry");
var peachInput = document.getElementById("peach");
var raspberryInput = document.getElementById("raspberry");
var priceButton = document.querySelector(".price-button");


// Outputs

var cakeSize = document.querySelector(".cake").style;
var flavourTop = document.querySelector(".flavour-top").style;
var flavourBottom = document.querySelector(".flavour-bottom").style;
var cream = document.querySelector(".cream").style;
var pineapple = document.querySelector(".pineapple").style;
var strawberry = document.querySelector(".strawberry").style;
var blueberry = document.querySelector(".blueberry").style;
var peach = document.querySelector(".peach").style;
var raspberry = document.querySelector(".raspberry").style;
var price = document.querySelector(".price");

// Prices

var s = 0;


// Code

// Size

sizeInput.addEventListener("change", function(){
	cakeSize.border = "3px solid black";
	if (sizeInput.value == "small") {cakeSize.setProperty("--cake-size", 20 + "%")}
	else if (sizeInput.value == "medium") {cakeSize.setProperty("--cake-size", 40 + "%")}
	else if (sizeInput.value == "large") {cakeSize.setProperty("--cake-size", 60 + "%")}
	else {return}
})


// Flavour top

flavourTopInput.addEventListener("change", function(){
	if (flavourTopInput.value == "chocolate") {flavourTop.setProperty("--flavour-top-color",chocolateColor)}
	else if (flavourTopInput.value == "vanilla") {flavourTop.setProperty("--flavour-top-color",vanillaColor)}
	else if (flavourTopInput.value == "red-velvet") {flavourTop.setProperty("--flavour-top-color",redVelvetColor)}
	
	
})


//Flavour bottom

flavourBottomInput.addEventListener("change", function(){
	if (flavourBottomInput.value == "chocolate") {flavourBottom.setProperty("--flavour-bottom-color",chocolateColor)}
	else if (flavourBottomInput.value == "vanilla") {flavourBottom.setProperty("--flavour-bottom-color",vanillaColor)}
	else if (flavourBottomInput.value == "red-velvet") {flavourBottom.setProperty("--flavour-bottom-color",redVelvetColor)}
	
})


//Cream

creamInput.addEventListener("change", function(){
	if (creamInput.value == "chocolate") {cream.setProperty("--cream-color", chocolateCreamColor)}
	else if (creamInput.value == "milk") {cream.setProperty("--cream-color", milkColor)}
	else if (creamInput.value == "buttercream") {cream.setProperty("--cream-color", buttercreamColor)}
	else if (creamInput.value == "moka") {cream.setProperty("--cream-color", mokaColor)}
	else if (creamInput.value == "cheese-frosting") {cream.setProperty("--cream-color", cheeseFrostingColor)}
	else if (creamInput.value == "single-cream") {cream.setProperty("--cream-color", singleCreamColor)}
	
	
})


// Fruits

pineappleInput.addEventListener("click",function(){
	if(this.checked){pineapple.display = "block"}
	else {pineapple.display = "none"};
})

strawberryInput.addEventListener("click",function(){
	if(this.checked){strawberry.display = "block"}
	else {strawberry.display = "none"};
})

blueberryInput.addEventListener("click",function(){
	if(this.checked){blueberry.display = "block"}
	else {blueberry.display = "none"};
})

raspberryInput.addEventListener("click",function(){
	if(this.checked){raspberry.display = "block"}
	else {raspberry.display = "none"};
})

peachInput.addEventListener("click",function(){
	if(this.checked){peach.display = "block"}
	else {peach.display = "none"};
})


priceButton.addEventListener("click",function(){
	event.preventDefault();
	
	var s;
	var t;
	var b;
	
	if (sizeInput.value == "small") {s = 1}
	else if (sizeInput.value == "medium") {s = 2}
	else if (sizeInput.value == "large") {s = 3}
	else {return};
	
	if (flavourTopInput.value == "chocolate") {t = 20}
	else if (flavourTopInput.value == "vanilla") {t = 15}
	else if (flavourTopInput.value == "red-velvet") {t = 25}
	else {return};
	
	if (flavourBottomInput.value == "chocolate") {b = 20}
	else if (flavourBottomInput.value == "vanilla") {b = 15}
	else if (flavourBottomInput.value == "red-velvet") {b = 25}
	else {return};

	
	price.innerText = s * (t + b);
})




/* --------
  Nav menu
----------*/

var navButton = document.querySelector(".menu-button");
var navMenu = document.getElementById("menu");
var asideContent = document.querySelector(".aside");

navButton.addEventListener("click",function(){
navMenu.classList.toggle("hidden");
this.classList.toggle("rotate");
asideContent.classList.toggle("top13");
	
})
