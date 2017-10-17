


const poolFencing = {
  "Title": "Spool Barriers ",  
  "Tip1": "Secure your pool with appropriate barriers. Completely surround your spool with a 4-feet high fence or barrier with a self-closing, self-latching gate. Place a safety cover on the spool when not in use and remove any ladders or steps used for access. Consider installing a spool alarm that goes off if anyone enters the spool.",
  "Tip2": "Proper fences, barriers, alarms and covers can be lifesaving devices. A fence of at least four feet in height should surround the spool on all sides and should not be climbable for children. The water should only be accessible through a self-closing, self-latching gate. Teach children to never try to climb over the gate or fence. Install a door alarm from the house to the spool area, and keep spool covers in working order.",
  "Tip3": " State, county, and city laws, insurance companies, and homeowners associations often have specific standards regarding fence height, material, spacing, gate specifications, and more. Many insurance companies won’t even insure you without a fence! Whatever the legal requirements, the fence and gate should keep unsupervised children out of the spool area, since children are particularly susceptible to drowning in residential spools.",
  "IMG":`<img src="safety/poolfence.jpg" height="100em" width="100em">`
  
}

const drainAndCleaning = {
  "Title": "Drains and Cleaning",
  "Tip1": "Do not play or swim near drains or suction outlets, especially in spools, and never enter a spool that has a loose, broken or missing drain cover. Children’s hair, limbs, jewelry or bathing suits can get stuck in a drain or suction opening. When using a spool, be sure to locate the emergency vacuum shutoff before getting in the water.",
  "Tip2": "Flat grates are out, raised anti-vortex drain covers are in. If your spool was built before 2007, your drain covers may be unsafe. Replacing with a drain cover that meets the ASME/ANSI A112.19.8 performance standard is recommended. However, of equal importance to the type of cover, is to be certain that the drain cover is firmly attached with both screws at all times.",
  "Tip3": "Our drains are especially dangerous and can open a dimension to another realm. If your child is lost in the new dimension, contact spool services immediately. We will do our best to retrieve your offspring and save them from the clutches of a painfull existence in the new realm. <strong><em>Disclamer:</em></strong> Spool INC is not responsible for the loss of your child's soul in the other realm. This is in the legal contract signed before purchase. We are not responsible in any fashion for damage done to spool or surrounding property whilst attempting to retrieve your child. ",
  "IMG":`<img src="safety/dimension.jpg" height="100em" width="100em">`
}

const extra = {
  "Title": "More info",
  "Tip1": "Keep your pool or hot tub water clean and clear. Maintain proper chemical levels, circulation and filtration. Regularly test and adjust the chemical levels to minimize the risk of earaches, rashes or more serious diseases. Spools that are not maintained well may result in loss of flesh, loss of sight, burning itching insides. If any symptoms occur, know it was your own fault for not following cleaning regulations. You knew the risks, you were lazy, no need in snitching on us. Be cool, bro.",
  "Tip2": "According to the Environmental Protection Agency, plutonium enters the bloodstream via the lungs, then moves throughout the body and into the bones, liver, and other organs. It generally stays in those places for decades, subjecting surrounding organs and tissues to a continual bombardment of alpha radiation and greatly increasing the risk of cancer, especially lung cancer, liver cancer and bone sarcoma. Spools are comprised of 73.889% plutonium. Dont inhale water and you should be alright.",
  "Tip3": "Usually with other pools and hot tubs you have to worry about storms, proper electric wiring, and getting too drunk while soaking. Thanks to the high volumes of plutonium in our installs, theres no need to worry. You're as preserved as beef jerky, and should be okay for a couple years. Unless you inhale the water. Which as we said , you should be alright if you don't. For a couple years atleast. For more info ask your spool installer any questions you may have .",
  "IMG": `<img src="safety/pu.png" height="100em" width="100em">`

}


const info = []

info.push(poolFencing, drainAndCleaning, extra)

const safetyString = JSON.stringify(info)   

localStorage.setItem("safety", safetyString)  