/**
 * A group of friends have decided to start a secret society. 
 * The name will be the first letter of each of their names, sorted in alphabetical order.
 * Create a function that takes in an array of names and returns the name of the secret society.
 */

function secretSociety(names: string[]): string {
    return names.map(name => name.charAt(0)).sort().toString().replace(/,+/g, "");;

}

export { secretSociety };