import { Selector } from "testcafe";
import { join } from 'path';
import os from 'os'; // 
//To run this tests in chrome run the following in command line - testcafe chrome careers-form.js
//To run this tests in firefox run the following in command line - testcafe firefox careers-form.js
//To run this tests in safari run the following in command line - testcafe safari careers-form.js

//Test Case variables
const footerMenu = Selector(".footer div:nth-of-type(1) > p:nth-of-type(4)") // Scroll to the bottom of the homepage
const careersButton = Selector(".footer div:nth-of-type(1) > p:nth-of-type(4)")
const careersForm = Selector(".static-template > .container > .static-template-card")
const userNames = Selector("[name='Name']")
const contactNumber = Selector("[name='contact_number']")
const emailAddress = Selector("[name='Email']")
// Cover letter variables
const fileInput = Selector("#uploadCoverLetter") // File input element
const coverLetterUpload = join (os.homedir(), 'Desktop', 'Cover_Letter_Test_Doc.pdf') // File path to document for upload (os.homedir() to get to the users home directory ensures compatibility with different users)
//CV Document variables
const cvFileInput = Selector("#uploadCV") // File input element
const cvUpload = join (os.homedir(), 'Desktop', 'CV_Test_Doc_Test.pdf') 
const checkBoxSelect = Selector(".checkmark")
const submitFormBtn = Selector("#cvSubmit")

fixture `Fill out careers application form`
    .page`https://expatexplore.com/`;

// Define Test Case
test('Fill out careers application form', async t => {

    // Maximize the browser window to full screen
    await t.maximizeWindow();

     // 3-second delay to open window in full screen
    await t.wait(3000);
    
    //navigateTo function opens the website URL
    await t.navigateTo('https://expatexplore.com/');

     // 5-second delay to ensure all elements load
     await t.wait(5000);

     await t.scrollIntoView(footerMenu) //Scroll to the footer of the homepage

     await t.wait(3000); // Delay before clicking

     await t.click(careersButton)

     await t.navigateTo('https://expatexplore.com/work-for-expat-explore/')

     await t.wait(2000); // Delay to let page load

     await t.scrollIntoView(careersForm) //Scroll to form

     await t.wait(2000); // Delay before filling out the form

     // Filling in form details
     await t
     .typeText(userNames, "Nico Hanmer")
     .wait(1000)
     .typeText(contactNumber, "+27 (0)616031138")
     .wait(1000)
     .typeText(emailAddress, "nhanmer94@gmail.com")
     .wait(1000)
     .setFilesToUpload(fileInput, coverLetterUpload)
     .wait(1000)
     .setFilesToUpload(cvFileInput, cvUpload)
     .wait(1000)
     .click(checkBoxSelect)
     .wait(1000)
     .click(submitFormBtn)
     .wait(10000)

});