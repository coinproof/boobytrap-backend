import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"lprojects",
    type:"document",
    title:"Launched Projects",
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
            name:"trappoints",
            type:"number",
            title:"Trap Points",
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
            type:"string",
            title:"Audit Link",
        },
        {
            name:"kyc",
            type:"string",
            title:"KYC Link",
        },
        {
            name:"marketingWallet",
            type:"string",
            title:"Marketing Wallet",
        },
        {
            name:"budget",
            type:"string",
            title:"Marketing Budget",
        },
        {
            name:"tradingStartDate",
            type:"date",
            title:"When did the trading begin?",
            validation: Rule => Rule.required(),
        },
        {
            name:"lpLocked",
            type:"date",
            title:"Liquidity locked till",
        },
        {
            name:"initialMC",
            type:"string",
            title:"Initial MC",
        },
        {
            name:"launchPrice",
            type:"number",
            title:"Launch Price in USD"
        },
        {
            name:"athMC",
            type:"string",
            title:"MC at ATH (in USD)",
        },
        {
            name:"comStrength",
            type:"number",
            title:"Community Strength (in k)",
        },
        {
            name:"owner",
            type:"reference",
            to: [{
                type:"owners",
            }]
        },
        {
            title: 'Marketing Status',
            name: 'marketingStatus',
            type: 'string',
            options: {
              list: [
                { title: 'Aggressive Marketing', value: 'Aggressive Marketing' },
                { title: 'Being actively marketed', value: 'Being actively marketed' },
                { title: 'No marketing', value: 'No marketing' },
              ],
            },
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
            name:"teamwallet",
            type:"string",
            title:"Team Wallet",
        },
        {
            name:'cmc',
            type:'string',
            title:'CMC Link'
        },
        {
            name:'cg',
            type:'string',
            title:'CG Link'
        },
        {
            name:"cgId",
            type:"string",
            title:"CG API ID",
        },
        {
            name:'holdersCount',
            type:'string',
            title:'Number of Holders',
        },
        {
            name:'exchanges',
            type:"string",
            title:"Exchanges Listed",
        },
        {
            name:"chart",
            type:"url",
            title:"Chart Link"
        },
        {
            name:"newlyLaunched",
            type:"boolean",
            title:"Is Newly Launched?",
        },
        {
            title: 'Development Status',
            name: 'devStatus',
            type: 'string',
            options: {
              list: [
                { title: 'All promised utilities delivered', value: 'All promised utilities delivered' },
                { title: 'Close to delivering promised utilities', value: 'Close to delivering promised utilities' },
                { title: 'Planning new utilities', value: 'Planning new utilities' },
                { title: 'Failed to deliver utilities', value: 'Failed to deliver utilities' },
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
          },
          {
            title: "BBT's Verdict",
            name: 'verdict',
            type: 'array', 
            of: [{type: 'block'}],
          }
    ],
    orderings: [
    {
      title: 'Sort Trappoints',
      name: 'trappointsAsc',
      by: [
        {field: 'trappoints', direction: 'asc'}
      ]
    }
  ]
}