QUnit.test("Post creation", function(assert) {

    assert.equal(adminView.testCreated(), false, "Ordre ble ikke opprettet");
    assert.equal(adminView.testCreated("test", "test", "test", "test"), true, "Ordre ble opprettet")
})