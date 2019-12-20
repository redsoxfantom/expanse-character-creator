const BackgroundData = {
    Academic: {
        description: "You spent a lot more time in schools and academic environments than your peers. Perhaps you lived at a boarding school, or someone in your family worked at a college or university. You’re inclined to be a bit more bookish and to know your way around academic institutions.",
        social_class: "MIDDLE CLASS",
        rolls: [
            1,
            2
        ],
        ability: "INTELLIGENCE",
        focus: {
            type: "ANY_FOCUS",
            ability: "INTELLIGENCE"
        },
        talent: [
            "Knowledge",
            "Linguistics"
        ],
        benefits: {
            2: {
                type: "ABILITY_INCREASE",
                ability: "COMMUNICATION"
            },
            3: {
                type: "SINGLE_FOCUS",
                ability: "INTELLIGENCE",
                focus: "Research"
            },
            4: {
                type: "SINGLE_FOCUS",
                ability: "INTELLIGENCE",
                focus: "Research"
            },
            5: {
                type: "INCOME",
                income: 2
            },
            6: {
                type: "SINGLE_FOCUS",
                ability: "INTELLIGENCE",
                focus: "Science"
            },
            7: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            8: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            9: {
                type: "SINGLE_FOCUS",
                ability: "WILLPOWER",
                focus: "Self_Descipline"
            },
            10: {
                type: "ANY_FOCUS",
                ability: "INTELLIGENCE"
            },
            11: {
                type: "ANY_FOCUS",
                ability: "INTELLIGENCE"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "WILLPOWER"
            }
        }
    },
    Aristocratic: {
        description: "You come from a family with a history of privilege and responsibility, although it might have less of both these days. You might be actual nobility from an Earth culture that still has it, or “just” belong to an important family with equivalent wealth and influence.",
        social_class: "UPPER CLASS",
        rolls: [
            1,
            2
        ],
        ability: "COMMUNICATION",
        focus: {
            type: "PICK_ONE",
            options: [
                {
                    ability: "COMMUNICATION",
                    focus: "Etiquette"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Science"
                }
            ]
        },
        talent: [
            "Affluent",
            "Contacts"
        ],
        benefits: {
            2: {
                type: "ABILITY_INCREASE",
                ability: "ACCURACY"
            },
            3: {
                type: "INCOME",
                income: 2
            },
            4: {
                type: "INCOME",
                income: 2
            },
            5: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Persuasion"
            },
            6: {
                type: "SINGLE_FOCUS",
                ability: "DEXTERITY",
                focus: "Piloting"
            },
            7: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            8: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            9: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Gambling"
            },
            10: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Leadership"
            },
            11: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Leadership"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "WILLPOWER"
            }
        }
    },
    Bohemian: {
        description: "You grew up in an experimental, eccentric, or creative community. Perhaps you belonged to a commune, an artist colony, or some “off the grid” intentional community. You may be the child of a group or polyamorous marriage, particularly on Earth. You’re unfamiliar with some of the things people take for granted, but had plenty of opportunities to expand your horizons. You might be trying to fit into mainstream society after some time away, or you might revel in your offbeat lifestyle.",
        social_class: "OUTSIDER",
        rolls: [
            1,
            2
        ],
        ability: "COMMUNICATION",
        focus: {
            type: "PICK_ONE",
            options: [
                {
                    ability: "COMMUNICATION",
                    focus: "Performing"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Art"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Business"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Cryptography"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Current_Affairs"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Demolitions"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Engineering"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Evaluation"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Law"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Medicine"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Navigation"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Research"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Science"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Security"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Tactics"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Technology"
                }
            ]
        },
        talent: [
            "Carousing",
            "Performance"
        ],
        benefits: {
            2: {
                type: "ABILITY_INCREASE",
                ability: "DEXTERITY"
            },
            3: {
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Empathy"
            },
            4: {
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Empathy"
            },
            5: {
                type: "PICK_ONE",
                options: [
                    {
                        ability: "WILLPOWER",
                        focus: "Courage"
                    },
                    {
                        ability: "WILLPOWER",
                        focus: "Faith"
                    }
                ]
            },
            6: {
                type: "PICK_ONE",
                options: [
                    {
                        ability: "WILLPOWER",
                        focus: "Courage"
                    },
                    {
                        ability: "WILLPOWER",
                        focus: "Faith"
                    }
                ]
            },
            7: {
                type: "ABILITY_INCREASE",
                ability: "CONSTITUTION"
            },
            8: {
                type: "ABILITY_INCREASE",
                ability: "CONSTITUTION"
            },
            9: {
                type: "PICK_ONE",
                options: [
                    {
                        ability: "DEXTERITY",
                        focus: "Acrobatics"
                    },
                    {
                        ability: "DEXTERITY",
                        focus: "Free_Fall"
                    }
                ]
            },
            10: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Persuasion"
            },
            11: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Persuasion"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            }
        }
    },
    Corporate: {
        description: "Your early life was tied up in corporate culture, most likely due to family members who built their lives around a company in some fashion. Your family might be influential stockholders or include powerful executives, and they may well have expected you to follow their example—whether you did or not.",
        social_class: "UPPER CLASS",
        rolls: [
            3,
            4
        ],
        ability: "COMMUNICATION",
        focus: {
            type: "PICK_ONE",
            options: [
                {
                    ability: "COMMUNICATION",
                    focus: "Bargaining"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Business"
                }
            ]
        },
        talent: [
            "Contacts",
            "Intrigue"
        ],
        benefits: {
            2: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            3: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Persuasion"
            },
            4: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Persuasion"
            },
            5: {
                type: "SINGLE_FOCUS",
                ability: "INTELLIGENCE",
                focus: "Evaluation"
            },
            6: {
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Empathy"
            },
            7: {
                type: "ABILITY_INCREASE",
                ability: "INTELLIGENCE"
            },
            8: {
                type: "ABILITY_INCREASE",
                ability: "INTELLIGENCE"
            },
            9: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Expression"
            },
            10: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Leadership"
            },
            11: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Leadership"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "ACCURACY"
            }
        }
    },
    Cosmopolitan: {
        description: "You were raised in a cosmopolitan environment: a big city, or even a series of great cities, where people from all over the world came and mixed. You were exposed to some of the best—and, potentially, the worst—of humanity and human achievement.",
        social_class: "UPPER CLASS",
        rolls: [
            5,
            6
        ],
        ability: "INTELLIGENCE",
        focus: {
            type: "PICK_ONE",
            options: [
                {
                    ability: "COMMUNICATION",
                    focus: "Etiquette"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Current_Affairs"
                }
            ]
        },
        talent: [
            "Knowledge",
            "Observation"
        ],
        benefits: {
            2: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            3: {
                type: "ANY_FOCUS",
                ability: "INTELLIGENCE"
            },
            4: {
                type: "ANY_FOCUS",
                ability: "INTELLIGENCE"
            },
            5: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Persuasion"
            },
            6: {
                type: "SINGLE_FOCUS",
                ability: "INTELLIGENCE",
                focus: "Art"
            },
            7: {
                type: "ABILITY_INCREASE",
                ability: "COMMUNICATION"
            },
            8: {
                type: "ABILITY_INCREASE",
                ability: "COMMUNICATION"
            },
            9: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Bargaining"
            },
            10: {
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Seeing"
            },
            11: {
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Seeing"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "WILLPOWER"
            }
        }
    },
    Exile:{
        description: "You might have lived a very different life were it not for some event that drove you from society. Feel free to roll again on the Social Class and Background tables to get a glimpse of what your former life was. Whatever the case, you (and possibly your family) were exiled by war, disaster, disgrace, or some other misfortune, forced to start over with virtually nothing.",
        social_class: "OUTSIDER",
        rolls: [
            3,
            4
        ],
        ability: "CONSTITUTION",
        focus: {
            type: "PICK_ONE",
            options: [
                {
                    ability: "FIGHTING",
                    focus: "Brawling"
                },
                {
                    ability: "WILLPOWER",
                    focus: "Self_Descipline"
                }
            ]
        },
        talent:[
            "Affluent",
            "Fringer"
        ],
        benefits: {
            2: {
                type: "ABILITY_INCREASE",
                ability: "FIGHTING"
            },
            3: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Bargaining"
            },
            4: {
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Bargaining"
            },
            5: {
                type: "SINGLE_FOCUS",
                ability: "DEXTERITY",
                focus: "Stealth"
            },
            6: {
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Searching"
            },
            7: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            8: {
                type: "ABILITY_INCREASE",
                ability: "PERCEPTION"
            },
            9: {
                type: "SINGLE_FOCUS",
                ability: "ACCURACY",
                focus: "Pistols"
            },
            10: {
                type: "SINGLE_FOCUS",
                ability: "DEXTERITY",
                focus: "Driving"
            },
            11: {
                type: "SINGLE_FOCUS",
                ability: "DEXTERITY",
                focus: "Driving"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "WILLPOWER"
            }
        }
    },
    Military:{
        description: "You grew up as a military brat. You were either a dependent with family members in military service, or you lived close by or on a military installation. You’re familiar with military culture and picked up a thing or two from it along the way.",
        social_class: "LOWER CLASS",
        rolls: [
            1,
            2
        ],
        ability: "FIGHTING",
        focus: {
            type: "PICK_ONE",
            options: [
                {
                    ability: "ACCURACY",
                    focus: "Pistols"
                },
                {
                    ability: "INTELLIGENCE",
                    focus: "Tactics"
                }
            ]
        },
        talent: [
            "Dual_Weapon_Style",
            "Overwhelm_Style",
            "Pistol_Style",
            "Rifle_Style",
            "Self_Defense_Style",
            "Single_Weapon_Style",
            "Striking_Style",
            "Thrown_Weapon_Style",
            "Two_Handed_Style",
            "Observation"
        ],
        benefits: {
            2:{
                type: "ABILITY_INCREASE",
                ability: "WILLPOWER"
            },
            3:{
                type: "SINGLE_FOCUS",
                ability: "ACCURACY",
                focus: "Rifles"
            },
            4:{
                type: "SINGLE_FOCUS",
                ability: "ACCURACY",
                focus: "Rifles"
            },
            5:{
                type: "SINGLE_FOCUS",
                ability: "COMMUNICATION",
                focus: "Leadership"
            },
            6:{
                type: "SINGLE_FOCUS",
                ability: "INTELLIGENCE",
                focus: "Security"
            },
            7:{
                type: "ABILITY_INCREASE",
                ability: "STRENGTH"
            },
            8:{
                type: "ABILITY_INCREASE",
                ability: "STRENGTH"
            },
            9:{
                type: "SINGLE_FOCUS",
                ability: "PERCEPTION",
                focus: "Searching"
            },
            10:{
                type: "SINGLE_FOCUS",
                ability: "FIGHTING",
                focus: "Brawling"
            },
            11:{
                type: "SINGLE_FOCUS",
                ability: "FIGHTING",
                focus: "Brawling"
            },
            12: {
                type: "ABILITY_INCREASE",
                ability: "CONSTITUTION"
            }
        }
    }
}

export default BackgroundData