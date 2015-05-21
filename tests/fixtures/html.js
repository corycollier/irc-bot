var html = { 
  bad :  {
    expected : "", 
    body     : 'bad stuff' 
  },  
  good : { 
    expected : "", 
    body     : '<!DOCTYPE html> ' +  
'<html lang="en"> ' +  
'    <head> ' +  
'        <meta charset="utf-8"> ' +  
'        <link rel="shortcut icon" href="http://alpha.wallhaven.cc/favicon.ico" /> ' +  
'                 ' +  
'            <title>Latest Wallpapers - wallhaven.cc</title> ' +  
'            <meta name="title" content="Latest Wallpapers"> ' +  
'            <meta name="description" ' +  
'                  content="Recently uploaded Wallpapers"> ' +  
'                         ' +  
'            <link rel="search" type="application/opensearchdescription+xml" ' +  
'                  title="wallhaven.cc wallpaper search" href="http://alpha.wallhaven.cc/openSearch/wallpapers" /> ' +  
'             ' +  
'            <link media="all" type="text/css" rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"> ' +  
' ' +  
'            <link media="all" type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Montserrat:400,700"> ' +  
' ' +  
'            <link media="all" type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,700"> ' +  
' ' +  
'                                     ' +  
'            <link media="all" type="text/css" rel="stylesheet" href="//static.wallhaven.cc/assets/build.min.css"> ' +  
' ' +  
'             ' +  
'             ' +  
'                        <script> ' +  
'  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){ ' +  
'  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), ' +  
'  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) ' +  
'  })(window,document,"script","//www.google-analytics.com/analytics.js","ga"); ' +  
' ' +  
'  ga("create", "UA-1164114-11", "auto"); ' +  
'  ga("send", "pageview"); ' +  
' ' +  
'</script> ' +  
'            </head> ' +  
'    <body class="base"> ' +  
' ' +  
'                                <header id="header"><nav><h1><a href="http://alpha.wallhaven.cc"><img src="//static.wallhaven.cc/images/layout/logo_sm.png" alt="wallhaven"><span>Wallhaven</span></a></h1><div id="userpanel" class="logged-in"><span id="welcome"><span class="welcome-text">Welcome back,</span><a id="usermenu-toggle" class="jsAnchor"><span class="username usergroup-2">corycollier</span><i class="fa fa-fw fa-caret-down"></i></a><a href="http://alpha.wallhaven.cc/subscription"><small class="new-subscriptions" title="You have 92 new subscription notices"><i class="fa fa-fw fa-inbox"></i><span>92</span></small></a></span><nav id="usermenu"><div class="usermenu-info"><a  href="http://alpha.wallhaven.cc/user/corycollier" ' +  
'            class="avatar no-avatar" ' +  
'            ></a><div class="user usergroup-2"><a class="username usermenu-section-title" href="http://alpha.wallhaven.cc/user/corycollier">corycollier</a><small class="groupname">User</small></div><div class="usermenu-stats"><a  title="You have 0 uploads" ' +  
'                href="http://alpha.wallhaven.cc/user/corycollier/uploads"><i class="fa fa-upload"></i> ' +  
'                0 ' +  
'            </a><span class="sep"></span><a  title="You have 73 favorites" ' +  
'                href="http://alpha.wallhaven.cc/favorites"><i class="fa fa-star"></i> ' +  
'                73 ' +  
'            </a><span class="sep"></span><a  title="You have 0 subscribers" ' +  
'                href="http://alpha.wallhaven.cc/user/corycollier/subscribers" ' +  
'                class="overlay-anchor"><i class="fa fa-bookmark"></i> ' +  
'                0 ' +  
'            </a></div><div class="usermenu-links"><a href="http://alpha.wallhaven.cc/user/corycollier">My Profile</a><span class="sep">·</span><a href="http://alpha.wallhaven.cc/settings/profile">Edit Profile</a></div></div><div class="usermenu-section"><span class="usermenu-section-title"><i class="fa fa-fw fa-picture-o"></i> ' +  
'            Wallpapers ' +  
'        </span><div class="usermenu-links"><a href="http://alpha.wallhaven.cc/favorites">Favorites</a><span class="sep">·</span><a href="http://alpha.wallhaven.cc/subscription">Subscriptions</a><span class="sep">·</span><a href="http://alpha.wallhaven.cc/user/corycollier/uploads">Uploads</a></div></div><div class="usermenu-section"><span class="usermenu-section-title"><i class="fa fa-fw fa-cog"></i> ' +  
'            Settings ' +  
'        </span><div class="usermenu-links"><a href="http://alpha.wallhaven.cc/settings/browsing">Browsing</a><span class="sep">·</span><a href="http://alpha.wallhaven.cc/settings/privacy">Privacy</a><span class="sep">·</span><a href="http://alpha.wallhaven.cc/settings/account">Account</a></div></div><div class="usermenu-section"><span class="usermenu-section-title"><i class="fa fa-fw fa-envelope"></i> ' +  
'            Messages ' +  
'        </span><div class="usermenu-links"><a href="http://alpha.wallhaven.cc/messages">Inbox</a><span class="sep">·</span><a href="http://alpha.wallhaven.cc/messages/compose" class="overlay-anchor">New Message</a></div></div><div class="usermenu-section logout"><a href="http://alpha.wallhaven.cc/auth/logout"><i class="fa fa-fw fa-sign-out"></i> ' +  
'            Logout ' +  
'        </a></div></nav></div><ul id="topmenu"><li><a class="latest" href="http://alpha.wallhaven.cc/latest"><i class="fa fa-lg fa-clock-o"></i><span>Latest</span></a></li><li><a class="random" href="http://alpha.wallhaven.cc/random"><i class="fa fa-lg fa-random"></i><span>Random</span></a></li><li><a class="upload" href="http://alpha.wallhaven.cc/upload"><i class="fa fa-lg fa-upload"></i><span>Upload</span></a></li><li><a class="comments" href="http://alpha.wallhaven.cc/comments"><i class="fa fa-lg fa-comments-o "></i><span>Comments</span></a></li><li><a class="search jsAnchor" id="searchbar-toggle"><i class="fa fa-lg fa-search"></i><span>Search</span></a></li></ul></nav></header>             ' +  
'     ' +  
'     ' +  
' ' +  
' ' +  
' ' +  
'<div id="searchbar" ><form method="GET" action="http://alpha.wallhaven.cc/search" accept-charset="UTF-8" id="search"><fieldset class="oneline framed"><div><input type="search" id="search-text" name="q" ' +  
'                       placeholder="Search..." value=""/></div><button><i class="fa fa-search"></i></button></fieldset><fieldset id="search-category-checks" class="framed"><input id="search-general" checked="checked" name="general" type="checkbox" value="general"><label for="search-general">General</label><input id="search-anime" checked="checked" name="anime" type="checkbox" value="anime"><label for="search-anime">Anime</label><input id="search-people" checked="checked" name="people" type="checkbox" value="people"><label for="search-people">People</label></fieldset><fieldset id="search-purity-checks" class="framed"><input id="search-sfw" checked="checked" name="sfw" type="checkbox" value="sfw"><label class="purity sfw" for="search-sfw">SFW</label><input id="search-sketchy" checked="checked" name="sketchy" type="checkbox" value="sketchy"><label class="purity sketchy" for="search-sketchy">Sketchy</label><input id="search-nsfw" checked="checked" name="nsfw" type="checkbox" value="nsfw"><label class="purity nsfw" for="search-nsfw">NSFW</label></fieldset><fieldset id="search-resolutions" class="framed"><a class="jsAnchor dropdown-toggle collapsed">Resolution</a><div class="dropdown collapsed"><div><input id="res-1024x768" class="resolution" name="resolution" type="checkbox" value="1024x768"><label style="display: block" for="res-1024x768"> ' +  
'                            1024x768 ' +  
'                                                    </label><input id="res-1280x800" class="resolution" name="resolution" type="checkbox" value="1280x800"><label style="display: block" for="res-1280x800"> ' +  
'                            1280x800 ' +  
'                                                    </label><input id="res-1366x768" class="resolution" name="resolution" type="checkbox" value="1366x768"><label style="display: block" for="res-1366x768"> ' +  
'                            1366x768 ' +  
'                                                    </label><input id="res-1280x960" class="resolution" name="resolution" type="checkbox" value="1280x960"><label style="display: block" for="res-1280x960"> ' +  
'                            1280x960 ' +  
'                                                    </label><input id="res-1440x900" class="resolution" name="resolution" type="checkbox" value="1440x900"><label style="display: block" for="res-1440x900"> ' +  
'                            1440x900 ' +  
'                                                    </label><input id="res-1600x900" class="resolution" name="resolution" type="checkbox" value="1600x900"><label style="display: block" for="res-1600x900"> ' +  
'                            1600x900 ' +  
'                                                    </label><input id="res-1280x1024" class="resolution" name="resolution" type="checkbox" value="1280x1024"><label style="display: block" for="res-1280x1024"> ' +  
'                            1280x1024 ' +  
'                                                    </label><input id="res-1600x1200" class="resolution" name="resolution" type="checkbox" value="1600x1200"><label style="display: block" for="res-1600x1200"> ' +  
'                            1600x1200 ' +  
'                                                    </label><input id="res-1680x1050" class="resolution" name="resolution" type="checkbox" value="1680x1050"><label style="display: block" for="res-1680x1050"> ' +  
'                            1680x1050 ' +  
'                                                    </label><input id="res-1920x1080" class="resolution" name="resolution" type="checkbox" value="1920x1080"><label style="display: block" for="res-1920x1080"> ' +  
'                            1920x1080 ' +  
'                                                            <small>Full HD</small></label><input id="res-1920x1200" class="resolution" name="resolution" type="checkbox" value="1920x1200"><label style="display: block" for="res-1920x1200"> ' +  
'                            1920x1200 ' +  
'                                                    </label><input id="res-2560x1440" class="resolution" name="resolution" type="checkbox" value="2560x1440"><label style="display: block" for="res-2560x1440"> ' +  
'                            2560x1440 ' +  
'                                                    </label><input id="res-2560x1600" class="resolution" name="resolution" type="checkbox" value="2560x1600"><label style="display: block" for="res-2560x1600"> ' +  
'                            2560x1600 ' +  
'                                                    </label><input id="res-3840x1080" class="resolution" name="resolution" type="checkbox" value="3840x1080"><label style="display: block" for="res-3840x1080"> ' +  
'                            3840x1080 ' +  
'                                                    </label><input id="res-5760x1080" class="resolution" name="resolution" type="checkbox" value="5760x1080"><label style="display: block" for="res-5760x1080"> ' +  
'                            5760x1080 ' +  
'                                                    </label><input id="res-3840x2160" class="resolution" name="resolution" type="checkbox" value="3840x2160"><label style="display: block" for="res-3840x2160"> ' +  
'                            3840x2160 ' +  
'                                                            <small>4k UHD-1</small></label></div></div></fieldset><fieldset id="search-ratios" class="framed"><a class="jsAnchor dropdown-toggle collapsed">Ratio</a><div class="dropdown collapsed"><div><input id="ratio-4x3" class="ratio" name="ratio" type="checkbox" value="4x3"><label style="display: block" for="ratio-4x3">4x3</label><input id="ratio-5x4" class="ratio" name="ratio" type="checkbox" value="5x4"><label style="display: block" for="ratio-5x4">5x4</label><input id="ratio-16x9" class="ratio" name="ratio" type="checkbox" value="16x9"><label style="display: block" for="ratio-16x9">16x9</label><input id="ratio-16x10" class="ratio" name="ratio" type="checkbox" value="16x10"><label style="display: block" for="ratio-16x10">16x10</label><input id="ratio-32x9" class="ratio" name="ratio" type="checkbox" value="32x9"><label style="display: block" for="ratio-32x9">32x9</label><input id="ratio-48x9" class="ratio" name="ratio" type="checkbox" value="48x9"><label style="display: block" for="ratio-48x9">48x9</label></div></div></fieldset><fieldset class="oneline framed"><div><select id="search-sorting" title="Sorting"><option value="relevance" > ' +  
'                        Relevance ' +  
'                    </option><option value="random" > ' +  
'                        Random ' +  
'                    </option><option value="date_added" selected="selected"> ' +  
'                        Date Added ' +  
'                    </option><option value="views" > ' +  
'                        Views ' +  
'                    </option><option value="favorites" > ' +  
'                        Favorites ' +  
'                    </option></select></div><input id="search-order" checked="checked" name="order" type="checkbox" value="desc"><label class="oneline-icon-button" for="search-order"></label></fieldset><button class="button" id="search-submit"><i class="fa fa-refresh fa-fw"></i></button></form></div><!--#searchbar-->         ' +  
'        <a id="top"></a> ' +  
' ' +  
'        <div id="wrapper"> ' +  
'            <main id="main"> ' +  
'                                     ' +  
'                                         ' +  
'                                         ' +  
'                                                                                     ' +  
'                        <header class="listing-header"> ' +  
'        <h1><i class="fa fa-clock-o latest"></i> Latest</h1> ' +  
'        <h2>These Wallpapers have been recently uploaded by our awesome community.</h2> ' +  
'    </header> ' +  
'        <div id="thumbs" ' +  
'        class="thumbs-container thumb-listing infinite-scroll"> ' +  
'        <section class="thumb-listing-page"><header> ' +  
'                Page <span class="thumb-listing-page-num">1</span> / 3064 ' +  
'                <a class="icon to-top" href="#top" title="Back to top"><i class="fa fa-lg fa-chevron-up"></i></a></header><ul><li><figure class="thumb purity-sketchy" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209229"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209229.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209229"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            9856 x 6442 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209229/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209229/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209228"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209228.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209228"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209228/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209228/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209227"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209227.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209227"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209227/favorites" ' +  
'               >5 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209227/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sketchy" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209226"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209226.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209226"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209226/favorites" ' +  
'               >6 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209226/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209225"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209225.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209225"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209225/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209224"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209224.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209224"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4800 x 3188 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209224/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209223"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209223.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209223"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            3300 x 1909 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209223/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209223/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209222"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209222.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209222"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2048 x 1334 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209222/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209220"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209220.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209220"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209220/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209219"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209219.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209219"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1600 x 1067 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209219/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209219/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209218"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209218.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209218"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4928 x 3264 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209218/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209217"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209217.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209217"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1024 x 768 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209217/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209217/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209216"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209216.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209216"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1600 x 1212 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209216/favorites" ' +  
'               >3 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209216/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209213"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209213.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209213"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2560 x 1440 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209213/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209213/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209212"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209212.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209212"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209212/favorites" ' +  
'               >4 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209212/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209215"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209215.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209215"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2560 x 1600 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209215/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209215/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209214"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209214.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209214"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209214/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209214/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209209"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209209.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209209"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209209/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209209/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209211"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209211.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209211"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2560 x 1600 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209211/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209211/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209208"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209208.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209208"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209208/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209208/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209210"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209210.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209210"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209210/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209210/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209201"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209201.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209201"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209201/favorites" ' +  
'               >3 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209201/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209206"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209206.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209206"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209206/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209205"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209205.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209205"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209205/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209204"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209204.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209204"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209204/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209204/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209203"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209203.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209203"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209203/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209203/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209202"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209202.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209202"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209202/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209202/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209207"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209207.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209207"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209207/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209198"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209198.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209198"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1200 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209198/favorites" ' +  
'               >8 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209198/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sketchy" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209200"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209200.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209200"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209200/favorites" ' +  
'               >14 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209200/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209199"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209199.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209199"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209199/favorites" ' +  
'               >9 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209199/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209197"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209197.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209197"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209197/favorites" ' +  
'               >9 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209197/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sketchy" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209196"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209196.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209196"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209196/favorites" ' +  
'               >4 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209196/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209195"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209195.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209195"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1200 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209195/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle " ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209195/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209194"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209194.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209194"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209194/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209194/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209193"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209193.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209193"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2000 x 1326 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209193/favorites" ' +  
'               >4 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209193/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209192"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209192.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209192"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2115 x 1516 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209192/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209192/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209191"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209191.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209191"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2500 x 1910 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209191/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209191/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209189"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209189.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209189"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209189/favorites" ' +  
'               >3 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209189/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209190"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209190.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209190"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2500 x 1846 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209190/favorites" ' +  
'               >4 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209190/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209188"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209188.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209188"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2560 x 1554 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209188/favorites" ' +  
'               >5 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209188/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209187"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209187.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209187"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1872 x 1300 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209187/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209186"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209186.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209186"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            3461 x 2829 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209186/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209186/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209185"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209185.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209185"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1935 x 1315 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209185/favorites" ' +  
'               >6 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209185/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209184"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209184.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209184"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2880 x 1800 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209184/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209184/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209183"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209183.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209183"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2880 x 1800 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209183/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sketchy" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209182"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209182.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209182"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1280 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209182/favorites" ' +  
'               >8 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209182/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209181"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209181.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209181"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4800 x 3188 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209181/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209181/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209180"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209180.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209180"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2000 x 1333 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209180/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209180/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209179"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209179.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209179"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1080 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209179/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209178"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209178.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209178"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2560 x 1600 ' +  
'        </span><span class="wall-favs">0 <i class="fa fa-star"></i></span><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209178/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209177"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209177.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209177"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2048 x 1367 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209177/favorites" ' +  
'               >11 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209177/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209176"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209176.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209176"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1200 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209176/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209176/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209175"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209175.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209175"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1978 x 1331 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209175/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209175/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209174"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209174.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209174"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1920 x 1200 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209174/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209174/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209173"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209173.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209173"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1978 x 1331 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209173/favorites" ' +  
'               >1 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209173/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209172"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209172.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209172"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            2048 x 1368 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209172/favorites" ' +  
'               >4 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209172/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209171"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209171.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209171"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1986 x 1331 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209171/favorites" ' +  
'               >8 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209171/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209170"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209170.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209170"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1978 x 1331 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209170/favorites" ' +  
'               >3 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209170/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209169"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209169.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209169"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            1936 x 1284 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209169/favorites" ' +  
'               >5 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209169/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209168"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209168.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209168"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4000 x 2538 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209168/favorites" ' +  
'               >8 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209168/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209167"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209167.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209167"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4000 x 2545 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209167/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209167/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-nsfw" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209166"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209166.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209166"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4000 x 2541 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209166/favorites" ' +  
'               >3 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209166/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li><li><figure class="thumb purity-sketchy" ' +  
'    style="width:300px;height:200px" ' +  
'    ><a  class="fav jsAnchor overlay-anchor" ' +  
'            title="Add to favorites" ' +  
'            href="http://alpha.wallhaven.cc/favorites/quickFavForm/209165"><i class="fa fa-star"></i></a><img alt="loading" ' +  
'            class="lazyload" ' +  
'            data-src="http://alpha.wallhaven.cc/wallpapers/thumb/small/th-209165.jpg" ' +  
'            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ' +  
'            ><a class="preview" href="http://alpha.wallhaven.cc/wallpaper/209165"  ' +  
'                    target="_blank"  ' +  
'                ></a><div class="wall-info"><span class="wall-res"> ' +  
'            4000 x 2538 ' +  
'        </span><a class="overlay-anchor wall-favs " ' +  
'               href="http://alpha.wallhaven.cc/wallpaper/209165/favorites" ' +  
'               >2 <i class="fa fa-star"></i></a><a  class="jsAnchor thumb-tags-toggle tagged" ' +  
'            title="Tags" ' +  
'            href="http://alpha.wallhaven.cc/wallpaper/209165/thumbTags" ' +  
'            ><i class="fa fa-tags"></i></a></div></figure></li></ul></section>        <ul class="pagination" data-pagination="{&quot;total&quot;:3064,&quot;current&quot;:1,&quot;url&quot;:&quot;http:\/\/alpha.wallhaven.cc\/latest?page=1&quot;}"> ' +  
'        <li><span title="Previous Page"><i class="fa fa-angle-double-left"></i></span></li><li class="current"><span title="Page 1">1</span></li><li><a title="Page 2" href="http://alpha.wallhaven.cc/latest?page=2">2</a></li><li><a title="Page 3" href="http://alpha.wallhaven.cc/latest?page=3">3</a></li><li><a title="Page 4" href="http://alpha.wallhaven.cc/latest?page=4">4</a></li><li><a title="Page 5" href="http://alpha.wallhaven.cc/latest?page=5">5</a></li><li><a title="Page 6" href="http://alpha.wallhaven.cc/latest?page=6">6</a></li><li><a title="Page 7" href="http://alpha.wallhaven.cc/latest?page=7">7</a></li><li><a title="Page 8" href="http://alpha.wallhaven.cc/latest?page=8">8</a></li><li><span title="Page 1">...</span></li><li><a title="Page 3063" href="http://alpha.wallhaven.cc/latest?page=3063">3063</a></li><li><a title="Page 3064" href="http://alpha.wallhaven.cc/latest?page=3064">3064</a></li><li><a href="http://alpha.wallhaven.cc/latest?page=2" rel="next" class="next"><i class="fa fa-angle-double-right"></i></a></li>    </ul> ' +  
' ' +  
'    </div> ' +  
' ' +  
'                      ' +  
'                            </main> ' +  
' ' +  
'                            <footer id="footer"> ' +  
'    <a class="to-top" href="#top" title="Back to top"><i class="fa fa-lg fa-chevron-up"></i></a><p class="copyright"><a href="http://alpha.wallhaven.cc/about#Copyright">All images remain property of their original owners.</a> ' +  
'        Site &amp; code &copy; <a href="http://alpha.wallhaven.cc">wallhaven.cc</a> 2015. ' +  
'    </p><p class="social"><a title="Facebook" href="http://facebook.com/wallhavencc" target="_blank"><i class="fa fa-lg fa-facebook"></i></a><a title="Google+" href="https://google.com/+WallhavenCcc" target="_blank"><i class="fa fa-lg fa-google-plus"></i></a><a title="Twitter" href="http://twitter.com/wallhaven" target="_blank"><i class="fa fa-lg fa-twitter"></i></a><a class="irc" title="IRC" target="_blank" ' +  
'           href="https://qchat.rizon.net/?channels=#wallhaven&amp;nick=corycollier"><!-- <i class="icon irc"></i> --><i class="fa fa-lg fa-comments"></i><span class="channel">#wallhaven</span><span class="server">irc.rizon.net</span></a><a class="irc-direct" title="IRC Direct" ' +  
'                href="irc://irc.rizon.net/wallhaven"><i class="fa fa-slack"></i><i class="fa fa-exclamation"></i></a></p><nav class="footermenu"><a href="http://alpha.wallhaven.cc/upload">upload</a><a href="http://alpha.wallhaven.cc/latest">latest</a><a href="http://alpha.wallhaven.cc/tags">tags</a><a href="http://alpha.wallhaven.cc/comments">comments</a><a href="http://alpha.wallhaven.cc/about">about</a><a href="http://alpha.wallhaven.cc/faq">faq</a><a href="http://alpha.wallhaven.cc/rules">rules</a><a href="http://alpha.wallhaven.cc/team">team</a><a href="http://alpha.wallhaven.cc/contact">contact</a></nav></footer> ' +  
'                    </div> ' +  
' ' +  
'            <span class="ribbon ribbon-bottom-right ribbon-red">Alpha</span> ' +  
'            <div id="overlay" class="overlay-hidden"> ' +  
'    <section class="overlay-inner"> ' +  
'         ' +  
'<header> ' +  
'    <h1>Message</h1> ' +  
'    <a class="jsAnchor overlay-close" id="overlay-close" title="Close"> ' +  
'        <i class="fa fa-times"></i> ' +  
'    </a> ' +  
'</header> ' +  
'<div class="overlay-content"> ' +  
'    </div> ' +  
' ' +  
'    </section> ' +  
'</div> ' +  
'         ' +  
'                 ' +  
'        <script src="//code.jquery.com/jquery-2.1.3.js"></script> ' +  
' ' +  
'                <script src="//static.wallhaven.cc/assets/build.min.js"></script> ' +  
' ' +  
'         ' +  
'         ' +  
'        <script>/*<![CDATA[*/ ' +  
'            (function(wh, $, undefined) { ' +  
'                 ' +  
'                "use strict"; ' +  
'                 ' +  
'                                                     ' +  
'                    // hide notifications after 5 seconds and on click ' +  
'                    var $notifications = $("#notifications"), ' +  
'                        removeNotifications = function() { ' +  
'                            $notifications.fadeOut().remove(); ' +  
'                        }; ' +  
'                    setTimeout(removeNotifications, 5000); ' +  
'                    $notifications.one("click", removeNotifications); ' +  
'                     ' +  
'                                 ' +  
'                                 ' +  
'            })(wallhaven, jQuery); ' +  
'        /*]]>*/</script> ' +  
'    </body> ' +  
'</html> '
  }  
};

module.exports = html;