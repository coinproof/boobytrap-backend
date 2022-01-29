export default{
    name:"projects",
    type:"document",
    title:"Projects",
    fields:[
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
            name:"image",
            type:"image",
            title:"Upload Logo",
            validation: Rule => Rule.required(),
        },
        {
            title: 'Project Status',
            name: 'status',
            type: 'string',
            options: {
              list: [
                { title: 'Upcoming', value: 'upcoming' },
                { title: 'Ongoing', value: 'ongoing' },
                { title: 'Abandoned', value: 'abandoned' },
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