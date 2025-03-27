import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
    static get url(){
        return"selectable";
    }

    static get gridButton() {
        return cy.get("[id='demo-tab-grid']");
    }
    
    static get gridOptions() {
        return cy.get("[id='gridContainer']");
    }
      
}