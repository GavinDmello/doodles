class Bind {
    bind(f, c) {
        let previousArgs = [].slice.call(arguments, 2) // front two minus the relevant

        return function() {
            let newArgs = [].slice.call(arguments) // since this will be called
            let combinedArgs = previousArgs.concat(newArgs)
            return f.apply(c, combinedArgs)
        }
    }
}

let b = new Bind()
var info = {
    name : "Druh",
    sing : function (name1, name2) {
        return "Yo " + this.name + " " + "with " + name1 + " and " + name2
    }
}

l = b.bind(info.sing, info, " Halle")
console.log(l("MS"))

module.exports = Bind