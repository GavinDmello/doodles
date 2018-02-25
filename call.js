function Employee(eid, ename) {
    this.eid = eid
    this.ename = ename
}

Employee.call(this, 1, "name")

/*
    Calls the method with a context
*/