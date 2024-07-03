import avatar3 from './public/avatar3.png'
import avatar2 from './public/avatar2.png'
import avatar1 from './public/avatar1.png'

export const categories = [
    'Family',
    'Criminal Defense',
    'Business',
    'Personal Injury',
    'Bankruptcy & Finances',
    'Products & Services',
    'Employment',
    'Real Estate',
    'Immigration',
    'Wills, Trusts & Estates',
    'Government',
    'Intellectual Property',
]

export const subCategories = [
    'Adoptions',
    'Child Support',
    'Guardianship',
    'Separations',
    'Child Custody and Visitation',
    'Divorce',
    'Paternity',
    'Spouse Support or Alimony'
]

export const otherCategories = [
    'Abuse (Child, Domestic, Sexual)',
    'Agencies & Administration',
    'Automobile ( DUI, Crimes, Speeding )',
    'Automobiles ( Accidents, Insurance )',
    'Banking ( Business, Consumer )',
    'Bars & Restaurants',
    'Business Formation & Dissolution',
    'Children (Adoption, Custody, Support)',
    'Class Actions (Bad Drugs, Products)',
    'Commercial Law and Contracts',
    'Commercial Real Estate',
    'Constitutial Law',
    'Construction (Disputes, Liens)',
]

export const reviews = [
    {
        avatar: avatar1,
        name: "Mitchell M.",
        address: "Cherry Hill, NJ",
        category: "Family Law",
        reviewText: "This lawyer exceeds my expectations. I found Attorney Mullen to be very reliable, courteous and prompt...",
    },
    {
        avatar: avatar2,
        name: "Joel C.",
        address: "Little Rock, AK",
        category: "Job & Employment Law",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ... dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    },
    {
        avatar: avatar3,
        name: "Brigada R.",
        address: "Dallas, TX",
        category: "Family Law",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ... ",
    },
]

export const ratings = [
    { title: 'Responded in a timely manner', rating: 4 },
    { title: 'Answered questions clearly', rating: 5 },
    { title: 'Understood needs', rating: 4 },
    { title: 'Gave complete and clear information', rating: 5 },
    { title: 'Knowledgeable in legal area', rating: 4 },
    { title: 'Good value for money', rating: 5 },
    { title: 'Would hire again', rating: 4 },
    { title: 'Would recommend to friend', rating: 5 },
]

export const zipCodes = [
    { id: 1, value: 'Noweheresville, XX', zipCode: '00000' },
];