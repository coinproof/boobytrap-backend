import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"amagroups",
    type:"document",
    title:"AMA Groups/Call Channels",
    fields:[
        {
            name:"name",
            type:"string",
            title:" Group Name",
            validation: Rule => Rule.required(),
        },
        {
            name:"email",
            type:"email",
            title:"Email",
        },
        {
            name:"id",
            type:"number",
            title:"ID on Blockchain",
            validation: Rule => Rule.required(),
        },
        {
            name:"groupowner",
            type:"string",
            title:"Group Owner",
        },
        {
            name:"admin",
            type:"string",
            title:"Admin",
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
            validation: Rule => Rule.required(),
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
        },
        {
            name:"instagram",
            type:"url",
            title:"Instagram",
        },
        {
            name:"experience",
            type:"number",
            title:"Experience (in Months)",
            validation: Rule => Rule.required(),
        },
        {
            name:"tgOwner",
            type:"url",
            title:"Owner's TG",
        },
        {
            name:"groupCreated",
            type:"date",
            title:"Group Created on",
        },
        {
            name:"tgAdmin",
            type:"url",
            title:"Admin's TG",
        },
        {
            name:"avgCost",
            type:"string",
            title:"Avg Price",
        },
        {
            name:"image",
            type:"image",
            title:"Group Image",
            validation: Rule => Rule.required(),
        },
        {
            title: 'Engagement Rating',
            name: 'engagementRating',
            type: 'string',
            options: {
              list: [
                { title: 'Only bots, Stay away!', value: 'Only bots, Stay away!' },
                { title: 'Decent activity with quite a few bots', value: 'Decent activity with quite a few bots' },
                { title: 'Highly active with high number of genuine members', value: 'Highly active with high number of genuine members' },
              ],
            },
            validation: Rule => Rule.required(),
          },
        {
            title: 'Return On Investment',
            name: 'roi',
            type: 'string',
            options: {
              list: [
                { title: 'Below Average (Negligible price movement)', value: 'Below Average (Negligible price movement)' },
                { title: 'Value for Money (2-5x after AMAs & Calls)', value: 'Value for Money (2-5x after AMAs & Calls)' },
                { title: 'Outstanding (5-10x Pumps following AMAs & Calls)', value: 'Outstanding (5-10x Pumps following AMAs & Calls)' },
              ],
            },
            validation: Rule => Rule.required(),
          },
        {
            title: 'About',
            name: 'about',
            type: 'string',
          },
        {
            name:"wallet",
            type:"string",
            title:"Wallet Address",
        },
    ]
}