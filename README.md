# ID Assignment 2 - BanG Dream! Girls Band Party! Fan Wiki Website
In this project, I will be creating a [Fan Wiki website](https://joliehehehe.github.io/ID-Assignment-2/) for the in-game cards from the Japanese/English rhythm game BanG Dream! Girls Band Party! This project aims to be able to list down cards from the game, as well as details such as name and statistics.

## Design Process
This is my [initial wireframe](https://xd.adobe.com/view/d8b30417-4128-4c38-9eee-e847f0a020a9-8de0/) for my website. I chose to design the wireframe like this because I felt that users will enjoy a simpler layout. The layout of the cards is quite simple and texts are not too messy.

This website is for fans who play BanG Dream! Girls Band Party! who would like to look at sorted information of different cards.

- As an avid player of the game, I want to be able to view different cards so that I can compare and choose which cards I should use in the game for maximum effeciency.
- As an avid player of the game, I want to sort the list of cards to display only certain types of attributes and rarity so that I can look at cards of certain types.

## Features
### Existing Features
- Navigation bar 
    - Allows users to navigate to different sections of the website easily.
- 'Home' Page
    - Allows users to see various illustrations that used to be in the game as well as capture their attention with the stunning visuals.
- 'Cards' Page
    - Allows users to see the cards from the games as well as the card's description such as name, rarity, attribute, skill and power statistics.
- 'Sort by Attribute' button
    - Allows users to see certain types of attribute cards (Cool, Power, Happy, Pure) only so that it is less crowded and messy.
- 'Sort by Rarity' button
    - Allows users to see certain types of rarity cards (1★, 2★, 3★, 4★) only so that it is easy to find that type amoung the other cards.

### Features Left to Implement
- 'Add to My Cards' button - Allows users to add each selected card into their My Cards page.
- 'My Cards' Page - Allow users view their selected seperately instead of scrolling through the page multiple times.

## Technology Used
- Visual Studio Code
    - This project was done on Visual Studio Code
- [Bootstrap](https://getbootstrap.com/) (CSS, Javascript)
    - This project made use of Bootstrap for templates
- [Application Programming Interface](https://bandori.party/wiki/BanG%20Dream!%20Girls%20Band%20API) (API)
    - This project fetched an API for data

## Testing
### Features
1. Sticky navigation bar
    - Scroll down the page and verify that the navigation bar follows down.
    - Click on the icon and verify that it brings you back to the home page.
    - Click on the 'Home' button and verify that it brings you back to the home page.
    - Click on the 'Cards' button and verify that it directs you to the 'All Cards' page.
2. 'Cards' section
    - Scroll down the page and ensure that there is a 'Back Up' button.
    - Click on the 'Back Up' button and ensure that it brings you back up to the starting of the page.
    - Look at the cards displayed and ensure that the images move every 3 seconds.
    - Ensure that there is a name displayed for each card.
    - Ensure that there is a rarity displayed for each card.
    - Ensure that there is a attribute type displayed for each card.
    - Ensure that there is a skill name displayed for each card.
    - Ensure that there is a skill description displayed for each card.
    - Hover over each of the images for each card and ensure that there the card's untrained and trained statistics is displayed. Unless it is a 2★ and below card, for the trained statistics values it should state 0.
3. 'Sort by Attribute' dropdown menu
    - Click on the dropdown menu and ensure that there are 4 buttons that are shown; Cool, Power, Happy and Pure
    - Click on the Cool button and ensure that it brings you to a page where only cool type cards are displayed
    - Click on the Power button and ensure that it brings you to a page where only power type cards are displayed
    - Click on the Happy button and ensure that it brings you to a page where only happy type cards are displayed
    - Click on the Pure button and ensure that it brings you to a page where only pure type cards are displayed
4. 'Sort by Rarity' dropdown menu
    - Click on the dropdown menu and ensure that there are 4 buttons that are shown; 1★, 2★, 3★ and 4★
    - Click on the 1★ button and ensure that it brings you to a page where only 1 star type cards are displayed
    - Click on the 2★ button and ensure that it brings you to a page where only 2 star type cards are displayed
    - Click on the 3★ button and ensure that it brings you to a page where only 3 star type cards are displayed
    - Click on the 4★ button and ensure that it brings you to a page where only 4 star type cards are displayed

### Issues
- When the width of the screen is smaller, the greeting words on the 'Home' page disappear from the website.

## Credits
### Content
- All data about the cards were taken from an existing [API](https://bandori.party/wiki/BanG%20Dream!%20Girls%20Band%20API) (More information below)

### Media
- [Original game logo](https://bang-dream-gbp-en.bushiroad.com/wordpress/wp-content/themes/bang-dream_gbp/assets/images/sp/index/logo.png)
    - Editted version for the website by Jolie Ng (me)
- 'Home' page images
    - [First Opening Screen](https://static.wikia.nocookie.net/bandori/images/1/19/Bandori_Opening_Screen.png)
    - [General Election Opening Screen](https://static.wikia.nocookie.net/bandori/images/9/99/Bandori_Opening_Screen_First_General_Election.png)
    - [Second Opening Screen](https://static.wikia.nocookie.net/bandori/images/0/06/Bandori_Opening_Screen_2.0_Update.png)
    - [First Anniversary Opening Screen](https://static.wikia.nocookie.net/bandori/images/4/40/Bandori_Opening_Screen_First_Anniversary.png)
    - [Poppin'Party Band Story 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/1/1c/Bandori_Opening_Screen_Popipa_Band_Story_2.png)
    - [Roselia Band Story 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/d/d1/Bandori_Opening_Screen_Roselia_Band_Story_2.png)
    - [Pastel*Palettes Band Story 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/d/d7/Bandori_Opening_Screen_Pasupare_Band_Story_2.png)
    - [Afterglow Band Story 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/d/d9/Bandori_Opening_Screen_AG_Band_Story_2.png)
    - [Hello, Happy World! Band Story 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/1/1d/Bandori_Opening_Screen_Harohapi_Band_Story_2.png)
    - [General Election 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/f/fd/Bandori_Opening_Screen_Second_General_Election.png)
    - [Persona Collaboration Opening Screen](https://static.wikia.nocookie.net/bandori/images/9/9a/Bandori_Opening_Screen_Persona_Collaboration.png)
    - [Lost One's Weeping Opening Screen](https://static.wikia.nocookie.net/bandori/images/e/ef/Bandori_Lost_One%27s_Weeping_Opening_Screen.png)
    - [Alien Alien Opening Screen](https://static.wikia.nocookie.net/bandori/images/7/75/Bandori_Alien_Alien_Opening_Screen.png)
    - [Romeo and Cinderella Opening Screen](https://static.wikia.nocookie.net/bandori/images/8/84/Bandori_Romeo_and_Cinderella_Opening_Screen.png)
    - [Second Anniversary Opening Screen](https://i.redd.it/zs4fsh78tcn41.jpg)
    - [Gochiusa Collaboration 1 Opening Screen](https://static.wikia.nocookie.net/bandori/images/4/40/Gochiusa_Collab_Title_Screen_1.png)
    - [Gochiusa Collaboration 2 Opening Screen](https://static.wikia.nocookie.net/bandori/images/c/c9/Gochiusa_Collab_Title_Screen_2.png)
    - [Gochiusa Collaboration 3 Opening Screen](https://static.wikia.nocookie.net/bandori/images/7/78/Gochiusa_Collab_Title_Screen_3.png)
    - [Karakuri Pierrot Opening Screen](https://static.wikia.nocookie.net/bandori/images/c/c3/Hatsune_Miku_2019_Collab_Opening_Screen.png)
    - [Re:Zero Collaboration Opening Screen](https://static.wikia.nocookie.net/bandori/images/a/a9/ReZero_Collab_Opening_Screen.png)


### Achnowledgements
- Guiding for this project was given by Ms Dai Mei Hua
- Borrowed API is by [MagiCircles Developers](https://twitter.com/magicircles_dev)
    - API taken on [Bandori party](https://bandori.party/wiki/BanG%20Dream!%20Girls%20Band%20API)
- Bootstrap was used in this project
    - CSS
    - Javascript
