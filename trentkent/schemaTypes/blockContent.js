import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
    // Custom inline image block
    defineArrayMember({
      type: 'object',
      name: 'inlineImage',
      title: 'Inline Image',
      fields: [
        {
          type: 'image',
          name: 'image',
          title: 'Image',
          options: { hotspot: true },
        },
        {
          type: 'string',
          name: 'alt',
          title: 'Alt text',
        },
      ],
      preview: {
        select: {
          imageUrl: 'image.asset.url',
          title: 'alt',
        },
        prepare({ imageUrl, title }) {
          return {
            title: title || 'No alt text',
            media: imageUrl,
          };
        },
      },
    }),
  ],
});
