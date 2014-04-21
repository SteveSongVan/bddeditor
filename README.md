BDD Editor
====

What is it?
----
BDDEditor is a simple text editor that can autocomplete a step definition based on existing features.

Problem
----
Behavior Driven Development is based on human-readable features written in [Gherkin](http://docs.behat.org/guides/1.gherkin.html). 

A feature can be used as manual test script or automated with tools such as [Cucumber](http://cukes.info). Regex is written to process each sentence in a feature and execute some code to test corresponding conditions. The sentence in a feature is called a step definition and group of step definitions form a scenario. 

A challenge is that step definitions are not always written consistently and existing regex cannot be reused. Too often, new regex is written for new scenario and code duplication grows.

Solution
----
BDDEditor catalogues existing feature files and suggests appropriate step definition as the user types. This promotes consistent writing and prevents spelling errors. 

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

Release Notes
----
Release notes are found [here](https://github.com/SteveSongVan/bddeditor/blob/master/RELEASE.md)