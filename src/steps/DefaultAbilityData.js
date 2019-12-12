const DefaultAbilityData = {
    ACCURACY: {
        value: -2,
        focuses: {
            Bows: {
                has: false,
                description: "Proficiency with string-fired weapons, from a handdrawn compound bow to a mechanical crossbow."
            },
            Gunnery: {
                has: false,
                description: "Proficiency with precision heavy ranged weapons, including ship-mounted weapons."
            },
            Pistols: {
                has: false,
                description: " Proficiency with single-grip, short-barrel ballistic weapons."
            },
            Rifles: {
                has: false,
                description: "Proficiency with double-grip, long-barrel ballistic weapons."
            },
            Throwing: {
                has: false,
                description: "Proficiency with thrown weapons, including grenades."
            },
        }
    },
    COMMUNICATION: {
        value: -2,
        focuses: {
            Bargaining: {
                has: false,
                description: "Negotiating with others and making deals."
            },
            Deception: {
                has: false,
                description: "Tricking and lying to other people."
            },
            Disguise: {
                has: false,
                description: "Changing your appearance to look like someone else."
            },
            Etiquette: {
                has: false,
                description: "Knowing the social niceties of various cultures."
            },
            Expression: {
                has: false,
                description: "Conveying thoughts and ideas effectively through words."
            },
            Gambling: {
                has: false,
                description: "Playing games of chance and profiting from them."
            },
            Investigation: {
                has: false,
                description: "Interviewing people for information and finding and deciphering clues."
            },
            Leadership: {
                has: false,
                description: "Guiding, directing, and inspiring others."
            },
            Performing: {
                has: false,
                description: "Entertaining an audience with a type of performance art"
            },
            Persuasion: {
                has: false,
                description: "Convincing others to agree with you."
            },
            Seduction: {
                has: false,
                description: "Getting attention through romantic and sexual allure."
            }
        }
    },
    CONSTITUTION: {
        value: -2,
        focuses: {
            Running: {
                has: false,
                description: "Moving quickly in both short sprints and long distance hauls."
            },
            Stamina: {
                has: false,
                description: "Enduring fatigue, disease, and privation."
            },
            Swimming: {
                has: false,
                description: "Moving across water and staying afloat."
            },
            Tolerance: {
                has: false,
                description: "Withstanding the effects of potentially toxic substances, imbibed for recreation or unwitting exposure."
            }
        }
    },
    DEXTERITY: {
        value: -2,
        focuses: {
            Acrobatics: {
                has: false,
                description: "Executing gymnastic, balancing, and tumbling maneuvers."
            },
            Crafting: {
                has: false,
                description: "Making things with manual skills, including the various fine and plastic arts. Examples of specific Crafting focuses include Carpentry, Carving, Drawing, Glass-blowing, Leather-working, Painting, Origami, Sculpting, and so forth, but feel free to come up with your own."
            },
            Driving: {
                has: false,
                description: "Handling surface vehicles like cars, trucks, or motorized carts, to name a few."
            },
            Free_Fall: {
                friendlyName: "Free Fall",
                has: false,
                description: "Maneuvering and moving while in free-fall, usually in microgravity."
            },
            Initiative: {
                has: false,
                description: "Reacting quickly under pressure."
            },
            Piloting: {
                has: false,
                description: "Operating vehicles that move in three dimensions like aircraft, drones, and spaceships."
            },
            Slight_Of_Hand: {
                friendlyName: "Slight Of Hand",
                has: false,
                description: "Using sleight of hand and deft movements to trick others, hide things, or pick pockets."
            },
            Stealth: {
                has: false,
                description: "Moving around without being noticed."
            }
        }
    },
    FIGHTING: {
        value: -2,
        focuses: {
            Brawling: {
                has: false,
                description: "Proficiency in fighting unarmed, from bareknuckle boxing to various styles of martial arts."
            },
            Grappling: {
                has: false,
                description: " Proficiency in unarmed techniques intended to immobilize and restrain."
            },
            Heavy_Weapons: {
                friendlyName: "Heavy Weapons",
                has: false,
                description: "Proficiency with large or heavy close combat weapons like axes, clubs, hammers, and large swords, to name a few."
            },
            Light_Weapons: {
                friendlyName: "Light Weapons",
                has: false,
                description: "Proficiency with light close combat weapons like batons, knives, light staffs, and swords, among others."
            }
        }
    },
    INTELLIGENCE: {
        value: -2,
        focuses: {
            Art: {
                has: false,
                description: "Knowledge of artistic movements, styles, artists, and works in any of the fine arts. Making art uses the Crafting focus."
            },
            Business: {
                has: false,
                description: "Knowledge of running a business as well as of the business and corporate world."
            },
            Cryptography: {
                has: false,
                description: "Creating and deciphering codes and ciphers."
            },
            Current_Affairs: {
                friendlyName: "Current Affairs",
                has: false,
                description: "Knowledge of politics, newsworthy events, and popular culture."
            },
            Demolitions: {
                has: false,
                description: "Identifying, using, and safely handling explosives, as well as understanding their effects and detonation methods."
            },
            Engineering: {
                has: false,
                description: " Making, repairing, and maintaining technological items as well as knowledge of the principles and practicalities of their design and development."
            },
            Evaluation: {
                has: false,
                description: "Knowledge of the value of goods, works of art, and other valuables."
            },
            Law: {
                has: false,
                description: "Knowledge of codes, regulations, and different legal proceedings of all levels of the judiciary and law enforcement."
            },
            Medicine: {
                has: false,
                description: "Tending to the sick and injured, and understanding medical and anatomical knowledge."
            },
            Navigation: {
                has: false,
                description: "Planning and following a route from one place to another, interpreting maps and cartographic data, and figuring out where you are."
            },
            Research: {
                has: false,
                description: "Conducting a systematic search for information, usually using records, archives, and books."
            },
            Science: {
                has: false,
                description: "Knowledge of an organized field of study and the ability to understand things related to it. Examples of Science focuses include Anthropology, Astronomy, Botany, Biology, Chemistry, Economics, Genetics, History, Planetary or 'Earth' Sciences, Physics, Psychology, and Theology, but you can choose another scientific field, if you wish"
            },
            Security: {
                has: false,
                description: "Knowledge of different security devices, systems, protocols, and personnel."
            },
            Tactics: {
                has: false,
                description: "Knowledge of strategy, tactics, and famous applications thereof."
            },
            Technology: {
                has: false,
                description: "Knowledge of the design and operation of technology, particularly computers, which are incorporated into nearly all technological items in The Expanse."
            }
        }
    },
    PERCEPTION: {
        value: -2,
        focuses: {
            Empathy: {
                has: false,
                description: "Picking up on and interpreting the feelings and emotions of others."
            },
            Hearing: {
                has: false,
                description: "Perceiving using your auditory sense."
            },
            Intuition: {
                has: false,
                description: "Having a 'gut feeling' about certain things you can't otherwise sense."
            },
            Searching: {
                has: false,
                description: "Finding things that are hidden or obscured, such as hidden compartments."
            },
            Seeing: {
                has: false,
                description: "Perceiving using your visual sense."
            },
            Smelling: {
                has: false,
                description: "Perceiving using your olfactory sense."
            },
            Survival: {
                has: false,
                description: "Practical skills of wilderness survival."
            },
            Tasting: {
                has: false,
                description: "Perceiving using your gustatory sense."
            },
            Touching: {
                has: false,
                description: "Perceiving using your tactile sense."
            },
            Tracking: {
                has: false,
                description: "Following tracks and other signs of passage."
            }
        }
    },
    STRENGTH: {
        value: -2,
        focuses: {
            Climbing: {
                has: false,
                description: "Scaling walls and other vertical obstacles."
            },
            Intimidation: {
                has: false,
                description: "Overawing others with your physical presence and threats."
            },
            Jumping: {
                has: false,
                description: "Making standing or running jumps."
            },
            Might: {
                has: false,
                description: "Feats of raw power, such as lifting or holding up heavy objects."
            }
        }
    },
    WILLPOWER: {
        value: -2,
        focuses: {
            Courage: {
                has: false,
                description: "Overcoming fear in the face of adversity."
            },
            Faith: {
                has: false,
                description: "Deriving inner strength through spiritual or moral belief."
            },
            Self_Descipline: {
                friendlyName: "Self-Descipline",
                has: false,
                description: "Focusing your mental energy or controlling your impulses and emotions."
            }
        }
    }
}

export default DefaultAbilityData