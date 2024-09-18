import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="https://github.com/lucaxgomex/engenharia-software-4">GitHub</FooterLink>
        <FooterLink href="https://tailwindcss.com/docs/installation">TailwindCSS</FooterLink>
        <FooterLink href="https://flowbite-react.com/docs/getting-started/introduction">Flowbite</FooterLink>
        <FooterLink href="https://vitejs.dev/guide/">ViteJS</FooterLink>
        <FooterLink href="https://fastify.dev/docs/latest/">Fastify</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
