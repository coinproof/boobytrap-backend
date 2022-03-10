import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"uprojects",
    type:"document",
    title:"Upcoming Projects",
    fields:[
        {
            name:"email",
            type:"email",
            title:"Email",
        },
        {
            name:"name",
            type:"string",
            title:"Project Name",
            validation: Rule => Rule.required(),
        },
        {
            name:"tracker",
            type:"string",
            title:"Tracker",
            validation: Rule => Rule.required(),
        },
        {
            name:"id",
            type:"number",
            title:"ID on Blockchain",
            validation: Rule => Rule.required(),
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source:"name",
                isUnique: isUniqueAcrossAllDocuments,
            },
            validation: Rule => Rule.required(),
        },
        {
            name:"trappoints",
            type:"number",
            title:"Trap Points",
        },
        {
            name:"comStrength",
            type:"number",
            title:"Community Strength (in k)",
        },
        {
            name:"contract",
            type:"string",
            title:"Contract Address",
        },
        {
            name:"audit",
            type:"string",
            title:"Audit Link",
        },
        {
            name:"kyc",
            type:"string",
            title:"KYC Link",
        },
        {
            name:"budget",
            type:"string",
            title:"Private/Seed funding",
        },
        {
            name:"owner",
            type:"reference",
            to: [{
                type:"owners",
            }]
        },
        {
            name:"telegram",
            type:"url",
            title:"Telegram",
            validation: Rule => Rule.required(),
        },
        {
            name:"twitter",
            type:"url",
            title:"Twitter",
            validation: Rule => Rule.required(),
        },
        {
            name:"website",
            type:"url",
            title:"Website",
            validation: Rule => Rule.required(),
        },
        {
            name:"facebook",
            type:"url",
            title:"Facebook",
        },
        {
            name:"discord",
            type:"url",
            title:"Discord",
        },
        {
            name:"instagram",
            type:"url",
            title:"Instagram",
        },
        {
            name:"reditt",
            type:"url",
            title:"Reditt",
        },
        {
            name:"youtube",
            type:"url",
            title:"Youtube",
        },
        {
            name:"other",
            type:"string",
            title:"Other Socials",
        },
        {
            name:"tgOwner",
            description:"Provide your official TG handle where our team can approach you",
            type:"url",
            title:"TG Owner",
        },
        {
            name:"image",
            type:"image",
            title:"Upload Logo",
            validation: Rule => Rule.required(),
        },
        {
            name:"devwallet",
            type:"string",
            title:"Dev Wallet",
        },
        {
            name:"newlyLaunched",
            type:"boolean",
            title:"Is Newly Launched?",
        },
        {
            name:"teamwallet",
            type:"string",
            title:"Team Wallet",
        },
        {
            name:"isLaunched",
            type:"boolean",
            title:"Is Launched?",
            description:"Is Project Launched?"
        },
        {
            title: 'Project Status',
            name: 'status',
            type: 'string',
            options: {
              list: [
                { title: 'Exploring the idea', value: 'Exploring the idea' },
                { title: 'Early development', value: 'Early development' },
                { title: 'Final development stage', value: 'Final development stage' },
                { title: 'Ready to launch', value: 'Ready to launch' },
              ],
            },
          },
        {
            title: 'Description',
            validation: Rule => Rule.required(),
            name: 'description',
            type: 'string',
          },
          {
            title: 'Expert Opinion',
            name: 'expertOpinion',
            type: 'array', 
            of: [{type: 'block'}],
          }
    ]
}
