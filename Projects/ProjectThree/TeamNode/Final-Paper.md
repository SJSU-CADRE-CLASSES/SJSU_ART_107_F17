# Faken’et

![gallery-gif](https://i.imgur.com/Y043hfj.gif)

Living in the digital age is as good as it is bad. Media is constantly evolving and improving. The latest news travels in a blink of an eye across continents. It is noteworthy that the content can be produced and shared by social network users in addition to journalists worldwide. Conversely, many negative aspects exist in this context as well. For instance, the information can be deliberately or unintentionally distorted as quickly as it can be made available to us. 

Our goal in this project is to provide an experience in a secure, personal and independent network. In this cyberspace, there is no dictatorship and user or content monitoring. Faken’et includes six sections: the networking, four hosted webpages (Geeglo, Mesh News, Fakebook & Yentnbo) and the gallery installation.


### + Networking:

Using a Raspberry Pi 3, we created a portable web server, that could be deployed anywhere, with a WiFi hotspot around it which would be used to instantly share information, without the need of an Internet connection. Additionally, we assigned IPs to the hotspot users and redirected all of their requests to the local pages we uploaded onto our *lighttpd* web server by utilizing the *dnsmasq*. The Raspberry Pi wireless access point that we set up will be shown in the users’ wireless network settings. After they connect to the access point(Fake-WiFi), no matter where they point their web browser, it will always direct them to the pages hosted on the Pi.

Since our web server does not have an Internet connection, users get many error pages while trying to browse the Internet, specifically for websites hosted on secured servers for instance “__https__://example.com". We expanded on this concept and created more error pages within the hosted content to portray how a limited internet restricts the boundaries a user can explore within our physical web space.

![Fake-WiFi](https://i.imgur.com/8H8dm9U.png)


### + Geeglo:

Here, we wanted to represent the fear of being controlled on getting information, how easy it could be to make the participants think beyond the internet, how we can trust a certain system, or a service, or an engine we used based on the internet, and what will happen when that trust disappears. In fact, this circumstance commonly exists in the world; authoroties that have the power to control the media, definitely do it for their own sake. The so-called “political needs”, are hiding or twisting the truth from the audience in ways.

In Geeglo(fake google website), you will experience what it will be like if the whole searching process is under control. Whatever you type in and search for, the result will only be “Page Not Found”. Additionally, your alternative search results will only connect to a fake news site, a fake social media platform and a fake video channel. We want the users to think about the issues of internet based media when they are looking deeper into it, because right now all the information shown is intentionally given by “someone”, based on whatever purpose and they are not giving access to results the user was initially trying to recieve. 

![Geeglo-Screenshot](https://github.com/ablanton/SJSU_ART_107_F17/blob/93091ed9c25a95c8b086f0f14d9b3a9bed3b5779/Projects/ProjectThree/TeamNode/Geegle/Documentation/Geeglo.jpg)

![Geeglo-Screenshot](https://media.giphy.com/media/3o6fIW1lBLHWahvjAA/giphy.gif)



### + Mesh News:

The idea of having a fake news website, came to existence by thinking about how some media outlets have different approaches in presenting certain news according to their bias. Those media, filter and manipulate the original news for their own reasons mainly rooted in censorship. Conservative governments or individuals with a beneficial mindset are responsible for much of this fake news being spread all over the news and social media. As a result, the public is exposed to a mixture of shady news with no evidence for their authenticity. This confusion inspired us to create a fake news website.

For our fake news webpage, we started to create a fake version of a familiar news agency. The logo and layout are also inspired by the BBC news. In our fake news agency, the news covers three main hot regions of the world: The Far east, the west, and the middle east. What we did was mess around with articles and headlines of current affairs in those regions (china, us middle east).

Initially, we began to search for the fake news to find the best way to twist the news. Based on the idea of manipulating original newscast, we decided to take some excised news and look at them from a biased subjective point of view then the distortion would happen. After doing some research we came across with the “Snopes” website as a platform for validating real and fake news. In that website, you can easily search for the key word to find related news. Then it evaluates the originality of the news. What we did was use the most controversial news related to our three regions and choose articles that were totally recognized by Snopes as fake and mesh them alongside each other onto our news website.

![MeshNews-Screenshot](https://i.imgur.com/otJIM5K.jpg)


### + Fakebook:

Facebook is the most dominant social media platform worldwide. In terms of easy access with email confirmation, our group decided to create a fake replica of this application called *Fakebook*. While creating the Fakebook page, our intention was to create a familiar style from the original resource, however we included our twist that showed obvious fake qualities. The users of this page were exposed to other capabilities not allowed in the original Facebook. These features ranged from built-in dating applications to access of those that don’t want to be friends with the user.

The images and logos were modified and recreated, to create the content desired. In addition, the size of the web pages were modified to only fit mobile screens since our gallery installation was designed specifically for mobile users.

![Fakebook-Screenshot](link to image goes here)


### + YenTnbo:

YenTnbo is a parody of the famous video website YouTube. YouTube is a milestone of internet censorship in many countries. However in North America, YouTube is completely accessible. Since the videos on YouTube are mostly created by it's users in  countries all around the world, it gives an overview of how life is in those places. Few years after the launch of YouTube, because more and more sensitive political content was uploaded, it become inaccessible to a number of countries by IP blocking.

In that result, YenTnbo is modified from the mobile version of YouTube website. Users can see different titles of the video showing on the home page. Some video titles relate to different sensitive topics and the users are not able to access those videos; they will be navigated to a 404 page. The videos without sensitive contents are all accessible. Additionally, since YenTnbo is hostd on a custom network built on a Raspberry Pi, the audiences will only see the contents we have made available on this network. Therefore, they will experience what a video website looks like on a censored fake internet.

![YenTnbo-Screenshot](https://raw.githubusercontent.com/ablanton/SJSU_ART_107_F17/master/Projects/ProjectThree/TeamNode/yentnbo/YenTnbo-Screenshots.png)


### + Gallery Installation:

The installation was part of the __Expanded Networks__ class show case set up in Gallery 8 at the Art Deparment, San Jose State University. "Faken'et" included a one channel video projection mapping on three white pedestals, each representating of one of our three fake media platforms including Fakebook, YenTnbo and Mesh news. There is also a fake google search engine (Geeglo) in this project which was the link between the other three platforms. 

For the projected animations, the reds and the blue correlate with the web platform they are representing. We also included an audio for our piece which was a voice-over extracted from the Google Translate bot explaining about each web platfom once highlighted by the projection animations.

![Gallery-Images](https://raw.githubusercontent.com/ablanton/SJSU_ART_107_F17/master/Projects/ProjectThree/TeamNode/gallery%20image/Installation.png)

_____

#### Team:
Fan Feng
Leily Khatibi
Roya Ebtehaj
Yi Liu
Eduardo Reyes Sanchez
Michael Yu
