import Page from './page-model';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `http://checkin.timewatch.co.il/punch/punch.php`;

// Page model
const page = new Page();

// Tests
test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, '2373').typeText(page.nameKeyboard, '29').typeText(page.pwKeyboard, 'hayag123')
        .click(page.submitButton)
        // await t
        .click(page.inButton)
        console.log('\n \n========== Enter in hour ==========\n');
        console.log('============== ' + new Date().getHours() + ':' + new Date().getMinutes() + ' ===============\n\n');
});
