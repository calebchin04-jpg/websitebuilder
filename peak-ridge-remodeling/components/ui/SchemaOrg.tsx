/**
 * Renders JSON-LD structured data as a <script> tag.
 * Place at the bottom of page components that need schema markup.
 */
export function SchemaOrg({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
