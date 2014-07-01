Ext.define('Voyant.VoyantDefaultApp', {
	extend : 'Voyant.VoyantCorpusApp',
	requires: ['Voyant.panel.VoyantHeader', 'Voyant.panel.VoyantFooter', 'Voyant.panel.Cirrus', 'Voyant.panel.Summary', 'Voyant.panel.CorpusTerms', 'Voyant.panel.Reader', 'Voyant.panel.Documents', 'Voyant.panel.Trends', 'Voyant.panel.Contexts', 'Voyant.panel.DocumentTerms'],
	name : 'VoyantDefaultApp',
	launch: function() {
		Ext.create('Ext.container.Viewport', {
		    layout: 'border',
		    items: [{
		    	xtype: 'voyantheader',
		    	region: 'north'
		    },{
		        region: 'south',
		        xtype: 'voyantfooter'
		    }, {
		        region: 'center',
		        flex: .4,
		        layout: 'border',
		        items: [
		               {
		            	   xtype: 'reader',
		            	   region: 'center',
		                   collapsible: true,
		               },
		               {
		            	   xtype: 'documents',
		            	   region: 'south',
		                   collapsible: true,
		                   split: true
		               }
		        ]
		    },{
		    	region: 'west',
		    	flex: .3,
		        layout: 'border',
		        split: true,
		        items: [
		               {
		            	   xtype: 'tabpanel',
		            	   region: 'center',
		            	   items: [{
		            		   xtype: 'cirrus',
			                   collapsible: true
		            	   },{
		            		   xtype: 'corpusterms',
			                   collapsible: true
		            	   }],
		            	   flex: 6
		               },
		               {
		            	   xtype: 'summary',
		            	   region: 'south',
		            	   split: true,
		            	   flex: 4,
		                   collapsible: true
		               }
		        ]
		    },{
		    	region: 'east',
		    	split: true,
		    	flex: .3,
		        layout: 'border',
		        items: [
		               {
		            	   xtype: 'tabpanel',
		            	   region: 'center',
		            	   items: [{
		            		   xtype: 'trends',
			                   collapsible: true
		            	   },{
		            		   xtype: 'documentterms',
			                   collapsible: true
		            	   }],
		            	   flex: 5
		               },
		               {
		            	   xtype: 'contexts',
		            	   region: 'south',
		            	   split: true,
		            	   flex: 5,
		                   collapsible: true
		               }
		        ]
		    }]
		});
		this.callParent(arguments);
	}
});