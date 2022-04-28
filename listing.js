jQuery(function ($) {
	
	//Categories
	$('#categories').append(''+
	        '  <ul class="lev1">'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ10799735017">Diamond Rings</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ10827438017">Engagement Ring Sets</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ10827449017">Wedding Bands</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ1053751017">Diamond Necklaces &amp; Pendants</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ1053750017">Diamond Earrings</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ10799736017">Loose Diamonds</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ10867756017">Weekly Deals</a></li>'+
	        '   <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ1">Other</a></li>'+
	        '  </ul>');
			

	// Footer
	var footer = '\n\r' +
	'<div class="footer">' +
    '  <div class="footer-logo-strip">' +
    '    <div class="footer-logo-strip-inner"><img alt="" src="http://isdiamondsestores.com/ebay/diamondstar/images/blank.gif"></div>' +
    '  </div>' +
    '  <div class="footer-bottom">' +
    '    <div class="footer-links_credit">' +
    '      <div class="footer-links">' +
    '        <ul>' +
    '          <li><a href="http://stores.ebay.com/diamondstar2015">Store home</a></li>' +
    '          <li><a href="http://contact.ebay.com/ws/eBayISAPI.dll?ContactUserNextGen&recipient=diamondstar2015">Contact us</a></li>' +
    '          <li><a href="http://stores.ebay.com/diamondstar2015/pages/about-us">About us</a></li>' +
    '          <li><a href="http://stores.ebay.com/diamondstar2015/pages/store-policy">Store policy</a></li>' +
    '          <li><a href="http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=diamondstar2015&refid=store&ssPageName=STORE:HTMLBUILDER:SIMPLEPAGE">Newsletter signup</a></li>' +
    '          <li><a href="http://stores.ebay.com/diamondstar2015/_i.html?rt=p4634.c0.m14&_sop=10">New arrivals</a></li>' +
    '          <li><a href="http://stores.ebay.com/diamondstar2015_W0QQfsubZ0">View all items</a></li>' +
    '        </ul>' +
    '        <div class="clear"></div>' +
    '      </div>' +
    '      <div class="footer-credit">All Imagery &amp; Content &copy; ' + currentyear.getFullYear() + ' Diamond Star. Design by: <a href="http://lilystardesign.com/" target="_blank" title="LillyStar - Professional and Affordable Web Design and Development"><img alt="LillyStar - Professional and Affordable Web Design and Development" src="http://isdiamondsestores.com/ebay/diamondstar/images/lilly.png"> LillyStar</a></div>' +
    '    </div>' +
    '    <div class="footer-logo"><a href="http://stores.ebay.com/diamondstar2015"><img alt="Diamond Star" src="http://isdiamondsestores.com/ebay/diamondstar/images/logo_footer.png"></a></div>' +
    '    <div class="clear"></div>' +
    '  </div>' +
    '</div>';
	if ($('.content-area').length > 0) { $('.content-area').after(footer); }
	
	});


//Policies Tabs
function tabSwitch(new_tab, new_content) {
	document.getElementById('polcontent1').style.display = 'none';  
    document.getElementById('polcontent2').style.display = 'none';  
    document.getElementById('polcontent3').style.display = 'none'; 
	document.getElementById('polcontent4').style.display = 'none';  
    document.getElementById('polcontent5').style.display = 'none';

    document.getElementById(new_content).style.display = 'block';     
  
    document.getElementById('poltab1').className = '';  
    document.getElementById('poltab2').className = '';  
    document.getElementById('poltab3').className = '';  
	document.getElementById('poltab4').className = '';  
    document.getElementById('poltab5').className = '';
    document.getElementById(new_tab).className = 'polactive'; 
	}