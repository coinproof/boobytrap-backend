import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"owners",
    type:"document",
    title:"Project Owners",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Full Name",
            validation: Rule => Rule.required(),
        },
        {
            name:"id",
            type:"number",
            title:"ID on Blockchain",
            validation: Rule => Rule.required(),
        },
        {
            name:"alias",
            type:"string",
            title:"Alias",
        },
        {
            name:"telegram",
            type:"url",
            title:"Telegram",
            validation: Rule => Rule.required(),
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
            name:"uprojects",
            type:"reference",
            to: [{
                type:"uprojects",
            }]
        },
        {
            name:"lprojects",
            type:"reference",
            to: [{
                type:"lprojects",
            }]
        },
        {
            name:"twitter",
            type:"url",
            title:"Twitter",
        },
        {
            name:"trapPoints",
            type:"number",
            title:"Trappoints",
        },
        {
            name:"image",
            type:"image",
            title:"Image",
            validation: Rule => Rule.required(),
        },
        {
            name:"comStrength",
            type:"number",
            title:"Community Strength (in k)",
            validation: Rule => Rule.required(),
        },
        {
            name:"numProjects",
            type:"number",
            title:"Number of Projects",
            validation: Rule => Rule.required(),
        },
        {
            name:"experience",
            type:"number",
            title:"Experience in Months",
            validation: Rule => Rule.required(),
        },
        {
            name:"avgLife",
            type:"number",
            title:"Avg life of Projects in Months",
            validation: Rule => Rule.required(),
        },
        {
            title: 'About',
            name: 'about',
            type: 'string',
          }
    ]
}