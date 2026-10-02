# Global — Landing Page de Renovação de CNH

Landing page da **Global**, assessoria para renovação da CNH brasileira para brasileiros que vivem em Portugal e no resto da Europa.

Feita com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS v4**. Os ícones são do **lucide-react**.

![Comparação com a referência](docs/comparacao-referencia.png)

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra http://localhost:3000.

Para gerar e rodar a versão de produção:

```bash
npm run build
npm start
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Link, número e mensagem do WhatsApp (todos os botões usam este arquivo) | `src/lib/whatsapp.ts` |
| Textos, benefícios, etapas, depoimentos, FAQ e imagens | `src/data/content.ts` |
| Cores e fontes | `src/app/globals.css` e `src/app/layout.tsx` |
| Seções da página | `src/components/` |

## Estrutura

```
src/
  app/            layout, página e estilos globais
  components/     Header, Hero, About, Services, HowItWorks,
                  ClientGallery, Testimonials, FAQ, FinalCTA,
                  WhatsAppButton e componentes auxiliares
  data/           conteúdo da página
  lib/            configuração do WhatsApp
public/images/    imagens
```

## Imagens provisórias

Só a imagem `public/images/lisboa-bandeira.webp` é original. As demais foram recortadas da imagem de referência e estão em baixa resolução. Para trocar uma imagem, substitua o arquivo mantendo o mesmo nome:

- `public/images/hero-pessoa.webp`: pessoa do Hero (de preferência com fundo transparente)
- `public/images/about-global.webp`: composição com o globo
- `public/images/logo-emblema.webp`: emblema do logo (de preferência em SVG)
- `public/images/depoimentos/*.webp`: avatares dos depoimentos

## Prints de clientes (LGPD)

Os prints em `public/images/registros/` vêm do grupo de clientes no WhatsApp. Telefones, sobrenomes, fotos de perfil e os dados das CNHs (rosto, filiação, números e assinatura) foram borrados. Antes de adicionar um print novo, borre esses dados e cadastre o arquivo em `GALLERY`, no `src/data/content.ts`.

## Publicar

O jeito mais simples é importar este repositório na [Vercel](https://vercel.com/new). O projeto é detectado automaticamente como Next.js e não precisa de nenhuma configuração.
