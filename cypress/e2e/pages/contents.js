class content {

    get emailField(){return cy.get('#mui-1')}
    get passwordField(){return cy.get('#mui-2')}
    get loginButton(){return cy.xpath("//button[text()='Login']")}
    get languageButton(){return cy.get('[aria-controls="language-switcher"]')}
    get english(){return cy.xpath("(//h4[text()='English'])[1]")}
    get burgerMenu(){return cy.get('[data-testid="MenuIcon"]')}
    get downArrow(){return cy.get('[data-testid="ExpandMoreIcon"]')}
    get logout(){return cy.xpath("//div[(text()='Logout')]")}
    get Skyross(){return cy.get('[title="SKYROS"]')}
    get acrossMap(){return cy.get('#across-map')}
    get blankArea(){return cy.get('#item_ejv2svq3e3wft3dtu9')}
    get editIcon(){return cy.get('[data-testid="EditIcon"]')}
    get generalTool(){return cy.get('[data-testid="BorderColorIcon"]')}
    get buttonTool(){return cy.xpath("//p[text()='Button']/parent::div/parent::div//img")}
    
    
    }
    export default new content()