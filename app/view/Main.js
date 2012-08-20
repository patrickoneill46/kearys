Ext.define("Kearys.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',


        'Kearys.view.Used',
        'Kearys.view.Service',
        'Kearys.view.Contact'
    ],
    config: {
        //tabBarPosition: 'bottom',
        id: 'mainpanel',
        tabBar: {
            hidden: true
        },

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Keary\'s',
                },

                html: [
                    "Kearys are one of Ireland largest motor groups, with a number of state of the art dealerships around",
                    "Cork city and county. Ireland’s newest Hyundai dealer, Kearys also represent Renault, BMW, MINI,",
                    "Motorrad and Dacia. Kearys continue to supply genuine Toyota parts and accessories as well as carry out ",
                    "Toyota and Lexus servicing and warranty work as Toyota and Lexus Authorised Repairers. With award winning",
                    " sales staff, dedicated financial advisors, superb aftersales and parts departments and over 500 new and used",
                    "cars in stock, Kearys have your motoring needs covered."
                ].join("")
            },
            {
                xtype: 'usedpanel'
            },
            {
                xtype: 'servicepanel'
            },
            {
                xtype: 'financepanel'
            },
            {
                xtype: 'contactpanel'
            }
        ]
    }
});
