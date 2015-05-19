# CookieNoticeJS

CookieNoticeJS is a very simple and small (→ 1.39 kB gzip) vanilla JS script that provides an easy way to show that damn cookie notice on your website.
Simply add the following tag to your website footer:

```html
<script src="js/cookie.notice.min.js"></script>
```

And you will get a dismissable banner on the bottom of your pages showing a default cookie audit like the following:

    We use cookies to make sure you can have the best experience on our website. If you continue to use this site we assume that you will be happy with it.
    
Depending on the visitor browser language one of the preloaded translation will be shown. At the moment CookieNoticeJS supports EN, IT, DE and FR. If you want to contribute with an extra language do not hesitate to open an issue or a PR.

For the most of you this should be enough but CookieNoticeJS comes with many customization options. Let's see an example:

```html
<script src="js/cookie.notice.min.js"></script>
<script>
    new CookieNoticeJS({
    
       // Localizations of the notice message
       'messageLocales': {
           'it': 'Utilizziamo i cookie per essere sicuri che tu possa avere la migliore esperienza sul nostro sito. Se continui ad utilizzare questo sito assumiamo che tu ne sia felice.',
       },
      
       // Localizations of the dismiss button text
       'buttonLocales': {
           'it': 'Chiudi'
       },
       
       // Days
       'expiresIn': 30, 
       
       // Dismiss button background color
       'buttonBgColor': '#d35400',  
       
       // Dismiss button text color
       'buttonTextColor': '#fff', 
         
       // Notice background color
       'noticeBgColor': '#000', 
          
       // Notice text color
       'noticeTextColor': '#fff' 
          
    });
</script>
```