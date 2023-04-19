import aws from '../../../assets/logo/aws.svg';
import andela from '../../../assets/logo/andela.svg';
import yt from '../../../assets/logo/youtube.svg';
import slack from '../../../assets/logo/slack.svg';
import master from '../../../assets/logo/mastercard.svg';
import tik from '../../../assets/logo/tiktok.svg';
import apple from '../../../assets/logo/apple.svg';
import venmo from '../../../assets/logo/shopify.svg';
import visa from '../../../assets/logo/visa.svg'


export const houses = {
    1: {
        id: 1,
        house: "3 Bedroom Flat",
        address: "15 Adekunle Street",
        city: "Ikeja",
        state: "Lagos",
        available: 4,
        status: "rent",
        price: 1000000
    },
    2: {
        id: 2,
        house: "Duplex",
        address: "3A Onitsha Crescent",
        city: "Gwarinpa",
        state: "Abuja",
        available: 2,
        status: "rent",
        price: 2500000
    },
    3: {
        id: 3,
        house: "Bungalow",
        address: "2 Olumo Street",
        city: "Akure",
        state: "Ondo",
        available: 1,
        status: "sale",
        price: 5000000
    },
    4: {
        id: 4,
        house: "Terrace House",
        address: "7B Aromire Avenue",
        city: "Ikeja",
        state: "Lagos",
        available: 3,
        status: "rent",
        price: 1500000
    },
    5: {
        id: 5,
        house: "2 Bedroom Flat",
        address: "22 Araromi Street",
        city: "Surulere",
        state: "Lagos",
        available: 1,
        status: "sale",
        price: 3000000
    },
    6: {
        id: 6,
        house: "Mini Flat",
        address: "10 Bajulaiye Road",
        city: "Shomolu",
        state: "Lagos",
        available: 5,
        status: "rent",
        price: 700000
    },
    7: {
        id: 7,
        house: "Detached House",
        address: "2 Efunlaruja Close",
        city: "Victoria Island",
        state: "Lagos",
        available: 1,
        status: "sale",
        price: 12000000
    },
    8: {
        id: 8,
        house: "3 Bedroom Flat",
        address: "8 Kusenla Road",
        city: "Ikate",
        state: "Lagos",
        available: 2,
        status: "rent",
        price: 2000000
    },
    9: {
        id: 9,
        house: "4 Bedroom Duplex",
        address: "12 Isale Eko Avenue",
        city: "Marina",
        state: "Lagos",
        available: 1,
        status: "sale",
        price: 9000000
    },
    10: {
        id: 10,
        house: "Self Contain",
        address: "3 Orobiyi Street",
        city: "Yaba",
        state: "Lagos",
        available: 3,
        status: "rent",
        price: 500000
    },
    11: {
        id: 11,
        house: "2 Bedroom Flat",
        address: "7 Oladunni Street",
        city: "Ojota",
        state: "Lagos",
        available: 1,
        status: "sale",
        price: 3500000
    },
    12: {
        id: 12,
        house: "5 Bedroom Duplex",
        address: "15 Fatai Atere Way",
        city: "Mushin",
        state: "Lagos",
        available: 2,
        status: "rent",
        price: 9000000
    }
}




export const jobs = {
    job1: {
        id: 1,
        position: "Software Engineer",
        company: "Andela",
        state: "Florida",
        rating: 4.8,
        photo: andela,
        jobsAvailable: 20
    },
    job2: {
        id: 2,
        position: "Front-end Developer",
        company: "Youtube",
        state: "Lagos",
        photo: yt,
        rating: 4.5,
        jobsAvailable: 10
    },
    job3: {
        id: 3,
        position: "Data Analyst",
        company: "Mastercard",
        photo: master,
        state: "Abuja",
        rating: 4.2,
        jobsAvailable: 5
    },
    job4: {
        id: 4,
        position: "Full-stack Developer",
        company: "Slack",
        state: "Lagos",
        photo: slack,
        rating: 4.1,
        jobsAvailable: 7
    },
    job5: {
        id: 5,
        position: "Product Manager",
        company: "Tiktok",
        photo: tik,
        state: "Lagos",
        rating: 4.9,
        jobsAvailable: 3
    },
    job6: {
        id: 6,
        position: "UI/UX Designer",
        company: "Visa",
        photo: visa,
        state: "Norway",
        rating: 4.4,
        jobsAvailable: 2
    },
    job7: {
        id: 7,
        position: "Cybersecurity Analyst",
        company: "Mastercard",
        photo: master,
        state: "Lagos",
        rating: 4.6,
        jobsAvailable: 8
    },
    job8: {
        id: 8,
        position: "Backend Developer",
        company: "Apple",
        state: "Italy",
        photo: apple,
        rating: 4.3,
        jobsAvailable: 4
    },
    job9: {
        id: 9,
        position: "Cloud Solutions Architect",
        company: "Shopify",
        photo: venmo,
        state: "Michigan",
        rating: 4.0,
        jobsAvailable: 2
    },
    job10: {
        id: 10,
        position: "Mobile Developer",
        company: "Slack",
        photo: slack,
        state: "Lagos",
        rating: 4.7,
        jobsAvailable: 6
    },
    job11: {
        id: 11,
        position: "DevOps Engineer",
        company: "Andela",
        photo: andela,
        state: "Lagos",
        rating: 4.8,
        jobsAvailable: 3
    },
    job12: {
        id: 12,
        position: "Business Analyst",
        company: "AWS",
        photo: aws,
        state: "Tokyo",
        rating: 4.6,
        jobsAvailable: 5
    }
}



export const services = {
    "1": {
        "id": 1,
        "service": "Plumbing",
        "location": "Lagos",
        "provider": "Johnson",
        "availability": "available",
        "price": 2000,
        "rating": 4.5
    },
    "2": {
        "id": 2,
        "service": "Carpentry",
        "location": "Abuja",
        "provider": "James",
        "availability": "busy",
        "price": 2500,
        "rating": 4.0
    },
    "3": {
        "id": 3,
        "service": "Electrical",
        "location": "Ibadan",
        "provider": "Ade",
        "availability": "unavailable",
        "price": 3000,
        "rating": 3.5
    },
    "4": {
        "id": 4,
        "service": "Painting",
        "location": "Port Harcourt",
        "provider": "Peter",
        "availability": "available",
        "price": 1800,
        "rating": 4.8
    },
    "5": {
        "id": 5,
        "service": "Tiling",
        "location": "Enugu",
        "provider": "Chukwuma",
        "availability": "busy",
        "price": 3500,
        "rating": 3.9
    },
    "6": {
        "id": 6,
        "service": "Furniture Making",
        "location": "Kano",
        "provider": "Aliyu",
        "availability": "unavailable",
        "price": 4000,
        "rating": 4.2
    },
    "7": {
        "id": 7,
        "service": "Generator Repair",
        "location": "Ilorin",
        "provider": "Abdul",
        "availability": "available",
        "price": 2200,
        "rating": 4.6
    },
    "8": {
        "id": 8,
        "service": "Welding",
        "location": "Jos",
        "provider": "John",
        "availability": "busy",
        "price": 2700,
        "rating": 4.1
    },
    "9": {
        "id": 9,
        "service": "Bricklaying",
        "location": "Kaduna",
        "provider": "Suleiman",
        "availability": "unavailable",
        "price": 3200,
        "rating": 3.7
    },
    "10": {
        "id": 10,
        "service": "Plastering",
        "location": "Benin City",
        "provider": "Matthew",
        "availability": "available",
        "price": 1900,
        "rating": 4.3
    },
    "11": {
        "id": 11,
        "service": "Roofing",
        "location": "Warri",
        "provider": "Emmanuel",
        "availability": "busy",
        "price": 3000,
        "rating": 4.4
    },
    "12": {
        "id": 12,
        "service": "Aluminum Fabrication",
        "location": "Abeokuta",
        "provider": "Kuti",
        "availability": "busy",
        "price": 3000,
        "rating": 4.4
    }
}


export const sale =
{
    "1": {
        "id": 1,
        "name": "iPhone 12 Pro Max",
        "price": 450000,
        "location": "Lekki, Lagos",
        "phone": "08160567",
        "rating": 4.5,
        "availability": "available"
    },
    "2": {
        "id": 2,
        "name": "Samsung 55-inch QLED TV",
        "price": 350000,
        "location": "Gwarinpa, Abuja",
        "phone": "08179876543",
        "rating": 4.2,
        "availability": "available"
    },
    "3": {
        "id": 3,
        "name": "Toyota Corolla 2019",
        "price": 9000000,
        "location": "Victoria Island, Lagos",
        "phone": "08098765432",
        "rating": 4.8,
        "availability": "sold"
    },
    "4": {
        "id": 4,
        "name": "HP Envy x360 Laptop",
        "price": 250000,
        "location": "Yaba, Lagos",
        "phone": "08034567890",
        "rating": 4.0,
        "availability": "available"
    },
    "5": {
        "id": 5,
        "name": "Apple Watch Series 6",
        "price": 150000,
        "location": "Wuse, Abuja",
        "phone": "08023555679",
        "rating": 4.3,
        "availability": "available"
    },
    "6": {
        "id": 6,
        "name": "Bosch 7kg Washing Machine",
        "price": 95000,
        "location": "Ogba, Lagos",
        "phone": "08176543210",
        "rating": 4.5,
        "availability": "available"
    },
    "7": {
        "id": 7,
        "name": "Land Rover Discovery Sport 2020",
        "price": 32000000,
        "location": "Asokoro, Abuja",
        "phone": "08098765432",
        "rating": 4.9,
        "availability": "available"
    },
    "8": {
        "id": 8,
        "name": "Dell G5 Gaming Laptop",
        "price": 400000,
        "location": "Ikoyi, Lagos",
        "phone": "08135796412",
        "rating": 4.6,
        "availability": "available"
    },
    "9": {
        "id": 9,
        "name": "Canon EOS R6 Camera",
        "price": 1250000,
        "location": "Maitama, Abuja",
        "phone": "08162435791",
        "rating": 4.7,
        "availability": "available"
    },
    "10": {
        "id": 10,
        "name": "Toyota Sienna 2015",
        "price": 3200000,
        "location": "Opebi, Lagos",
        "phone": "08176432956",
        "rating": 4.4,
        "availability": "available"
    },
    "11": {
        "id": 11,
        "name": "Samsung Galaxy S21",
        "price": 250000,
        "location": "Ipaja, Lagos",
        "phone": "08176435556",
        "rating": 4.4,
        "availability": "available"
    },
    "12": {
        "id": 4,
        "item": "LG Smart TV",
        "price": 350000,
        "location": "Wuse, Abuja",
        "phone": "08045678901",
        "rating": 4.4,
        "availability": "available"
    }
}  