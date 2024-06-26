// Importing images for hotels
import Hyatt from '../images/Hyatt.png';
import QueenMary from '../images/Queen Mary.png';
import Renaissance from '../images/Renaissance.png';
import Residence from '../images/Residence Inn.png';

// Array of hotel objects with their properties
const hotelSchemas = [
  // Array containing hotels in Long Beach and Hong Kong
  [
    { id: "1", name: "Hyatt", rating: 4.5, priceAverage: 399, location: "Long Beach", image: Hyatt },
    { id: "2", name: "Queen Mary", rating: 4.2, priceAverage: 339, location: "Long Beach", image: QueenMary },
    // Placeholder image used for a hotel without a provided image
    { id: "3", name: "Hong Kong", rating: 2.4, priceAverage: 126, location: "Hong Kong", image: "https://via.placeholder.com/325x244" }
  ],
  // Array containing hotels in Long Beach and El Salvador
  [
    { id: "4", name: "Renaissance", rating: 4.3, priceAverage: 319, location: "Long Beach", image: Renaissance },
    { id: "5", name: "Residence Inn", rating: 4.5, priceAverage: 359, location: "Long Beach", image: Residence },
    // Placeholder image used for a hotel without a provided image
    { id: "6", name: "El Salvador", rating: 1.3, priceAverage: 349, location: "El Salvador", image: "https://via.placeholder.com/325x244" }
  ]
];

// Exporting the array of hotel objects
export default hotelSchemas;
