### How to install? ###
- git clone repo: https://github.com/mattyao1984/ezy-flight-app.git 
- Install Node.js if you don't have it. Download from here http://nodejs.org/download/
- Install bower if you don't have it. Run 'npm install -g bower' 
- Run 'bower update' 
- Install Grunt.js command line if you don't have it.  Run 'npm install -g grunt-cli'
- Run 'npm install' if you don't have /node_modules 
- Run 'grunt server' to start 

### How to use it? ###
- Login with your account. If you don't know the access, please contact Matt Yao (mattyao1984@gmail.com) to get access.
- You can add new booking by clicking the button at the right bottom.
- You can view all your bookings once you have login
- You can remove the booking 

### About the toolset and enviroment ###
- Yeoman
This project is initialized with Yeoman Angular generator which can be found here: https://github.com/yeoman/generator-angular. Yeoman is a the web's scaffolding tool for modern web apps. It integrates Bower, Grunt and other useful tools for quick start. For more information about Yeoman, please check: http://yeoman.io/

- Parse
I use Parse as my backend solution because: 
  -  1. easier to setup without writting too much code in such a short time for my quick development.
  -  2. Its rich REST APIs is Angular-friendly. 
  -  3. It is free to build the staging database.
For more information about Parse, please check here: https://parse.com/

### Some notes: ###
- I adjusted the width of the container to 940px which gives more room for pages.
- Missing hover status for buttons. I make slightly change of the color when you hover.
- I implemented Fontawesome library for icons and assets such as username/password icons, refresh button etc. Fontawesome is easier to use and you will not have icons blurred when you resize them. However, the icons may look a bit different from the design.
- Missing "Log Out" button function. I have added it to the top navigation.
- For better user experience, I change the remove-booking-btn background color. So the customer can still see the information underneath.
- Added confirm message before you delete a booking.
- Added data loader feature for booking data init. It can also be trigger by clicking 'Sync' button. The loader assets is from: http://preloaders.net/en/letters_numbers_words
- Added date/time picker when adding new bookings. The source code is from: http://amsul.ca/pickadate.js/date/
- Added page protection feature. You need to login first and check your bookings.
- Site is responsive. But not pixel-perfect.

