var Stack = (function() {
  var items = [];

  var push = function(item) {
    items.push(item);
  };

  var getItems = function() {
    return items;
  };

  return {
    push: push,
    getItems: getItems
  };

})();
