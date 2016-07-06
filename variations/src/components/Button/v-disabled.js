module.exports = {
  "name": "Disabled",
  "props": {
    "className": "disabledButton",
    "innerClassName": "",
    "onClick": function () {
	    console.log('Run'); // eslint-disable-line
	  },
    "disabled": true,
    "children": "Disabled"
  }
};