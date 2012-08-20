Ext.define('Ext.model.UsedCar', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'id',
			},
			{
				name: 'manufacturer',
				type: 'String'
			},
			{
				name: 'model',
				type: 'String'
			},
			{
				name: 'submodel',
				type: 'String'
			},
			{
				name: 'mileage',
				type: 'number'
			},
			{
				name: 'year',
				type: 'number'
			}
		]
	}
})