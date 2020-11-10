var setup = {

    loadPopUp: true,


    controllers: [

        {
            name: "defaultLogger",

            logInfoConsole: false,
            logActionConsole: false,
            logEventConsole: false
        },

        {
            name: "emailController",

            createHeadSection: false
        },

        {
            name: "generationFormController",
        },

        {
            name: "canvasHoverController",
        },

        {
            name: "canvasMarkController",
        },

        {
            name: "canvasSelectController"
        },

        {
            name: "canvasFilterController"
        },

        {
            name: "helpController",
            metaphor: "City bricks"
        },

        {
            name: "infoController",
            system: "Freemind",
            link: "https://freemind.sf.net",
            noc: true,
            loc: 72329
        },

        {
            name: "shareController",
            showDebugOutput: false
        },

        {
            name: "canvasFlyToController"
        },

        {
            name: "searchController"
        },

        {
            name: "packageExplorerController",
        },

        {
            name: "sourceCodeController",
            url: "https://raw.githubusercontent.com/softvis-research/freemind-mmx/master/freemind/",
            showCodeWindowButton: true,
            showCode: true
        },

        {
            name: "relationConnectorController",
            fixPositionY: false,
            showInnerRelations: false,
            sourceStartAtParentBorder: false,
            targetEndAtParentBorder: false,
            sourceStartAtBorder: true,
            targetEndAtBorder: true,
            createEndpoints: false
        },
        {
            name: "relationTransparencyController",
        },

        {
            name: "relationHighlightController"
        },
        {
            name: "menuController",
            menuMapping: [

                {
                    title: "View",
                    subMenu: true,
                    items: [
                        {
                            title: "FlyTo",
                            toggle: true,
                            eventOn: "canvasFlyToController.activate",
                            eventOff: "canvasFlyToController.deactivate",
                        },

                        {
                            title: "Reset Visualization",
                            event: "application.reset",
                        },
                    ]
                },

                {
                    title: "Relations",
                    subMenu: true,
                    items: [
                        {
                            title: "Relation Connectors",
                            toggle: true,
                            eventOn: "relationConnectorController.activate",
                            eventOff: "relationConnectorController.deactivate",
                        },
                        {
                            title: "Relation Transparency",
                            toggle: true,
                            eventOn: "relationTransparencyController.activate",
                            eventOff: "relationTransparencyController.deactivate",
                        },
                        {
                            title: "Relation Highlight",
                            toggle: true,
                            eventOn: "relationHighlightController.activate",
                            eventOff: "relationHighlightController.deactivate",
                        },
                    ]
                },

                 {
                    title: "Showcases",
                    subMenu: true,
                    items: [
                        {
                            title: "City Original",
                            link: true,
                            url: "index.php?setup=web/City freemind&model=City original freemind&aframe=false"
                        },
                        {
                            title: "City Bricks",
                            link: true,
                            url: "index.php?setup=web/City bricks freemind&model=City%20bricks freemind&aframe=false"
                        },
                        {
                            title: "City Floor",
                            link: true,
                            url: "index.php?setup=web/City floor freemind&model=City%20floor freemind&aframe=false"
                        },
                        {
                            title: "Recursive Disk",
                            link: true,
                            url: "index.php?setup=web/RD freemind&model=RD freemind&aframe=false"
                        },
                        {
                            title: "RD: CPP Variability",
                            link: true,
                            url: "index.php?setup=web/RD C&model=RD C busybox&aframe=true"
                        }
                    ]
                },

                {
                    title: "About",
                    subMenu: true,
                    items: [
                        {
                            title: "Research Group",
                            link: true,
                            url: "http://home.uni-leipzig.de/svis/"
                        },
                        {
                            title: "Feedback",
                            event: "emailController.openMailPopUp",
                        },
                        {
                            title: "Impressum",
                            popup: true,
                            text: "<b>Universität Leipzig</b><br\/\>" +
                                " <br\/\>" +
                                "Wirtschaftswissenschaftliche Fakultät<br\/\>" +
                                "Institut für Wirtschaftsinformatik<br\/\>" +
                                "Grimmaische Straße 12<br\/\>" +
                                "D - 04109 Leipzig<br\/\>" +
                                " <br\/\>" +
                                "<b>Dr. Richard Müller</b><br\/\>" +
                                "rmueller(-a-t-)wifa.uni-leipzig.de<br\/\>",
                            height: 200,
                            width: 2050,
                        },
                        {
                            title: "Privacy Policy",
                            link: true,
                            url: "http://home.uni-leipzig.de/svis/privacy-policy/"
                        }
                    ]
                },
            ]
        }
    ],


    uis: [


        {
            name: "UI0",

            navigation: {
                //examine, walk, fly, helicopter, lookAt, turntable, game
                type: "turntable",

                //turntable last 2 values - accepted values are between 0 and PI - 0.0 - 1,5 at Y-axis
//                typeParams: "0.0 0.0 1.57 3.1",
 typeParams: "0.0 0.0 0.001 1.5",

                //speed: 10
            },


            area: {
                name: "top",
                orientation: "horizontal",
                resizable: false,
                collapsible: false,
                first: {
                    size: "75px",
                    collapsible: false,
                    controllers: [
                        {name: "menuController"},
                        {name: "searchController"},
                        {name: "emailController"},
                        {name: "generationFormController"},
                    ],
                },
                second: {
                    size: "100%",
                    collapsible: false,
                    area: {
                        orientation: "vertical",
                        name: "leftPanel",
                        size: "20%",
                        first: {
                            size: "20%",
                            area: {
                                size: "100%",
                                collapsible: false,
                                orientation: "horizontal",
                                name: "packagePanel",
                                first: {
                                    collapsible: false,
                                            size: "100%",
                                            expanders: [
                                                {
                                                    name: "packageExplorer",
                                                    title: "Package Explorer",
                                                    controllers: [
                                                        {name: "packageExplorerController"}
                                                    ],
                                        }
                                            ]
                                        },
                                        second: {},
                            },
                        },
                        second: {
                            collapsible: false,
                            area: {
                                orientation: "vertical",
                                collapsible: false,
                                name: "canvas",
                                size: "50%",
                                first: {
                                    size: "80%",
                                    collapsible: false,
                                    canvas: {},
                                    controllers: [
                                        {name: "defaultLogger"},
                                        {name: "canvasSelectController"},
                                        {name: "canvasMarkController"},
                                        {name: "canvasHoverController"},
                                        {name: "canvasFilterController"},
                                        {name: "helpController"},
                                        {name: "infoController"},
                                        {name: "shareController"},
                                        {name: "canvasFlyToController"},
                                        {name: "relationConnectorController"},
                                        {name: "relationTransparencyController"},
                                        {name: "relationHighlightController"},
                                    ],
                                },
                                second: {
                                        collapsible: false,
                                        name: "rightPael",
                                            expanders: [
                                                {
                                                    name: "CodeViewer",
                                                    title: "CodeViewer",
                                                    controllers: [
                                                        {name: "sourceCodeController"}
                                                    ],
                                                },
                                            ],
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
};
