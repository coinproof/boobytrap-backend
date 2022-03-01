import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"developers",
    type:"document",
    title:"Developers",
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
                source:"alias",
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
            name:"github",
            type:"url",
            title:"Github Profile",
        },
        {
            name:"image",
            type:"image",
            title:"Image",
            validation: Rule => Rule.required(),
        },
        {
            name:"numProjects",
            type:"number",
            title:"Number of Projects",
            validation: Rule => Rule.required(),
        },
        {
            name:"avgPrice",
            type:"string",
            title:"Avg Cost",
        },
        {
            name:"experience",
            type:"number",
            title:"Experience in Months",
            validation: Rule => Rule.required(),
        },
        {
            name:"skills",
            type:"string",
            title:"Skills",
            options: {
                list: [
                  { title: 'NFT Marketplace', value: 'NFT Marketplace' },
                  { title: 'DAPP Development', value: 'DAPP Development' },
                  { title: 'Smart Contract Development', value: 'Smart Contract Development' },
                  { title: 'Token Development', value: 'Token Development' },
                  { title: 'Blockchain Development', value: 'Blockchain Development' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name:"otherSkills",
            type:"string",
            title:"Any other skills",
        },
        {
            title: 'About',
            name: 'about',
            type: 'string',
          }
    ]
}
