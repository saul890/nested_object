const colbalt = {
	atomicNumber: 27,
    properties: ["Hard", "Lustrous", "solid"],
    color: "Silver-gray",
    material: "Metal",
    pigment: "Colbalt Blue",
    previousNames: ["Metal Bismuth", "Kobold ore"],
    symbol: "Co",
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
        name: "Colbalt-59",
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
                    tunnels: "Safe"
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
                    tunnels: "Unsafe"
                }
            }
        }
        }
        }
