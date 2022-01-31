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
            validation: Rule => Rule.required(),
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
            name:"contract",
            type:"string",
            title:"Contract Address",
        },
        {
            name:"audit",
            type:"url",
            title:"Audit Link",
            validation: Rule => Rule.required(),
        },
        {
            name:"kyc",
            type:"url",
            title:"KYC Link",
            validation: Rule => Rule.required(),
        },
        {
            name:"budget",
            type:"string",
            title:"Private/Seed funding",
        },
        {
            name:"owner",
            validation: Rule => Rule.required(),
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
            title: 'Project Status',
            name: 'status',
            type: 'string',
            options: {
              list: [
                { title: 'Exploring the idea', value: 'exploring' },
                { title: 'Early development', value: 'early' },
                { title: 'Final development stage', value: 'final' },
                { title: 'Ready to launch', value: 'ready' },
              ],
            },
          },
        {
            title: 'Description',
            validation: Rule => Rule.required(),
            name: 'description',
            type: 'array', 
            of: [{type: 'block'}],
          }
    ]
}