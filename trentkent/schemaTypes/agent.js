export default {
  name: 'agent',
  type: 'document',
  title: 'Agents',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      validation: Rule => Rule.required().regex(/^\+?1?\d{9,15}$/, 'Please enter a valid phone number')
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      validation: Rule => Rule.required().min(10).max(2000)
    }
  ]
}
