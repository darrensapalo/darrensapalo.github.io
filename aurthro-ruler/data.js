var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    information_tree = {
        text: {
            name: "Information Tree",
            title: "Enables you to perform the Research Action and invest your money into the development of Aurth.",
            contact: "Unlocked by Pharmadrug",
        },
        image: "./images/information_tree.png"
    },

    business_tree = {
        parent: information_tree,
        text:{
            name: "Business Tree",
            title: "Enables you to make more money through daily quests requested by the merchants of Alberta.",
        },
        stackChildren: true,
        image: "./images/business_tree.png"
    },
    cbo = {
        parent: information_tree,
        stackChildren: true,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet.",
        },
        image: "./images/locked_tree.png"
    },
    cdo = {
        parent: information_tree,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet.",
            // contact: "Tel: 01 213 123 134",
        },
        image: "./images/locked_tree.png"
    },
    cio = {
        parent: business_tree,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet."
        },
        image: "./images/locked_tree.png"
    },
    ciso = {
        parent: business_tree,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet.",
            // contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "./images/locked_tree.png"
    },
    cio2 = {
        parent: cdo,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet."
        },
        // link: {
        //     href: "http://www.google.com"
        // },
        image: "./images/locked_tree.png"
    },
    ciso2 = {
        parent: cbo,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet."
        },
        image: "./images/locked_tree.png"
    },
    ciso3 = {
        parent: cbo,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet."
        },
        image: "./images/locked_tree.png"
    },
    ciso4 = {
        parent: cbo,
        text:{
            name: "Unknown Skill Tree",
            title: "This skill tree hasn't been researched or unlocked yet."
        },
        image: "./images/locked_tree.png"
    }

    chart_config = [
        config,
        information_tree,
        business_tree,
        cbo,
        cdo,
        // cio,
        // ciso,
        // cio2,
        // ciso2,
        // ciso3,
        // ciso4
    ];