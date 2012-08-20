Ext.define('Kearys.view.Finance', {
	extend: 'Ext.Panel',
	xtype: 'financepanel',

	config:{
		iconCls: 'user',
		title: 'Finance',

		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Keary\'s Finance',
			},
			{
				xtype: 'fieldset',
				margin: '20 20 0 20',
				items: [
					{
						xtype: 'textfield',
						id: 'financeamount',
						label: 'Amount',
						placeHolder: 'Enter Loan Amount...'
					},
					{
						xtype: 'numberfield',
						id: 'financeapr',
						label: 'APR %',
						placeHolder: 'Enter APR %'	

					},
					{
						xtype: 'sliderfield',
						id: 'financemonths',
						label: 'Repayment in Months',
						minValue: 0,
						maxValue: 60,
					},
					{
						xtype: 'numberfield',
						id: 'financedeposit',
						label: 'Deposit Amount',
						placeHolder: 'Enter Deposit Amount'
					}	
				]
			},
			{
				xtype: 'panel',
				layout: 'hbox',
				items: [
					{
						xtype: 'button',
						text: 'Caclulate',
						id: 'calculatebutton',
						action: 'calculate',
						margin: '10 0 0 20',
						width: 150	
					},
					{
						xtype: 'button',
						text: 'Reset',
						id: 'resetbutton',
						action: 'reset',
						margin: '10 0 0 20',
						width: 150,
						hidden: true,
					},	
				]
			},
			{
				xtype: 'fieldset',
				id: 'financeresults',
				margin: '10 20 0 20',
				hidden: true,
				items: [
					{
						xtype: 'textfield',
						disabled: true,
						label: 'Repayments per Month',
						value: '€568.35'
					},
					{
						xtype: 'textfield',
						disabled: true,
						label: 'Total Repayable',
						value: '€13,235 over 3 years'
					}
				]
			}
		]
	}
});