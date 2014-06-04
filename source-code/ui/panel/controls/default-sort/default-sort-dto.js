/**
* jQuery jPList Plugin ##VERSION## 
* Copyright 2014 Miriam Zusin. All rights reserved.
* To use this file you must buy a licence at http://codecanyon.net/user/no81no/portfolio 
*/
(function(){
	'use strict';		
	
	/** 
	* Default Sort Model
	* @constructor
	* @param {string} dataPath - textbox data-path attribute
	* @param {string} type - text, number or datetime
	* @param {string} order - 'asc' or 'desc'
	* @param {string} dateTimeFormat - like {day}.{month}.{year} //{year}, {month}, {day}, {hour}, {min}, {sec}
	* @param {string} ignore - ignore regex
	*/
	jQuery.fn.jplist.ui.controls.DefaultSortDTO = function(dataPath, type, order, dateTimeFormat, ignore){
		
		return {
			path: dataPath
			,type: type
			,order: order
			,dateTimeFormat: dateTimeFormat
			,ignore: ignore
		};
	};	
		
})();
