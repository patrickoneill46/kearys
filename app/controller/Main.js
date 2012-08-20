Ext.define('Kearys.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			contactEmail: '#contactemail',
			contactMessage: '#contactmessage',
			financeResults: '#financeresults',
			itiles: '#itiles',
			mainPanel: '#mainpanel',
			navItem: '#navitem',
			navList: 'navlist',
			contactFields: '#contactfields',
			contactForm: 'contactpanel'
		},

		control: {
			navList: {
				itemtap: 'showPanel'
			},

			navItem: {
				tap: 'showPanel',
			},

			itiles: {
                leafitemtap: 'onLeafItemTap'
            },

            'button[action=submit]': {
            	tap:'submit',
            },

            'button[action=calculate]': {
            	tap:'calculate',
            },

            'button[action=reset]': {
            	tap:'reset',
            },
		},
	},

	showPanel: function (list,index) {
		
		var self = this,
			main = self.getMainPanel();

		main.setActiveItem(index);
	},

	onLeafItemTap: function(cmp, dataview, index) {
        var self= this;
        var store = dataview.getStore();
        var record = store.getAt(index);
        
        Ext.Msg.alert(record.get('text'), 
                      record.get('description'), 
                      Ext.emptyFn);
        
        console.log('Current data record:', record);
    },

    submit: function(){
    	var self=this;
    	Ext.Msg.alert('Message Submitted',
    					'A member of the Keary\'s team will be in contact shortly',
    					self.clearContactFields()
	    );
    },

    calculate: function(){
    	var self=this;

		self.getFinanceResults().show();
		Ext.getCmp('resetbutton').show();
    },

    reset: function (button) {
    	var self=this;

    	Ext.getCmp('financedeposit').setValue('');
    	Ext.getCmp('financemonths').setValue('');
    	Ext.getCmp('financeapr').setValue('');
    	Ext.getCmp('financeamount').setValue('');
    	button.setHidden(true);
    	self.getFinanceResults().hide();
    },

    clearContactFields: function (){

    	this.getContactEmail().setValue('');
    	this.getContactMessage().setValue('');
    }
});