import createMDX from '@next/mdx';
export default createMDX()({pageExtensions:['js','jsx','md','mdx','ts','tsx'],poweredByHeader:false,turbopack:{root:process.cwd()}});
