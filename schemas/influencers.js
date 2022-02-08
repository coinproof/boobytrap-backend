import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"influencers",
    type:"document",
    title:"Influencers",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Full Name",
            validation: Rule => Rule.required(),
        },
        {
            name:"alias",
            type:"string",
            title:"Alias",
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source:"alias",
                isUnique: isUniqueAcrossAllDocuments,
            },
            validation: Rule => Rule.required(),
        },
        {
            name:"id",
            type:"number",
            title:"ID on Blockchain",
            validation: Rule => Rule.required(),
        },
        {
            name:"experience",
            type:"string",
            title:"Experience in Months",
            validation: Rule => Rule.required(),
        },
        {
            name:"avgPrice",
            type:"number",
            title:"Avg Cost",
            validation: Rule => Rule.required(),
        },
        {
            name:"twitter",
            type:"url",
            title:"Twitter",
            validation: Rule => Rule.required(),
        },
        {
            name:"telegram",
            type:"url",
            title:"Telegram",
            validation: Rule => Rule.required(),
        },
        {
            name:"instagram",
            type:"url",
            title:"Instagram",
            validation: Rule => Rule.required(),
        },
        {
            name:"image",
            type:"image",
            title:"Image",
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
    ]
}