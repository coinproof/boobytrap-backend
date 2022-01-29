export default{
    name:"iep",
    type:"document",
    title:"Investors Education Program",
    fields:[
        {
            title:"Video Title",
            name:"title",
            type:"string",
            validation: Rule => Rule.required(),
        },
        {
            name:"vidID",
            type:"string",
            title:"Video ID",
            validation: Rule => Rule.required(),
        },
        {
            name:"summary",
            type:"string",
            title:"Summary",
        }
    ]
}