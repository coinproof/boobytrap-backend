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
            name:"groupowner",
            type:"string",
            title:"Group Owner",
            validation: Rule => Rule.required(),
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
            name:"telegram",
            type:"url",
            title:"Telegram",
            validation: Rule => Rule.required(),
        },
        {
            name:"tgOwner",
            type:"url",
            title:"Owner's TG",
            validation: Rule => Rule.required(),
        },
        {
            name:"tgAdmin",
            type:"url",
            title:"Admin's TG",
        },
        {
            name:"avgCost",
            type:"number",
            title:"Avg Price",
            validation: Rule => Rule.required(),
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
                { title: 'Only bots, Stay away!', value: 'onlyBots' },
                { title: 'Decent activity with quite a few bots', value: 'decent' },
                { title: 'Highly active with high number of genuine members', value: 'highlyActive' },
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
                { title: 'Below Average (Negligible price movement)', value: 'belowAvg' },
                { title: 'Value for Money (2-5x after AMAs & Calls)', value: 'vfm' },
                { title: 'Outstanding (5-10x Pumps following AMAs & Calls)', value: 'outstanding' },
              ],
            },
            validation: Rule => Rule.required(),
          },
    ]
}