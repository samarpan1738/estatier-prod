export const filterState = {
    "Property Type": {
        Residential: ["Bungalow"],
        Commercial: [],
        Others: [],
    },
    "Top Localities": "Raj Nagar Extension",
    Budget: "5 Lac",
    BHK: "1 BHK",
    "More Filters": {
        Construction: [],
        Ownership: [],
        Sale: [],
        Covered: [],
        Bathroom: [],
        Furnishing: [],
        Facing: [],
        Floor: [],
        Amenities: [],
    },

    "Sort By": "Relevance",
    // Residential: {
    //     Flat: true,
    //     "House/Villa": false,
    // },
    // Commercial: {
    //     "Office Space": true,
    //     "Shop/Showroom": false,
    //     "Commercial Land": false,
    //     "Coworking Space": false,
    //     "Warehouse/Godown": false,
    //     "Industrial Building": false,
    //     "Industrial Shed": false,
    // },
    // Others: { "Agriculture Land": false, "Farm House": false },
    // "Raj Nagar Extension": true,
    // Indirapuram: false,
    // "Crossings Republik": false,
    // Vasundhara: false,
    // "NH 24": false,
    // Vaishali: false,
    // "5 Lac": true,
    // "10 Lac": false,
    // "15 Lac": false,
    // ">15 Lac": false,
    // "1 BHK": true,
    // "2 BHK": false,
    // "3 BHK": false,
    // "4 BHK": false,
    // "5 BHK": false,
    // "> 5 BHK": false,
    // Construction: { "Ready to move": false, "Under Construction": false },
    // Ownership: { "Ready to move": false, "Under Construction": false },
    // Sale: { "Ready to move": false, "Under Construction": false },
    // Covered: { "Ready to move": false, "Under Construction": false },
    // Bathroom: { "Ready to move": false, "Under Construction": false },
    // Furnishing: { "Ready to move": false, "Under Construction": false },
    // Facing: { "Ready to move": false, "Under Construction": false },
    // Floor: { "Ready to move": false, "Under Construction": false },
    // Amenities: { "Ready to move": false, "Under Construction": false },
};
export const filterData = [
    {
        moreFilters: true,
        title: "Property Type",
        className: "prop-type",
        options: [
            {
                title: "Residential",
                options: ["Flat", "House/Villa", "Bungalow"],
            },
            {
                title: "Commercial",
                options: [
                    "Office Space",
                    "Shop/Showroom",
                    "Commercial Land",
                    "Coworking Space",
                    "Warehouse/Godown",
                    "Industrial Building",
                    "Industrial Shed",
                ],
            },
            {
                title: "Others",
                options: ["Agriculture Land", "Farm House"],
            },
        ],
    },
    {
        title: "Top Localities",
        className: "top-localities",
        options: ["Raj Nagar Extension", "Indirapuram", "Crossings Republik", "Vasundhara", "NH 24", "Vaishali"],
    },
    {
        title: "Budget",
        className: "budget",
        options: ["5 Lac", "10 Lac", "15 Lac", ">15 Lac"],
    },
    {
        title: "BHK",
        className: "bhk-cnt",
        options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "> 5 BHK"],
    },
    {
        moreFilters: true,
        title: "More Filters",
        className: "more",
        options: [
            {
                title: "Construction",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Ownership",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Sale",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Covered",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Bathroom",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Furnishing",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Facing",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Floor",
                options: ["Ready to move", "Under Construction"],
            },
            {
                title: "Amenities",
                options: ["Ready to move", "Under Construction"],
            },
        ],
        sidebar: true,
    },

    {
        title: "Sort By",
        className: "sort-by",
        options: [
            "Relevance",
            "Price - Low to High",
            "Price - High to Low",
            "Most Recent",
            "Rate/sqft - Low to High",
            "Rate/sqft - High to Low",
        ],
    },
];

// TODO: Filter data should come form backend
