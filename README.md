# EZ-Tools
![EZTools Logo](https://github.com/einar-method/EZ-Tools/blob/main/Assets/tools.png)


This simple web app is a tool for the [EZD6 RPG](https://www.ezd6.com/). DM Scotty, the creator of EZD6, has it as a featured link on the game's webpage! 

## Documentation & Functionality
Detailed below is everything you need to know about the tool as a user. 

### Character Tools (Main Tab)
By default, this is where the user starts. Just click on *RR Tools* if you want to switch!

### Everything! (Character Button)
This button is used to roll everything... well, except scrolls and potions. You'll need to roll those separately if you need/want them.  Otherwise, the *Everything!* button will erase all data and roll up an entirely new character.

### Path (Character Button)
This button will only roll a random path and display any stats related to that path. Can be used even after clicking the *Everything!* button. Be aware, if you had an extra inclination from Delver and then reroll your path, the tool will not remove your extra inclination. However, if you reroll your inclinations, the update will apply. Otherwise, you can just ignore the extra inclination.

Extra health and circles of sorcery should show up when/if they apply.

### Species (Character Button)
This button will only roll a random species. Can be used even after clicking the everything button. Be aware, if you had an extra inclination from Human and then reroll your species, the tool will not remove your extra inclination. However, if you reroll your inclinations, the update will apply. Otherwise, you can just ignore the extra inclination.

### Inclinations (Character Button)
I've already spoken briefly about how random inclinations work. The tool should accurately take into account any existing information each time you click the *Inclinations* button. If no other info has been rolled, this button will give out two random inclinations.

This button will also update your karma since extra karma is tied to inclinations.

### Equipment (Character Button)
This button will roll random pieces of common and/or specialty gear from the book, with duplicates (sampling with replacement). Click it as many times as you like to regenerate.

> The amount of individual items pulled equals wealth level * 3. This was a design decision on my part and is not RAW.

### Basics (Character Button)
This button will roll a random name (mostly gender neutral), wealth level, backstory, moral core (not from EZD6), and a physical description.

> [!NOTE]
> Please check the design notes below for more info, or move on to another section.

> The name generator cycles through all the names in the book, plus my custom name generator. So it will be more common to get DM Scotty's first names than mine. The TBG name system uses 2 separate 8 particle lists for first names and combines the results, giving 64 combinations  --  3 separate 8 particle lists for last names, giving 512 combinations  --  which is a little over 30k combos of first and last names (odd as they may sound sometimes lol). Instead of adding all these combos to the EZD6 list, I lumped them in as a single result with the RAW names list so the ones from the EZD6 book will definitely come up more. Essentially, I wanted to give more options while staying true to what's in the book.

> I like the idea of wealth being a random factor. Some groups will set a starting wealth of course. If you're wondering, there's about a 1% chance to roll pauper or kingly wealth. There's also a low chance (about 9%) to get lordly wealth. Cash Poor, Moderate and Wealthy will be the most common, respectively.

> The backstory is fairly simple, but should be enough to get you started. All the past jobs are based on common historical jobs. If you render to pdf, the backstory will show up in the Aspects section of the character sheet.

> If you’re wondering what the Moral Core is, it’s just my take on something like alignment. My hope is that players (excuse me, Pushers & Shovers) can use the Moral Core along with the backstory for Aspects and/or character drive. An important thing to keep in mind is that a Flaw might not always be something a character does. For example, the "lies" flaw, could mean the PC is bad at telling lies, they lie a lot, or being lied to sends them into a fit of rage. 

> The physical description part is also designed to be as gender neutral as possible and should give just enough to picture a character within their species. The description is just to the left of karma on the pdf character sheet.

### Potions & Scrolls (Character Buttons)
Both of these buttons will give you two random results each. If you need more than that, you'll have to take note of the first two or something. If you only need one result, just take the first potion/scroll. These features are a bit lackluster, but it works.

### Reset (Character Button)
If you encounter an issue, try using the *Reset* button. This button is also good for clearing everything and rolling another PC!

### To PDF (Character Button)
Before, this button was simply a print page to pdf hack. Now, the data is saved to an actual form fillable pdf! This feature is a relatively new addition so please do report any issues.

### Roll (Character Button)
Just click the button and you'll get a D6 roll. If you want something specific, type in any number between 2 and 100 - including odd numbers!

### RR Tools (Main Tab)
Ready for all of your RR rolling needs during session prep, or even on the fly. Click on *Character Tools* if you want to switch back to the main PC tools.

I'm not going to go over each of the RR buttons in detail because they're all pretty simple - just get a random result from the category.

## To Do
These are things I'd like to do in the future, time permitting:

+ Convert the entire code to object based, with constructor templates.
+ Add an option to allow a different pdf (a community one I love).
+ Make a simple weapon generator following the guidlines in the book, and intelligently based on Path and Boons (maybe wealth too).
+ Fix the css overflow issue causing the initial page to scroll down.

## Known Issues
If there are any major known issues, they will be posted below. 

You can report [offcial issues here](https://github.com/einar-method/EZ-Tools/issues). 

Or, feel free to [stop by in Discussions](https://github.com/einar-method/EZ-Tools/discussions) for a less formal discourse.

## License Info
Any information herein related specifically to EZD6 should not be recreated or reused without the express permission of EZD6's creator. Everything else (specifically my coding) can be freely used however you like.
