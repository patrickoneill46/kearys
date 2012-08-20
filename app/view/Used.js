Ext.define('Kearys.view.Used', {
	extend: 'Ext.Panel',
	xtype: 'usedpanel',
	requires: ['Cs.component.ImagesTiles', 'Kearys.view.UsedCar'],

	config:{
		iconCls: 'user',
		title: 'Used Cars',
		html: 'this is the used panel',
		fullscreen: true,
        layout: 'fit',
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Used Car Search'
            },
            {
                xtype: 'img-tiles',
                id: 'itiles',
                title: 'Manufacturer',
                style: 'font-size: 0.8em;',
                store: 'Used',
                detailCard: {
                    xtype: 'usedcardetail'
                },
                tileConfig: {
                    childrenBadge: true,
                    fixedHeight: '70px'
                }
            }
        ]
	}
});