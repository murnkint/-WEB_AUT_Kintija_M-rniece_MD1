import { SelectablePage } from "../pageObjects/selectablePage"

describe('template spec', () => {

  it.only("Grid", () => {
    SelectablePage.visit();
    // Click “Grid”
    SelectablePage.gridButton.click();
    // Click - “Two”, “Four”, “Six”, “Eight”
    SelectablePage.gridOptions.contains("Two").click();
    SelectablePage.gridOptions.contains("Four").click();
    SelectablePage.gridOptions.contains("Six").click();
    SelectablePage.gridOptions.contains("Eight").click();
    // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    SelectablePage.gridOptions.contains("Two").should("have.class","active")
    SelectablePage.gridOptions.contains("Four").should("have.class","active")
    SelectablePage.gridOptions.contains("Six").should("have.class","active")
    SelectablePage.gridOptions.contains("Eight").should("have.class","active")
    // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    SelectablePage.gridOptions.contains("One").should("not.have.class","active")
    SelectablePage.gridOptions.contains("Three").should("not.have.class","active")
    SelectablePage.gridOptions.contains("Five").should("not.have.class","active")
    SelectablePage.gridOptions.contains("Seven").should("not.have.class","active")
    SelectablePage.gridOptions.contains("Nine").should("not.have.class","active")

    });

});