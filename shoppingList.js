var availableItems = ["Old Magazine", "Slightly Used Lamp Shade", "Decorative Pillow", "Freddie Prinze Jr. Signed Photograph", "Buffy the Vampire Slayer DVDs", "Bruised Apple"]

var availableItemPrices = [10.99, 4.50, 12.99, 1500.00, 80.00, 1.50]

var listLength = availableItems.length;

var myCartTotal= 0;

function printList(){
	for(var i = 0; i < listLength; i++){
		$("ul").append("<li id =\"" + (i) + "\">" + availableItems[i] + ". . . . . .  $" + availableItemPrices[i].toFixed(2) + "</li></br>");	
		addButtons(i);
	}
}

function addButtons(listItemNumber){
	var idNumber = "#" + listItemNumber;
	$(idNumber).append("</br>");
	$(idNumber).append("<button id =\"Button" + listItemNumber + "\">Add to Cart</button>");
}

function addItemZeroToCart(){
	$(cartItems).append("<li>" + availableItems[0] + "</li>");
	myCartTotal = myCartTotal + availableItemPrices[0];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));	
}

function addItemOneToCart(){
	$(cartItems).append("<li>" + availableItems[1] + "</li>");
	myCartTotal = myCartTotal + availableItemPrices[1];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));
}

function addItemTwoToCart(){
	$(cartItems).append("<li>" + availableItems[2] + "</li>");
	myCartTotal = myCartTotal + availableItemPrices[2];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));
}

function addItemThreeToCart(){
	$(cartItems).append("<li>" + availableItems[3] + "</li>");
	myCartTotal = myCartTotal + availableItemPrices[3];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));
}

function addItemFourToCart(){
	$(cartItems).append("<li>" + availableItems[4] + "</li>");
	myCartTotal = myCartTotal + availableItemPrices[4];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));
}

function addItemFiveToCart(){
	$(cartItems).append("<li>" + availableItems[5] + "</li>");
	myCartTotal = myCartTotal + availableItemPrices[5];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));
}

function getTotal(){
	$(cartTotal).append(myCartTotal.toFixed(2) +"");
}

