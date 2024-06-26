function trackecommerce(tracking_code,order_id, product_name, email, phone){
	  var lead_category=window.location.href;
	  var transaction="";
	  if(email!=null && email!="" && email!= "null" && email != undefined){
		 transaction += "email:"+email;
	  }
	  if(phone!=null && phone!="" && phone!= "null" && phone != undefined){
		 transaction += " phone:"+phone;
	  }
	  if(typeof _gat != 'undefined'){
		  var pageTracker = _gat._getTracker(tracking_code);
		  pageTracker._trackPageview();
		  pageTracker._addTrans(transaction, 'Website','1', '1', '1', 'A','A','A');
		  pageTracker._addItem(transaction, transaction, product_name, lead_category, '1', '1');
		  pageTracker._trackTrans();
	  }else{
		  if(typeof ga === 'function'){
                 try{
                         ga('ecommerce:addTransaction', {id: transaction, affiliation: 'Website', revenue: '1', shipping: '1', tax: '1' });
                         ga('ecommerce:addItem', { id: transaction, sku: transaction, name: product_name, category: lead_category, price: '1', quantity: '1'});
                         ga('ecommerce:send');
                 }catch(e){
                         
                 }
		  }
	  }
	
}

function trackanalyticsevent(tracking_code,category, action, name){  
		  try{
		  	if(typeof _gat != 'undefined'){
				var pageTracker = _gat._getTracker(tracking_code);
				pageTracker._trackPageview();
				pageTracker._trackEvent(category,action,name);
			  }else{
				  if(typeof ga === 'function'){
	              	ga('send', 'event', category, action, name); 
				  }
			  }  
		}catch(e){
			
		}
	   	  
}

document.onclick = function(event) {    	
	try{
		var el = event.target;
		var category = el.getAttribute('data-event-category');
		var action = el.getAttribute('data-event-action'); 
		var name = el.getAttribute('data-event-name'); 
		if(category != undefined && action!=undefined && name != undefined){		
			if(typeof _gat != 'undefined'){
			  _gaq.push(['_trackEvent', category, action, name]);								
			}else{   
				if(typeof ga === 'function'){ 
					try{
			  			ga('send', 'event', category, action, name);   
			       }catch(e){
                         
                   }
				}
			}
		}
	}catch(e){
		
	}
};
