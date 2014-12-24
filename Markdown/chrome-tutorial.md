<div class="hidden"><meta property="og:image" content="http://the-dining-philosophers.github.io/code-weekend/assets/img/logo.png"><link rel="shortcut icon" href="assets/images/favicon.png"><link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"><link rel="stylesheet" href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' type='text/css'></div><img class="full-img" src="assets/img/logo.png">

Intro To Chrome Extensions
===========================

Here, we'll step through the process of creating a simple Chrome extension. At the end of this tutorial, you'll have a working Chrome extension that displays a list of links to your ten most recent bookmarks.

###The Basics
Every browser action Chrome extension has four fundamental parts:

- the manifest (written in JSON), 
- the HTML for the popup that shows up when you click the icon, 
- the JavaScript that runs when you click the icon, and 
- the icon (picture) itself. 

We'll go through each of these in further detail with regards to the Chrome extension we want to make. 
Browser action Chrome extensions are global and execute whenever the icon is clicked.

###The Manifest File
The manifest file can be seen as the "introduction" to your Chrome extension. It summarizes what it is, what it does, and what it needs. Chrome needs this manifest to know what your extension's name is, its associated icon, what permissions it will need, etc. 

Every manifest file starts with a declaration of the manifest version (2). Afterwards, it specifies the name and description, which are relatively self-explanatory. After that, since we want our Chrome extension to be a browser action extension, we specify that as well as the default icon and the HTML that will render our popup. Finally, we want to specify that we want permission to access Chrome's bookmarks.

###The HTML Popup
If you've ever done any web design, this should be pretty clear. Between the style tags, I put in some CSS to make the popup a bit prettier. It's definitely okay to link an external stylesheet if you'd like - I just chose to put it in the HTML because it was so short. Finally, you'll see at the very bottom that I linked in the JavaScript file using script tags - that will actually create the list of bookmarks.

###The JavaScript File
Here, you'll see that we created an ordered list and looped through the list of bookmarks to append the title of each link to the list. On click, we added a click listener that opens a new Chrome tab that will navigate to the link you clicked on.

###The Icon
The icon can technically be of any size, but Chrome encourages you to always provide a 128x128 pixel icon.

###Building The Extension
Great! We have all the necessary parts. Now to actually put them together into a working extension...

This is easier than you think. Navigate to your extensions page (type "chrome://extensions/" into your address bar) and check the box next to "Developer mode". This will create an extra line of three buttons - click "Load unpacked extension...". Now simply select the directory that all of your files are in and press "Select". This should load up your extension and the icon should show up in your browser's upper right corner! Click the icon to check that the popup is working correctly.

If not, Chrome Developer Tools will be your best friend. Right click your icon and select "Inspect popup". This will bring up the Chrome Dev Tools window, which provides you with tons of information and debugging help.

<div class="footer"><p>&copy; Dining Philosophers 2014. Page created by <a href="http://pvrnav.com">Pranav Vishnu Ramabhadran</a>.</div>

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="assets/js/nav.js"></script>
<script src="assets/js/FlowType.js"></script>
<script type="text/javascript">
    $('.markdown-body').flowtype({
        minimum   : 500,
        maximum   : 1000,
        minFont   : 16,
        maxFont   : 65,
        fontRatio : 40
    });
</script>
<script>
    $(window).load(function(){
        $('.loading').fadeOut('200');
    });
</script>