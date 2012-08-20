Ext.define('Kearys.view.Contact', {
	extend: 'Ext.Panel',
	xtype: 'contactpanel',

	config:{
		iconCls: 'user',
		title: 'Contact Us',
		items: [
			{
				xtype: 'titlebar',
				title: 'Contact Us'
			},
			{
				xtype: 'fieldset',
				id: 'contactfields',
				margin: '20 20 0 20',
				items: [
					{
						xtype: 'emailfield',
						id: 'contactemail',
						label: 'Email',
						placeHolder: 'Enter email address...'
					},
					{
						xtype: 'textareafield',
						id: 'contactmessage',
						label: 'Message',
						placeHolder: 'Leave us a message...',
						maxRows: 10,
					},
				]
			},
			{
				xtype: 'button',
				action: 'submit',
				text: 'Submit',
				margin: '10 0 0 20',
				width: 100	
			}
		]
	}
});