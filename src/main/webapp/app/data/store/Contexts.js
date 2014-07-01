Ext.define('Voyant.data.store.Contexts', {
	extend: 'Ext.data.Store',
	mixins: ['Voyant.util.Transferable','Voyant.notebook.util.Embeddable'],
    model: 'Voyant.data.model.Context',
//    transferable: ['setCorpus'],
//    embeddable: ['Voyant.panel.CorpusTerms','Voyant.panel.Cirrus'],
	config: {
		corpus: undefined
	},
	constructor : function(config) {
		
		config = config || {};
		
		// create proxy in constructor so we can set the Trombone URL
		Ext.apply(config, {
		     proxy: {
		         type: 'ajax',
		         url: Voyant.application.getTromboneUrl(),
		         extraParams: {
		        	 tool: 'corpus.Contexts',
		        	 corpus: config && config.corpus ? (Ext.isString(config.corpus) ? config.corpus : config.corpus.getId()) : undefined,
		        	 stripTags: config.stripTags
		         },
		         reader: {
		             type: 'json',
		             rootProperty: 'contexts.contexts'
		         },
		         simpleSortMode: true
		     }
		})
		
//    	this.mixins['Voyant.notebook.util.Embeddable'].constructor.apply(this, arguments);
		this.callParent([config]);

	},
	
	setCorpus: function(corpus) {
		if (corpus) {
			this.getProxy().setExtraParam('corpus', Ext.isString(corpus) ? corpus : corpus.getId());
		}
		this.callParent(arguments);
	}

});
