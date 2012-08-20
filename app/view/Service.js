Ext.define('Kearys.view.Service', {
	extend: 'Ext.Panel',
	xtype: 'servicepanel',
	requires: ['Ext.ux.TouchCalendar'],

	config:{
		iconCls: 'user',
		title: 'service',	
		//html: 'this is the service panel',
		fullscreen: true,
        layout: 'fit',
		items: [
			{
	            xtype: 'toolbar',
	            title: 'Keary\'s Servicing',
	            docked: 'top',
	            items: [
	            	{
		                xtype: 'button',
		                text: 'Month View',
		                handler: function(){
		                    Ext.getCmp('servicecalendar').setMode('month');
		                }
		            }, {
		                xtype: 'button',
		                text: 'Week View',
		                handler: function(){
		                    Ext.getCmp('servicecalendar').setMode('week');
		                }
		            }, {
		                xtype: 'button',
		                text: 'Day View',
		                handler: function(){
		                    Ext.getCmp('servicecalendar').setMode('day');
		                }
		            }
	            ]
          	},
          	Ext.create('Ext.ux.TouchCalendar', {
      			xtype: 'calendar',
      			id: 'servicecalendar',
              	viewConfig: {
                	mode: 'month',
                	weekStart: 1,
                	value: new Date()
      			}
  			})
		]
	},
});