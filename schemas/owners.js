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
            name:"twitter",
            type:"url",
            title:"Twitter",
            validation: Rule => Rule.required(),
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
    ]
}