export function serialize(jsonld: any) {
    return `<script type="application/ld+json">
    ${JSON.stringify(jsonld, null, 2)}
    </script>`
}
