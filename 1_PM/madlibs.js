/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change these values to generate a different story
*/

const noun = "plate"
const pastverb = "ate"
const adj = "great"

const story = `
It was a ${adj} day when the ${noun} ${pastverb}.
`

console.log(story)
