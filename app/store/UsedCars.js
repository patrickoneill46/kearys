Ext.define('Kearys.store.UsedCars', {
	extend: 'Ext.data.Store',

	config: {
		model: 'Kearys.model.UsedCar',
		autoLoad: true,
	}
})