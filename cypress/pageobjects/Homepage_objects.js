class Homepage_objects{

    

    signup_button()
    {
        return cy.get('.btn.btn-cta-surfaced.btn-md.neutral')
    }

    enteremail()
    {
        return cy.get('[type="email"]')
    }

    enterpassword()
    {
        return cy.get('[type="email"]')
    }

    signup_btn()
    {
        return cy.get('.leading-6')
    }

    username()
    {
        return cy.get('#username')
    }
    select_gender_dropdown()
    {
        return cy.get('.text-black-500.w-full.inline-flex.items-center')
    }

    select_gender_option()
    {
        return cy.get('select').contains('Male')
    }

    continue_button()
    {
        return cy.get('.btn.btn-cta-surfaced.btn-sm.neutral.self-end.w-full.py-3')

    }
    
    search_uni()
    {
        return cy.get('[type="search"]')
    }

    search_field()
    {
        return cy.get('[type="search"]')
    }

    select_field()
    {
        return cy.get('select').select('3');
    }

    search_study()
    {
        return cy.get('[type="search"]')
    }

    select_study()
    {
        return cy.get('select').select('2');

    }
    search_semester()
    {
        return cy.get('[type="search"]')
    }

    select_semester()
    {
        return cy.get('select').select('1');
    }

    continue_btn()
    {
        return cy.get('.btn.btn-cta-surfaced.btn-sm.neutral.self-end.w-full.py-3')
    }


}
export default Homepage_objects;