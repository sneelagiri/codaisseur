// let name = 'Miloud'
// let skill = 'Growth Hacking'
function wallOfFame(name, skill){
    return `
                                    WALL OF FAME
        _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
        ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
        _|___|___|___|___|___|  ${name} : ${skill} |___|___|___|___|___|
        ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
        _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
    `
}
const miloud = wallOfFame("Miloud", "Growth Hacking")
console.log(miloud)
// name = 'Johan'
// skill = 'Fixing Ubuntu'
const johan = wallOfFame("Johan", "Fixing Ubuntu")
console.log(johan)
// name = 'Danny'
// skill = 'Product Owning'
const danny = wallOfFame("Danny", "Product Owning")
console.log(danny)