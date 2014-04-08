BDD Editor
====

Install Libraries
----
Install the following

1. [Node.js](http://nodejs.org)
	* Download package from website
2. [grunt](http://gruntjs.com/getting-started)
	* `$sudo npm install -g grunt-cli`
3. [bower](http://bower.io)
	* `$sudo npm install -g bower`

Initial Setup
----
Execute the following in order

1. `$bower install` downloads bower dependencies as listed in *bower.json*
2. `$npm install` downloads node dependencies as listed in *package.json*
3. `$grunt` builds the app and runs the tests in *test* folder

Run
----
Launch the app 

1. `$grunt serve` and browse to [http://localhost:9000](http://localhost:9000)