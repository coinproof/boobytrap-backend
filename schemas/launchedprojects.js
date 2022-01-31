export default{
    name:"lprojects",
    type:"document",
    title:"Launched Projects",
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
            name:"marketingWallet",
            type:"string",
            title:"Marketing Wallet",
            validation: Rule => Rule.required(),
        },
        {
            name:"budget",
            type:"string",
            title:"Marketing Budget",
            validation: Rule => Rule.required(),
        },
        {
            name:"tradingStartDate",
            type:"date",
            title:"When did the trading begin?",
            validation: Rule => Rule.required(),
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
            name:"owner",
            validation: Rule => Rule.required(),
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
                { title: 'Aggressive Marketing', value: 'aggressive' },
                { title: 'Being actively marketed', value: 'actively' },
                { title: 'No marketing', value: 'none' },
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
            title: 'Development Status',
            name: 'devStatus',
            type: 'string',
            options: {
              list: [
                { title: 'All promised utilities delivered', value: 'delivered' },
                { title: 'Close to delivering promised utilities', value: 'willDeliver' },
                { title: 'Planning new utilities', value: 'planning' },
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