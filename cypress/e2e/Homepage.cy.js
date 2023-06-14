import Homepage_objects from "../pageobjects/homepage_objects";
const env = require('../fixtures/config.json');

const homepage_objects = new Homepage_objects

describe('Test Suite', () => {
    beforeEach(() => {
      cy.visit(env.baseurl);
    })
});

it('should complete signup and onboarding', function() {

    homepage_objects.signup_button().click();
    homepage_objects.enteremail().type(env.email);
    homepage_objects.enterpassword().type(env.password);
    homepage_objects.signup_btn().click();
    homepage_objects.username().type(env.username);
    homepage_objects.select_gender_dropdown().click();
    homepage_objects.select_gender_option().click();
    homepage_objects.continue_button().click();
    homepage_objects.search_uni().type(env.uni);
    homepage_objects.search_field().click();
    homepage_objects.select_field().click();
    homepage_objects.search_study().click();
    homepage_objects.select_study().click();
    homepage_objects.search_semester().click();
    homepage_objects.select_semester().click();
    homepage_objects.continue_btn().click();





});