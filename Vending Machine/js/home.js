var ds = new DataService();
var selectedItemId;
var moneyIn = 0.0;

//functions that interact with your page
function updateListOfItems(itemList){
    $('.reset').remove();
    var itemRow = $("#item-blocks");
    var items = itemList;
    for (var i = 0; i < itemList.length; i++) {
        $(itemRow).append(formatItemRow(itemList[i]));
    }
}

function formatItemRow(item) {
    return `<a href="#" class="col-sm-6 col-md-4 item-block reset" data-itemid = '${item.id}'>
    <div class="item reset">
        <p align = left class="reset">${item.id}</p>
        <h4 class="reset">${item.name}</h4>
        <p class="reset">$${item.price}</p>
        <p class="reset">Quantity In Stock: ${item.quantity}</p>
    </div>
    </a>`;
}

function updateMoney(){
    var cashInput = $("#cash-in-system");
    cashInput.val((moneyIn/100).toFixed(2));
}

//functions for your on clicks
function onAddDollarClicked(e){
    e.preventDefault();
    moneyIn += 100;
    updateMoney();
}

function onAddQuarterClicked(e){
    e.preventDefault();
    moneyIn += 25;
    updateMoney();
}

function onAddDimeClicked(e){
    e.preventDefault();
    moneyIn += 10;
    updateMoney();
}

function onAddNickleClicked(e){
    e.preventDefault();
    moneyIn += 5;
    updateMoney();
}

function updateSelectedItem(e) {
    selectedItemId = $(this).data('itemid');
    $("#item-number").val(selectedItemId);
    updateMessageBox("");
}

function onMakePurchaseClicked(e){
    e.preventDefault();
    ds.makePurchase((moneyIn/100), selectedItemId, updateFormsAfterPurchase, errorHandler);
    ds.getAllItems(updateListOfItems, errorHandler);
}

function updateFormsAfterPurchase(change) {
    updateMessageBox("Thank you!!!");
    updateChangeBox(change);
    moneyIn = 0.0;
    updateMoney((moneyIn/100).toFixed(2));
}

function updateMessageBox(message) {
    $('#message-text').val(message);
}

function errorHandler(err) {
    updateMessageBox(err.responseJSON.message);
}

function onChangeReturnedClicked() {
    // e.preventDefault();
    moneyIn = 0.0;
    selectedItemId = "";
    updateSelectedItem();
    updateMoney((moneyIn/100).toFixed(2));
    updateMessageBox("");
    updateChangeBox("");
}

function updateChangeBox(change) {
    var changeMessage = "";
    if (change.quarters > 0) {
        changeMessage += change.quarters + " Quarter(s), ";
    }
    if (change.dimes > 0) {
        changeMessage += change.dimes + " Dime(s), ";
    }
    if (change.nickels > 0) {
        changeMessage += change.nickels + " Nickel(s), ";
    }
    if (change.pennies > 0) {
        changeMessage += change.pennies + " Penny(s), ";
    }
    $('#change-returned').val(changeMessage);
}

//Page setup
$(document).ready(function() {
    //Wire up all your on clicks
    ds.getAllItems(updateListOfItems, errorHandler);
    updateMoney();
    $(document).on('click','#add-dollar', onAddDollarClicked);
    $(document).on('click','#add-quarter', onAddQuarterClicked);
    $(document).on('click','#add-dime', onAddDimeClicked);
    $(document).on('click','#add-nickle', onAddNickleClicked);
    $(document).on('click','.item-block',updateSelectedItem);
    $(document).on('click','#make-purchase', onMakePurchaseClicked);
    $(document).on('click','#return-change', onChangeReturnedClicked);
});
