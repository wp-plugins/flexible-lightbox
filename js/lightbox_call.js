$(function() {		   
	$('a.lightbox').lightBox({   
							 imageLoading:path+'lightbox-ico-loading.gif',		
			                 imageBtnPrev:path+'lightbox-btn-prev.gif',			
			                 imageBtnNext:path+'lightbox-btn-next.gif',
			                 imageBtnClose:path+'lightbox-btn-close.gif',
			                 imageBlank:path+'lightbox-blank.gif'
							 });	
	
	$('.gallery a').lightBox({   
							 imageLoading:path+'lightbox-ico-loading.gif',		
			                 imageBtnPrev:path+'lightbox-btn-prev.gif',			
			                 imageBtnNext:path+'lightbox-btn-next.gif',
			                 imageBtnClose:path+'lightbox-btn-close.gif',
			                 imageBlank:path+'lightbox-blank.gif'
							 })
});
