**Notice:** CookieNoticeJS is not under active development for the time being (and not GDPR compliant for what I know). Check  [AOEPeople fork](https://github.com/AOEpeople/cookie-notice) instead.

# CookieNoticeJS

**CookieNoticeJS** is a very simple and small *(→ 2 kB gzip)* vanilla JS script that provides an easy way to show that damn cookie notice on your website.
Simply add the following tag to your website footer:

```html
<script src="js/cookie.notice.min.js"></script>
```

And you will get a dismissable banner on the bottom of your pages showing a default cookie audit like the following:

> We use cookies to make sure you can have the best experience on our website. If you continue to use this site we assume that you will be happy with it.
    
Depending on the visitor browser language one of the preloaded translation will be shown. At the moment **CookieNoticeJS** supports *EN, IT, DE and FR*. If you want to contribute with an extra language do not hesitate to open an issue or a PR.

**CookieNoticeJS** has been succesfully tested on IE9+, Chrome, Firefox and Safari.

## Customize CookieNoticeJS

For the most of you including the script should be enough but **CookieNoticeJS** comes with many customization options. Let's see an example:

```html
<script src="js/cookie.notice.min.js"></script>
<script>
    new cookieNoticeJS({
    
       // Localizations of the notice message
       'messageLocales': {
         'it': 'Custom localized message'
       },
      
       // Localizations of the dismiss button text
       'buttonLocales': {
         'it': 'Chiudi'
       },
       
       // Position for the cookie-notifier (default=bottom)
       'cookieNoticePosition':'top',
       
       // Shows the "learn more button (default=false)
       'learnMoreLinkEnabled':false,
       
       // The href of the learn more link must be applied if (learnMoreLinkEnabled=true) 
       'learnMoreLinkHref':'/learn/more/index.html',
       
       // Text for optional learn more button
       'learnMoreLinkText':{
           'en':'learn more'
       },
       
       // The message will be shown again in X days
       'expiresIn': 30, 
       
       // Dismiss button background color
       'buttonBgColor': '#d35400',  
       
       // Dismiss button text color
       'buttonTextColor': '#fff', 
         
       // Notice background color
       'noticeBgColor': '#000', 
          
       // Notice text color
       'noticeTextColor': '#fff', 
       
       // the lernMoreLink color (default='#009fdd') 
       'linkColor':'#f00'
          
    });
</script>
```

#### Contributors
[Bernhard Behrendt](mailto:bernhard.behrendt@aoe.com) [@AOEpeople](https://github.com/AOEpeople)
