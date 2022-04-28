jQuery(function ($) {
	//$(document).bind('contextmenu',function(){return false;}); 
    $('.pagecontainer > table:eq(1)').addClass('wrapper');
    $('.pagecontainer > table:eq(1) tr:first > td:first').addClass('container');
    $('.container > table:eq(1)').addClass('content-area');
    $('.content-area').find('br[clear = none]').remove();
	$('.content-area > tbody > tr:first').remove();
	$('.content-area > tbody > tr:first > td:nth-child(2)').attr('width', 8);
    $('.content-area > tbody > tr:first > td:nth-child(2) img').attr('width', 8);
	//$('.search-inner > form').attr('action', 'http://stores.ebay.com/STORENAME');
	$('.fitem .fixed tbody tr:nth-child(2)').remove();
	$('.fitem .fixed tbody tr:nth-child(2)').remove();
	$('#CentralArea .r3 .grid tr td.left').before('<td><img alt="" src="http://isdiamondsestores.com/ebay/diamondstar/images/blank.gif" width="10"></td>');
	$('.fitem table.gallery tbody tr:nth-child(2)').remove();
	
    $('.fitem .image').children().each(function () {
    $(this).html(function (i, html) {
        return $(this).html().replace(/80.jpg/g, '160.jpg');
    });
    });

    //Phone
	//$('.phone').append('');
    
    // Store Categories
    if ($('#categories').length > 0) {
        if ($('#LeftPanel .lcat').length > 0) {
            $('#categories').html($('#LeftPanel .lcat').html());
        }
    }
	
	// Featrured Items
    $('.fitem .details .g-std a').text(function (index, text) {
        return text.substr(0, 40) + '...';
    });
	
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