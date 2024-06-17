import { Selector } from "testcafe";
//To run this tests in chrome run the following in command line - testcafe chrome load-homepage.js
//To run this tests in firefox run the following in command line - testcafe firefox load-homepage.js
//To run this tests in safari run the following in command line - testcafe safari load-homepage.js


fixture `Open Expat Explore homepage`
    .page`https://expatexplore.com/`;

// Define Test Case
test('Open website URL', async t => {

    // Maximize the browser window to full screen
    await t.maximizeWindow();

     // 3-second delay to open window in full screen
    await t.wait(3000);
    
    //navigateTo function opens the website URL
    await t.navigateTo('https://expatexplore.com/');

     // 5-second delay to ensure all elements load
     await t.wait(5000);
});

//Hover over menu items
fixture `Hover over menu items`
    .page `https://expatexplore.com/`; 

// Define Test Case
test('Hover over menu items', async t => {

    // 3-second delay before hovering
    await t.wait(3000);

    // Hover over Browse our Tours
    await t.hover('.red-bar-list-container > li:nth-of-type(2) > .has-sub-menu');

    // 3-second delay hovering to show full menu item
    await t.wait(3000);

     // Hover over Destinations
     await t.hover('.red-bar-list-container > li:nth-of-type(3) > .has-sub-menu');

      // 3-second delay hovering to show full menu item
    await t.wait(3000);

});