Ext.define('Kearys.view.Nav', {
	extend: 'Ext.List',
	xtype: 'navlist',
	
	requires: ['Ext.TitleBar'],

	config: {
		width: 200,
		docked: 'left',
		id: 'navlist',
		itemCls: 'navitem',
		scrollable: false,
	    itemTpl: '{title} <img src="resources/images/rarr.png" class="navarrow" />',
	    data: [
	    	{title: 'Keary\'s'},
	        { title: 'Used Car Search'},
	        { title: 'Servicing' },
	        { title: 'Finance' },
	        { title: 'Contact Us'}
	    ],
	    items: [
	    	{
	    		xtype: 'titlebar',
	    		//title: 'Navigation'
	    		title: '<img src="resources/images/kearys.png" class="navlogo" />',
	    	}
	    ]
	}
})