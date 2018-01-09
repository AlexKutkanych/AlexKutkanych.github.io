$( function() {
    $( "#accordion" ).accordion({
		active: 0,
		classes: {
			"ui-accordion-header-active": "ac-container__label_active",
			"ui-accordion-header": "ac-container__label",
			// "ui-accordion-header-icon": 
		}
    });
  } );