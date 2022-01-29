export default{
    name:"projectstat",
    type:"document",
    title:"Project Status",
    fields:[
        {
            name:"status",
            type:"string",
            title:"Set Status",
            validation: Rule => Rule.required(),
        },
    ]
}