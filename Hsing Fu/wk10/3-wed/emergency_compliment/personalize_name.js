var _ = require('underscore');


var personalizeName = function (name){
	name = name.substr(1);

	_.mixin({
	  capitalize: function(string) {
	    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	  }
	});
	name = _(name).capitalize();

	return name;
}

module.exports = personalizeName;