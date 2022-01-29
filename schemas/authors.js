export default{
    name:"authors",
    type:"document",
    title:"Authors",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Name",
            validation: Rule => Rule.required(),
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            validation: Rule => Rule.required(),
        }
    ]
}