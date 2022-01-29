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