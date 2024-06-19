export default {
  name: 'listing',
  type: 'document',
  title: 'Real Estate Listings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().min(5).max(100)
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.required().min(10).max(2000)
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: Rule => Rule.required().positive().integer()
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: Rule => Rule.required()
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: Rule => Rule.required()
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
      validation: Rule => Rule.required()
    },
    {
      name: 'zipCode',
      type: 'string',
      title: 'Zip Code',
      validation: Rule => Rule.required().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid zip code')
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true // Enables image cropping
      }
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Bedrooms',
      validation: Rule => Rule.required().positive().integer()
    },
    {
      name: 'bathrooms',
      type: 'number',
      title: 'Bathrooms',
      validation: Rule => Rule.required().positive().integer()
    },
    {
      name: 'sqft',
      type: 'number',
      title: 'Square Feet',
      validation: Rule => Rule.required().positive().integer()
    },
    {
      name: 'propertyType',
      type: 'string',
      title: 'Property Type',
      options: {
        list: [
          { title: 'House', value: 'house' },
          { title: 'Condo', value: 'condo' },
          { title: 'Land', value: 'land' },
          { title: 'Farm', value: 'farm' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'agent',
      type: 'reference',
      to: [{ type: 'agent' }],
      title: 'Agent'
    }
  ]
}
