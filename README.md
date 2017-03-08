Author: Aamir Yousuf.
E-mail: ayousuf2@binghamton.edu
Github: iamongit

# Implementing Flicker API to Search Images based on City and Tag.

[![Flicker API](https://www.shareicon.net/data/128x128/2015/12/01/680870_network_512x512.png)](https://github.com/iamongit/FlickerAPI)

# Stack:
  - Node
  - Express
  - Angular
  - mySQL

# Features:
  - Retreives Flicker images based on city and tag.
  - Makes two API calls, one gets the woe_id based on city name and the
    other uses that woe_id along with the tag to retreive public images.
  - Everytime the urls are saved in database and new calls with same tag and city
    are served using the links in database instead on making new API calls.

# Default input:
    (If 'Get Pictures' is clicked without any form input.)
    City: New York City
    Tag : timessquare

# Installation/Execution:
    Assuming you're inside the root folder.
    npm install
    run the schema.sql to set up database:
    mysql -u root < path/to/schema.sql
    node server/server.js


> Link: http://custom-env.c7us5tmrsm.us-west-2.elasticbeanstalk.com/#!/

License
----

MIT