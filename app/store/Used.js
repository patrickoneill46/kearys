Ext.define('Kearys.store.Used', {
	extend: 'Ext.data.TreeStore',
    
    config: {
        model: 'Kearys.model.Used',
        autoLoad: true,
        
        proxy: {
            type: 'ajax',
            url: 'data/used.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});