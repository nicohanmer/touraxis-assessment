import { Selector } from "testcafe";
//To run this tests in chrome run the following in command line - testcafe chrome contact-form.js
//To run this tests in firefox run the following in command line - testcafe firefox contact-form.js
//To run this tests in safari run the following in command line - testcafe safari contact-form.js

//Test Case variables
const contactUsBtn = Selector(".d-xl-block");
const enquiryDropDown = Selector("#enquiry_type")
const newCustomer = Selector("[value='newCustomer']")
const firstName = Selector("#name")
const lastName = Selector("#surname")
const contactNumber = Selector("#contact_number")
const emailAddress = Selector("#email")
const messageBox = Selector("#message")
const firstCheckBox = Selector("#contact-us-form > div:nth-of-type(7) .checkmark")
const secondCheckBox = Selector("#contact-us-form > div:nth-of-type(8) .checkmark")
const submitMessage = Selector("#contactSubmit")


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

     // Opens Contact Us Page
     await t
     .click(contactUsBtn)

     await t.wait(5000); // Delay to let page load
});


// User fills out contact form
fixture `Fills in contact form`
    .page `https://expatexplore.com/contact-us/`; 

// Define Test Case
test('Fills in contact with specified data', async t => {

    // 2-second delay before filling in form
    await t.wait(2000);
 
    await t 
    .click(enquiryDropDown)
    .wait(2000)
    .click(newCustomer)
    .wait(2000)
    .typeText(firstName, "Nico")
    .wait(1000)
    .typeText(lastName, "Hanmer")
    .wait(1000)
    .typeText(contactNumber, "+27 (0)616031138")
    .wait(1000)
    .typeText(emailAddress, "nhanmer94@gmail.com")
    .wait(1000)
    .typeText(messageBox, "I would like to find out more about your 2024 Hot Deals and how the payment works. Can the payment be paid over mulitple smaller payments or must it be a once off payment?")
    .wait(1000)
    .click(firstCheckBox)
    .wait(1000)
    .click(secondCheckBox)
    .wait(1000)
    .click(submitMessage)
    .wait(30000) // This delay is 30 seconds to allow for the form to submit and reset after success message.
 });