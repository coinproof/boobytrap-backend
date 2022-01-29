export default{
    name:"blogs",
    type:"document",
    title:"Blogs",
    fields:[
        {
            name:"title",
            type:"string",
            title:"Title",
            validation: Rule => Rule.required(),
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source:"title",
                maxLength:"96",
            },
            validation: Rule => Rule.required(),
        },
        {
            name:"date",
            type:"date",
            title:"Date Published",
        },
        {
            name:"author",
            type:"reference",
            title:"Author",
            to:[{
                type:"authors"
            }],
            validation: Rule => Rule.required(),
        },
        {
            name:"image",
            type:"image",
            title:"Image",
            validation: Rule => Rule.required(),
        },
        {
            name:"summary",
            type:"string",
            title:"Summary",
        },
        {
            title: 'Content',
            validation: Rule => Rule.required(),
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}],
          }
    ]
}