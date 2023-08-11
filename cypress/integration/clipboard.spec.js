describe("Clipboard App", () => {
  it("copies text to clipboard", () => {
    cy.visit("/");

    // Enter text
    cy.get("input").type("Hello, world!");

    // Click copy button
    cy.contains("Copy").click();

    // Check if the "Text has been copied!" message appears
    cy.contains("Text has been copied!").should("be.visible");

    // Wait for the message to disappear
    cy.wait(3000);

    // Check if the message has disappeared
    cy.contains("Text has been copied!").should("not.exist");
  });
});
