const map = L.map('map').setView([-5.0000, 25.0000], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const cobalt = {

	atomicNumber: 27,
    symbol: "Co",
    previousNames: ["Metal Bismuth", "Kobold ore"],
    isToxic: false,
    color: "Silver-gray",
    properties: ["Hard", "Lustrous", "solid"],
    material: "Metal",
    metal: "any of various opaque, fusible, ductile, and typically lustrous substances that are good conductors of electricity and heat, form cations by loss of electrons, and yield basic oxides and hydroxides especially : one that is a chemical element as distinguished from an alloy.",
    pigment: "#0047AB",


    atomicMass: "58.933195",
    electronConfig: "[Ar] 3d⁷4s²",
    electronegativity: "1.88",
    vanDerWaalsRadius: "200",

    minesPollute: ["Water", "Air", "Soil", "Crops"],
    childEmployment: 40000,
    replacementForNaturalGas: true,
    threats: ["Shortages", "Political Uncertainty"],

    useCases: {
        primaryUse: "lithium-ion batteries",
        manufacturingUse: "Magnetic, wear-resistant and high-strength alloys",
        otherUse: ["Glass", "Ceramics", "Inks", "Paints", "Varnishes"],
        companiesRelyingOnColbalt: ["Apple", "Tesla", "Google", "Dell", "Microsoft"],
    },

    producerInformation: {
        worldProductionAverage: 140000,
        largestMines: "DR Congo",
        highestProducer: "DR Congo",
        highProducers: ["New Calidonia", "China", "Australia", "Phillphilippines", "Russia", "Cuba", "Canida"],
        lowerProducers: ["Papa New Guinea", "Madigascar", "Morocco", "Zambia", "Finland", "South Africa", "USA"],
    },

    consumerInformation: {
        highestConsumer: "China",
        secondHighestConsumer: "Europe",
        thirdHighestConsumer: "USA",
    },
	
    chemicallyCombined: {
        combinedWith: ["Nickle", "Copper"],
        reason: "Natural alloys",
		planitaryLocation: "Earth's crust"
	},

    isotope: {
        name: "Cobalt-59",
        occurance: "Natural",
        type: "Stable isotope",
        meltingPoint: "1495",
        electronsPerShell: "2, 8, 15, 2",
    },

    miningInformation: {
        produced: "Reductive smelting",
        mining: [[97, "Byproduct"], [3, "Root"]],

    },


    colbaltDemand: function(batteryDemandLastYear, electricVehicleDemand, smartphoneDemand, otherElectronicDemands){
        batteryDemandThisYear = electricVehicleDemand + smartphoneDemand + otherElectronicDemands
        if(batteryDemandThisYear > batteryDemandLastYear) {
            console.log('The demand for colbalt is increasing')
        }
        else if (batteryDemandThisYear < batteryDemandLastYear){
            console.log('The demand for colbalt is decreasing')
        }
        else{
            console.log('The demand for colbalt is the same as last year')
        }
    },

    colbaltExtraction: function(regulated){
        if (regulated){
            return{
                workingConditions: {
                    children: "Not allowed",
                    pay: "High",
                    tools: "Adequate",
                    abusiveSuperior: false,
                    hours: "Long",
                    tunnels: "Safe",
                    healthIssues: false
                }
             }
        }

        else{
            return{
                workingConditions: {
                    children: "Workers",
                    pay: "Low",
                    tools: "Inadequate",
                    abusiveSuperior: true,
                    hours: "Very long",
                    tunnels: "Unsafe",
                    healthIssues: true
                }
            }
        }
        }
        };
