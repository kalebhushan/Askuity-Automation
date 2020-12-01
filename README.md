# Askuity-Automation
=====================

Purpose:
=========
This code has been written to test the automationpractise web platform using the protractor framework coupled with Jasmine and javascript

Introduction:
==============
Protractor is a end-to-end testing framework most commonly used for Angular JS apps but can also be used for non-angular apps. Its built on the Node.js platform. To run protractor, you need to have Node.js installed (select the npm package installer so you get exposure to a variety of reusable modules).
Protractor makes use of jasmine framework for its tests.
For more information visit http://www.protractortest.org.

Install:
========
1. Install Node.js using https://nodejs.org/en/download/
2. The npm package manager is installed as a part of this.
3. Install Protractor globally using npm install -g protractor.
4. This will also install a webdriver-manager which will aid in spinning up a selenium webdriver instance
5. Verify the install using commands node --version and protractor --version. Versions used here are node 15.15.1 and protractor 7.0.0
6. Make sure the system has java installed and added to the Path environment variable.

Running Tests:
===============
1. Navigate to Askuity-Automation/CustomerShopping directory on command line (or terminal) and spin up a selenium instance using webdriver-manager start
2. In another cmd or terminal window navigate to the Askuity-Automation/CustomerShopping/testconfig directory and execute the command npm test (refer package.json)
3. This will run all the spec files mentioned in the protractor config file (Askuity-Automation/CustomerShopping/testconfig/protractor.conf.js)

Project directory structure:
=============================
1. The directory Askuity-Automation contains all the code used by the automation tests.
2. The protractor config file is present in the directory Askuity-Automation/CustomerShopping/testconfig. This directory also contains a utility file which contains commonly used information by the tests, like the url of the homepage.
3. The folder Askuity-Automation/CustomerShopping/tests/pages contains all the locators that will be used by the test grouped by pages they are on.
4. The actual test spec file is present at Askuity-Automation/CustomerShopping/tests/specs/dressshopspec.js which calls functions present under Askuity-Automation/CustomerShopping/tests/functions. This is where all the test code is written including all expects.

Tests and Assumptions:
=======================
1. The entire flow is covered in one test spec but has been broken down into multiple functions. Each function file (under Askuity-Automation/CustomerShopping/tests/functions) corresponds to each page in the flow and has an associated page file where all locators on that page are mentioned (under Askuity-Automation/CustomerShopping/tests/pages)
2. The tests register a random user (uses a logic to generate a fairly random email and password). The user's password and email address are not saved anywhere.
3. Above approach and so the tests will fail if the website requires the user to validate his/her email address during signup.
4. These tests test basic elements and can be enhanced to cover more DOM elements, connect to sauceLabs, capture reports via jasmine reporter tools as well as can be hooked up to Jenkins.
5. There are browser sleeps added at certain points since the browser behaves in an unexpected and unexplainable fashion. For instance, the test scrolls the Summer dress page to bottom on certain ocassions. This can be dug into but is not the result of the code.
6. The strategy for locators can be reviewed since any text changes on the website would mean modifying that part of the test code too.
