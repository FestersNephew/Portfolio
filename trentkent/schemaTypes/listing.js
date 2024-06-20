// schemas/listing.js
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
      name: 'listPrice',
      type: 'number',
      title: 'List Price',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'salePrice',
      type: 'number',
      title: 'Sale Price',
      validation: Rule => Rule.positive()
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: Rule => Rule.required().min(5).max(200)
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: Rule => Rule.required().min(2).max(100)
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
      validation: Rule => Rule.required().min(2).max(100)
    },
    {
      name: 'zipCode',
      type: 'string',
      title: 'ZIP Code',
      validation: Rule => Rule.required().min(5).max(10)
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
      title: 'Square Feet (Total)',
      validation: Rule => Rule.required().positive().integer()
    },
    {
      name: 'sqftFinished',
      type: 'number',
      title: 'Square Feet (Finished)',
      validation: Rule => Rule.positive().integer()
    },
    {
      name: 'daysOnMarket',
      type: 'number',
      title: 'Days on Market',
      validation: Rule => Rule.positive().integer()
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
      name: 'propertyCategory',
      type: 'string',
      title: 'Property Category',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'listingAgent',
      type: 'reference',
      to: [{ type: 'agent' }],
      title: 'Listing Agent',
      validation: Rule => Rule.required()
    },
    {
      name: 'buyersAgent',
      type: 'reference',
      to: [{ type: 'agent' }],
      title: 'Buyer\'s Agent',
      validation: Rule => Rule.required()
    },
    {
      name: 'yearBuilt',
      type: 'number',
      title: 'Year Built',
      validation: Rule => Rule.positive().integer()
    },
    {
      name: 'lotSize',
      type: 'number',
      title: 'Lot Size (Acres)',
      validation: Rule => Rule.positive()
    },
    {
      name: 'mlsNumber',
      type: 'string',
      title: 'MLS Number',
      validation: Rule => Rule.required()
    },
    {
      name: 'dateListed',
      type: 'date',
      title: 'Date Listed',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'dateSold',
      type: 'date',
      title: 'Date Sold',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'pricePerSqft',
      type: 'number',
      title: 'Price per Square Foot',
      readOnly: true,
      description: 'Automatically calculated as Sale Price divided by Finished Square Feet',
      inputComponent: () => null // Hide the input field in the Studio
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'address'
    }
  }
}
