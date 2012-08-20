Ext.define('Kearys.view.UsedCar', {
	extend: 'Ext.Panel',
	xtype: 'usedcardetail',

	config: {
		usedCarId: undefined,
		layout: 'fit',

		items: [
			{
				xtype: 'titlebar',
				title: '3-series',
			},
			{
				xtype: 'image',
				src:  'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
				height: 64,
   				width: 64
			}
		]
	}
})