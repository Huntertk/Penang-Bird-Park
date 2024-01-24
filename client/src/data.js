import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/qvvM2Xv7/Picture1.png",
            "https://i.postimg.cc/sXcpH47N/Penang-Bird-Park-2.jpg",
            "https://i.postimg.cc/XJJJ3fth/Pig-nosed-Turtle2.jpg",
        ],
        title:"Penang Bird Park",
        desc:"A tropical paradise where Malaysian and international visitors alike can delight in the captivating beauty of diverse bird species amidst lush surroundings.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:36,
                    child:14,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:42,
                    child:18,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    
]

export const timeSlots = {
    weekend:[
        {
            name:"Trip 1",
            timeSlot:"10:00 am - 10:45 am"
        },
        {
            name:"Trip 2",
            timeSlot:"11:00 am - 11:45 am"
        },
        {
            name:"Trip 3",
            timeSlot:"12:00 am - 12:45 pm"
        },
        {
            name:"Trip 4",
            timeSlot:"01:15 pm - 02:00 pm"
        },
        {
            name:"Trip 5",
            timeSlot:"03:45 pm - 04:30 pm"
        },
        {
            name:"Trip 6",
            timeSlot:"05:00 pm - 05:45 pm"
        },
        {
            name:"Trip 7",
            timeSlot:"06:00 pm - 06:45 pm"
        },
        {
            name:"Trip 8",
            timeSlot:"06:45 pm - 07:30 pm"
        },
        {
            name:"Trip 9",
            timeSlot:"08:00 pm - 08:45 pm"
        },
    ],
    weekday:[
        {
            name:"Trip 2",
            timeSlot:"11:00 am - 11:45 am"
        },
        {
            name:"Trip 3",
            timeSlot:"12:00 am - 12:45 pm"
        },
        {
            name:"Trip 4",
            timeSlot:"01:15 pm - 02:00 pm"
        },
        {
            name:"Trip 5",
            timeSlot:"03:45 pm - 04:30 pm"
        },
        {
            name:"Trip 6",
            timeSlot:"05:00 pm - 05:45 pm"
        },
        {
            name:"Trip 7",
            timeSlot:"06:00 pm - 06:45 pm"
        },
        {
            name:"Trip 8",
            timeSlot:"06:45 pm - 07:30 pm"
        },
    ]
}

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/wjq30Y0g/Picture9.png",
        title:"Observing birds.",
        desc:"Of course, the main draw is the chance to see a diverse range of bird species. Thepark's layout is intended to give the birds a large, natural habitat."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/BvN6dY7H/Picture6.png",
        title:"Free-Flight Bird Shows",
        desc:"See whether the park hosts planned feeding events when guests can help feed particular types of birds while being supervised by park personnel."
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/QMjCYGmj/Picture3.png",
        title:"Snapshots",
        desc:"With so many picture chances available, tourists may capture the beauty of exotic and colorful birds in their natural habitat at the park.."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/t437zChr/Picture4.png",
        title:"Feeding Sessions",
        desc:"See whether the park hosts planned feeding events when guests can help feed particular types of birds while being supervised by park personnel."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Experience the delight of hand-feeding birds as they playfully hop onto your hands in the Geodesic Dome and two expansive aviaries.",
        image: "https://i.postimg.cc/LsSgdZ9K/Picture5.png"
    },
    {
        id: uuidv4(),
        desc:"Embark on a day outing with your family and friends at Penang Bird Park, a premier birdpark attraction in Malaysia boasting an extensive array of bird species and lush vegetation.",
        image: "https://i.postimg.cc/85M1TZtZ/Sun-Conure.jpg"
    },
    {
        id: uuidv4(),
        desc:"Visit the bird show and witness the captivating performances of well-trained parrots, eagles, owls, and other avian wonders that are sure to entertain and amaze you.",
        image: "https://i.postimg.cc/qvvM2Xv7/Picture1.png"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Opens everyday",
            "9am to 6pm",
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 13 to 59 years old.",
            "Child age is 2 to 12 years old.",
            "Below 2 years old enter for Free."
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Notes",
        ans:[
            "Visitors with OKU Card can enter for Free",
            "Senior Citizen may purchase directly from counter.",
            "Bird Show Hours : 11 am & 3:30 pm (Daily)",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
            "If it rains after redemption, you may refer to the counter for further information"
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Are these feedings session or bird show ?",
        ans:"Penang Bird Park presents a bird display daily between 11:00 AM and 3:30 PM."
    },
    {
        id: uuidv4(),
        ques:"Are there guided tours available ?",
        ans:"There are several places or bird locations that provide tour guides."
    },
    {
        id: uuidv4(),
        ques:"What are the opening hours of the Penang Bird Park ?",
        ans:"Penang Bird Park is open every day from 9 am to 6 pm"
    },
    {
        id: uuidv4(),
        ques:"Can I bring strollers or wheelchairs inside ?",
        ans:"Yes you may bring."
    },
    {
        id: uuidv4(),
        ques:"Can I bring my camera inside the park ?",
        ans:"Yes. But please concerned enough not to use Flash when taking pictures."
    },
    {
        id: uuidv4(),
        ques:"Can I buy tickets online for Senior Citizen ?",
        ans:"No, tickets for senior citizen need to be purchased directly at the counter"
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = [
    "January 25th, 2024",
    "February 1st, 2024",
    "February 12th, 2024",
]