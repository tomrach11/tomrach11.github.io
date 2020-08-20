var DataService = function(){
    var self = this;

    self.makePurchase = function(cashAmount, itemId, callback, onError){
        $.ajax({
            url: "http://tsg-vending.herokuapp.com/money/" + cashAmount + "/item/" + itemId,
            method: "POST",
            success: callback,
            error: onError
        });
    };

    self.getAllItems = function(callback, onError){
        $.ajax({
            url: "http://tsg-vending.herokuapp.com/items",
            method: "GET",
            success: callback,
            error: onError
        });
    };

    self.getItemById = function(itemId) {
        var items = self.getAllItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == itemId) {
                return item[i];
            }
        }
        return null;
    };
};
